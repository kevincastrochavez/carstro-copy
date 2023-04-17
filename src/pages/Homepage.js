import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import db from '../firebase';
import { useStateValue } from '../StateProvider';
import { saleRepresntative } from '../utilities/srObject.js';
import BrowseByBrand from '../components/BrowseByBrand';

function Homepage() {
  const navigate = useNavigate();
  const [{ minMaxPrice, minMaxMileage }, dispatch] = useStateValue();
  const [carBrands, setCarBrands] = useState([]);
  const [brandSelected, setBrandSelected] = useState('');

  const getBrand = (e) => {
    setBrandSelected(e.target.value);
  };

  const selectSingleBrand = () => {
    dispatch({
      type: 'SET_SINGLE_BRAND',
      singleBrand: brandSelected,
    });

    navigate(
      `/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`
    );
  };

  useEffect(() => {
    db.collection('cars')
      .get()
      .then((cars) => {
        const carsResults = cars.docs.map((car) => {
          return { ...car.data(), carId: car.id };
        });

        // Getting just the brands
        const carsResultsForBrands = cars.docs.map((car) => {
          return car.data().brand;
        });

        setCarBrands([...new Set(carsResultsForBrands)]);

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
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='homepage-container'>
      <div className='bannerContainer'>
        <div className='main-image'>
          <div className='home_heroOverlay'></div>

          <img
            className='home-mainImage home-mainImage-l'
            src='homepageImages/main-l.jpg'
            alt='Audi car in road on Fall season'
          />
          <img
            className='home-mainImage home-mainImage-m'
            src='homepageImages/main-m.jpg'
            alt='Audi car in road on Fall season'
          />
          <img
            className='home-mainImage home-mainImage-s'
            src='homepageImages/main-s.jpg'
            alt='Audi car in road on Fall season'
          />
        </div>
        <div className='home-mainText'>
          <div className='home-main-Title'>
            <h1>Same quality, lower price</h1>
          </div>
          <div className='home-main-Subtitle'>
            <p1>
              Our vision is to help more people to own their dream car, and we
              are making it possible...
            </p1>
          </div>
          <button
            type='button'
            className='exploreInput'
            id='homeFindYoursButton'
            onClick={() => {
              navigate(
                `/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`
              );
            }}
          >
            Find Yours
          </button>
        </div>
      </div>

      <div className='exploreVehicles'>
        <div className='exploreVehicles-box'>
          <div className='exploreVehicles-text'>Explore Vehicles</div>
          <div className='exploreVehicles-input'>
            <form action='/action_page.php' className='homeForm'>
              <div className='home__select'>
                <label for='exploreBrand' hidden></label>
                <select
                  name='brand'
                  className='exploreInput'
                  id='exploreBrand'
                  onChange={(e) => getBrand(e)}
                >
                  <option value='selectBrand'>Select Brand</option>
                  {carBrands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>

                <KeyboardArrowDownIcon />
              </div>

              <input
                type='submit'
                value='View Inventory'
                disabled={
                  brandSelected === 'selectBrand' || brandSelected === ''
                    ? true
                    : false
                }
                className={`${
                  brandSelected === 'selectBrand' || brandSelected === ''
                    ? 'btn-disabled'
                    : 'btn-able'
                } exploreInput`}
                id='exploreSubmit'
                onClick={selectSingleBrand}
              />
            </form>
          </div>
        </div>
      </div>
      <div to='/marketing' className='home-marketing-section'>
        <div className='marketing-image'>
          <img
            className='home-marketingImage home-marketingImage-l'
            src='homepageImages/markLarge.png'
            alt='Car in sand for marketing purposes'
          />
          <img
            className='home-marketingImage home-marketingImage-s'
            src='homepageImages/markSmall.png'
            alt='Car in sand for marketing purposes'
          />
        </div>
        <div className='marketing-text'>
          <div className='marketing-title-and-text'>
            <h2>2023 Toyota 4Runner</h2>
            <p2r>Sleek and steady wins the race</p2r>
          </div>
          <Link to='/marketing' className='marketing-text-button'>
            <button className='home-marketing-button'>
              <h3>Learn More</h3>
            </button>
          </Link>
        </div>
      </div>

      <BrowseByBrand />

      <h2 className='homeSingleBrand'>Sales Representatives</h2>

      <div className='home_salesRepresentative'>
        {saleRepresntative.map((item) => (
          <div className='home_salesRepresentative-card' key={item.id}>
            <img src={item.image} alt={`${item.name} sales representative`} />

            <div className='home_salesRepresentative-info'>
              <p>{item.name}</p>

              <div className='home_salesRepresentative-location'>
                <LocationOnIcon />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
