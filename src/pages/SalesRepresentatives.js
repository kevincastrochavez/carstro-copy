import React, { useEffect } from 'react';

import SaleRepresentativeCard from '../components/SaleRepresentativeCard';
import Map from '../components/Map';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import { saleRepresntative } from '../utilities/srObject.js';

function SalesRepresentatives() {
  const [{ carsResults }, dispatch] = useStateValue();

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='salesRepresentativesContainer'>
      <main className='salesRepresentatives_main'>
        <h1 className='main_h1'>Sales Representatives</h1>
        <div className='salesRepresentatives_main_div'>
          <section className='main_section_representatives'>
            <div className='sales-scrollbarSeparation'>
              <ul id='salesRepresentatives_ul'>
                {saleRepresntative.map((item) => (
                  <SaleRepresentativeCard {...item} />
                ))}
              </ul>
            </div>
          </section>
          <section className='main_section_map'>
            <h2 className='salesRepresentatives_section_h2'>
              {' '}
              Find your Dealer
            </h2>
            <Map data={saleRepresntative} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default SalesRepresentatives;
