import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CurrencyFormat from 'react-currency-format';

import db from '../firebase';
import GasStation from '../svg/GasStation';
import Engine from '../svg/Engine';
import Shift from '../svg/Shift';
import HeatedSeat from '../svg/HeatedSeat';
import Breaks from '../svg/Breaks';
import TopSpeed from '../svg/TopSpeed';
import LoanCalculator from './LoanCalculator';
import { useStateValue } from '../StateProvider';
import CarDetailsSkeleton from './CarDetailsSkeleton';

function CarDetails() {
  const [{ minMaxPrice, minMaxMileage, carsResults }, dispatch] =
    useStateValue();
  const { id } = useParams();
  const [carDetailsInfo, setCarDetailsInfo] = useState({});
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    db.collection('cars')
      .doc(id)
      .get()
      .then((car) => {
        setCarDetailsInfo(car.data());
        setFetching(false);
      })
      .catch((error) => {
        console.log('Error fetching the DB', error);
      });
  }, []);

  useEffect(() => {
    if (carsResults.length === 0) {
      db.collection('cars')
        .get()
        .then((cars) => {
          const carsResults = cars.docs.map((car) => {
            return { ...car.data(), carId: car.id };
          });

          const pricesArray = carsResults.map((car) => Number(car.price));
          const minPrice = Math.min(...pricesArray);
          const maxPrice = Math.max(...pricesArray);

          const milesArray = carsResults.map((car) => Number(car.odometer));
          const minMileage = Math.min(...milesArray);
          const maxMileage = Math.max(...milesArray);

          dispatch({
            type: 'SET_CARS_RESULTS',
            carsResults,
          });

          // Setting the min and max for the price and mileage
          dispatch({
            type: 'SET_MIN_MAX_PRICE_FILTER',
            minMaxPrice: [minPrice, maxPrice],
          });

          dispatch({
            type: 'SET_MIN_MAX_MILEAGE_FILTER',
            minMaxMileage: [minMileage, maxMileage],
          });
        })
        .catch((error) => {
          console.log('Error fetching the DB', error);
        });
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return fetching ? (
    <CarDetailsSkeleton />
  ) : (
    <main className='carDetails'>
      <div className='carDetails_imgContainer'>
        <img
          src={`https://raw.githubusercontent.com/kevincastrochavez/carstro-cars-uploader/main/public/carPictures/${carDetailsInfo?.vin}.png`}
          alt=''
        />
      </div>

      <div className='carDetails_info'>
        <Link
          to={`/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`}
          className='carDetails_linkBack'
        >
          <ArrowBackIosNewIcon /> Back to Inventory
        </Link>

        <div className='carDetails_features'>
          <div className='carDetails_features-heading'>
            <h1>
              {carDetailsInfo.year} {carDetailsInfo.brand}{' '}
              {carDetailsInfo.model}
            </h1>

            <div className='carDetails_features-numbers'>
              <span>
                {
                  <CurrencyFormat
                    value={carDetailsInfo.odometer}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                }{' '}
                mi
              </span>

              <div className='carDetails_features-divider'></div>

              <span>VIN {carDetailsInfo.vin}</span>
            </div>
          </div>

          <div className='carDetails_features-price'>
            <span className='carDetails_features-bigPrice'>
              <CurrencyFormat
                value={carDetailsInfo.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </span>

            <div className='carDetails_features-bigDivider'></div>

            <div className='carDetails_features-offer'>
              <p>Special Offer</p>
              <span>
                4.99% <span>APR</span>
              </span>
            </div>
          </div>

          <Link className='carDetails_features-btn' to='/salesRepresentatives'>
            Contact Dealer
          </Link>
        </div>

        <div className='carDetails_iconsContainer'>
          <div className='carDetails_icon'>
            <GasStation />
            <p>{carDetailsInfo.mpg}</p>
            <p>est. MPG</p>
          </div>

          <div className='carDetails_icon'>
            <TopSpeed />
            <p>{carDetailsInfo.topSpeed}</p>
            <p>Top Speed</p>
          </div>

          <div className='carDetails_icon'>
            <Engine />
            <p>{carDetailsInfo.cylinders}</p>
            <p>Cylinders</p>
          </div>

          <div className='carDetails_icon'>
            <Shift />
            <p>{carDetailsInfo.transmission}</p>
          </div>

          <div className='carDetails_icon'>
            <HeatedSeat />
            <p>Heated Seats</p>
          </div>

          <div className='carDetails_icon'>
            <Breaks />
            <p>ABS Breaks</p>
          </div>
        </div>
      </div>

      <LoanCalculator
        className='carDetails_calculator'
        carInfo={carDetailsInfo}
      />
    </main>
  );
}

export default CarDetails;
