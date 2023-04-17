import React, { useEffect } from 'react';

import { useStateValue } from '../StateProvider';
import db from '../firebase';

function Marketing() {
  const [{ carsResults }, dispatch] = useStateValue();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <div className='marketingContainer'>
      <div className='marketing-top-img-container'>
        <img
          className='marketing-car-rock-img'
          src='marketingImages/marketing-car-rock.jpg'
          alt=''
        />
        <img
          className='marketing-car-rock-img-ipad'
          src='marketingImages/marketing-car-rock-ipad.jpg'
          alt=''
        />
        <img
          className='marketing-car-rock-img-large'
          src='marketingImages/marketing-car-rock-large.jpg'
          alt=''
        />
      </div>
      <div className='marketing-h1-info-wrap'>
        <div className='marketing-h1-container'>
          <h1 className='marketing-h1'>
            The role of electric cars in the race towards sustainability
          </h1>
        </div>
        <div className='marketing-wrap-text-img'>
          <div className='marketing-p-container'>
            <p className='marketing-p'>
              The Electric Vehicle has become an unstoppable revolution despite
              many obstacles. Specialists agree that there is still a long way
              to go until all the cars sold abandon gasoline or diesel as fuel
              in favor of alternatives that contribute less to the climate
              crisis, such as electric batteries or fuel cells. of hydrogen.
            </p>
            <p className='marketing-p'>
              Although it is true that many times electric cars have been
              presented as a futuristic means of transport, today they are an
              increasingly common reality. Electric mobility promotes the
              conservation of the environment, reduces the emission of
              greenhouse gases, noise pollution, among others. However, few
              manufacturers offer 100% electric alternatives.
            </p>
            <p className='marketing-p'>
              These cars are present in the automotive market with models such
              as the Volkswagen ID3, the I Oniq Hyundai, among others.{' '}
            </p>
          </div>
          <div className='marketing-bot-img-container'>
            <img
              className='marketing-white-car-img-mobile'
              src='marketingImages/marketing-white-car-mobile.jpg'
              alt=''
            />
            <img
              className='marketing-white-car-img-ipad'
              src='marketingImages/marketing-white-car-ipad.jpg'
              alt=''
            />
            <img
              className='marketing-white-car-img-large'
              src='marketingImages/marketing-white-car-large.jpg'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='marketing-quote-container'>
        <p className='marketing-p-quote'>
          “The automotive sector is undergoing a revolution to leave combustion
          engines in oblivion and contribute less to the climate crisis”
        </p>
      </div>
    </div>
  );
}

export default Marketing;
