import React, { useEffect } from 'react';

import { useStateValue } from '../StateProvider.js';
import { saleRepresntative } from '../utilities/srObject.js';
import db from '../firebase';

function AboutUs() {
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
    <div className='aboutUsMainContainer'>
      <div className='aboutUsContainer'>
        <div className='about-us-h1-info-wrap'>
          <h1 className='about-us-h1-title'>About Us</h1>
          <div className='about-us-info-wrap'>
            <div className='aboutus-scrollbarSeparation'>
              <p className='about-us-p'>
                <h2 className='aboutUsSubtitle'>Our purpose</h2> Carstro® was
                founded with the purpose of becoming the leading provider of
                used car buyers and dealers. Our vehicle database is the largest
                in North America, providing confidence and the very best deals
                to millions of customers per year.
                <br />
                <br />
                <h2 className='aboutUsSubtitle'>Our experience</h2> Our 50 years
                of experience in the market show that there is no better place
                to get both an excellent quality car and a great price. These
                years also allow us to guide customers better than any other
                company in their search for their dream.
                <br />
                <br />
                <h2 className='aboutUsSubtitle'>The benefits</h2> In addition to
                having the most extensive inventory of vehicles from dealerships
                and private sellers, Carstro's® website offers you:
                <br />
                <br />
                <ul class='checkmark'>
                  <li>&#10003; Resources and tools to compare vehicles</li>

                  <br />
                  <li>&#10003; Accurate photographs of our cars</li>

                  <br />
                  <li>&#10003; Calculators able to adjust to your needs</li>

                  <br />
                  <li>
                    &#10003; Reports on the history and safety information of
                    each car
                  </li>

                  <br />
                  <li>
                    &#10003; Assistance with financing initiatives, insurance,
                    and guarantees
                  </li>
                </ul>
                <br />
                <br />
                <h2 className='aboutUsSubtitle'>Still lost?</h2>
                Not sure where to start? That is perfectly fine!
                <br /> We have
                <a className='aboutUsLinkSalesR' href='/salesRepresentatives'>
                  {' '}
                  representatives
                </a>{' '}
                who are eager to guide you through this process. Schedule an
                appointment today at no cost!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='about-us-our-team'>
        <h2 className='about-us-team-h2-title'>Our People</h2>

        <div className='aboutUs_representativesContainer'>
          {saleRepresntative.map((item) => (
            //Sales Representative Cards
            <div className='about-us-card-representative'>
              <img src={item.image} alt='Representative Name' />
              <p>{item.name}</p>
              <p>{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
