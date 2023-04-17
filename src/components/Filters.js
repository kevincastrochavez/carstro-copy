import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

import db from '../firebase';
import { useStateValue } from '../StateProvider';
import FilterLabel from './FilterLabel';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import SliderRange from './Slider';
import FiltersSkeleton from './FiltersSkeleton';

function Filters() {
  const [{ showFilters, minMaxPrice, minMaxMileage }, dispatch] =
    useStateValue();

  const [clearAllFilters, setClearAllFilters] = useState(false);
  const [windowWidth, setWindowWidth] = useState(false);
  const [loadingFilters, setLoadingFilters] = useState(false);
  const navigate = useNavigate();

  const [brandFilterOptions, setBrandFilterOptions] = useState([]);
  const [yearsFilterOptions, setYearsFilterOptions] = useState([]);
  const [wheelsFilterOptions, setWheelsFilterOptions] = useState([]);
  const [colorsFilterOptions, setColorsFilterOptions] = useState([]);

  // Pulls data from db to populate unique filter options dynamically
  useEffect(() => {
    setLoadingFilters(true);

    db.collection('cars')
      .get()
      .then((cars) => {
        const carsResults = cars.docs.map((car) => {
          return car.data();
        });

        let brands = [];
        let years = [];
        let wheels = [];
        let colors = [];

        carsResults.forEach((result) => {
          brands.push(result.brand);
          years.push(result.year);
          wheels.push(result.tireSize);
          colors.push(result.color);
        });

        setBrandFilterOptions([...new Set(brands)]);
        setYearsFilterOptions([...new Set(years.sort())]);
        setWheelsFilterOptions([...new Set(wheels.sort())]);
        setColorsFilterOptions([...new Set(colors)]);

        setLoadingFilters(false);
      })
      .catch((error) => {
        console.log('Error fetching the DB', error);
      });
  }, []);

  // Opening filters by default if window is in the desktop view
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth >= 990) {
      dispatch({
        type: 'TOGGLE_FILTERS',
        showFilters: true,
      });
    }
  }, []);

  // Hides the filter component
  const hideFilters = () => {
    dispatch({
      type: 'TOGGLE_FILTERS',
      showFilters: false,
    });
  };

  // Clears all filters
  const clearFilters = () => {
    setClearAllFilters(true);
    // Resets the values for the minmax price and mileage
    navigate(
      `/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`
    );

    dispatch({ type: 'CLEAR_FILTERS' });

    // Sets the clear filters state to false to allow to select filters again and clear them as many times as the user desires
    setTimeout(() => {
      setClearAllFilters(false);
    }, 2000);
  };

  return (
    <section className={`filters ${!showFilters && 'filters_hidden'}`}>
      {loadingFilters ? (
        <FiltersSkeleton />
      ) : (
        <>
          <div className='filters_top'>
            {windowWidth < 990 && <h2>Filters</h2>}
            {windowWidth < 990 && (
              <CloseIcon className='filters_closeBtn' onClick={hideFilters} />
            )}
          </div>

          <Button
            onClick={clearFilters}
            className={`filters_button ${
              windowWidth >= 990 && 'filters_button-desktop'
            }`}
            text={'Clear All'}
            bgColor='green'
          />

          <div className='filters_divider'></div>

          <div className='filters_form'>
            <section>
              <h5>Brand</h5>

              <form className='filters_checkboxes'>
                {brandFilterOptions.map((brand) => {
                  return (
                    <div key={brand} className='filters_checkbox'>
                      <Checkbox
                        id={brand}
                        name='brands'
                        value={brand}
                        clearAll={clearAllFilters}
                      />
                      <FilterLabel option={brand} text={brand} />
                    </div>
                  );
                })}
              </form>
            </section>

            <section>
              <h5>Model Year</h5>

              <form className='filters_checkboxes'>
                {yearsFilterOptions.map((year) => {
                  return (
                    <div key={year} className='filters_checkbox'>
                      <Checkbox
                        id={year}
                        name='years'
                        value={year}
                        clearAll={clearAllFilters}
                      />
                      <FilterLabel option={year} text={year} />
                    </div>
                  );
                })}
              </form>
            </section>

            <section>
              <h5>Wheels</h5>

              <form className='filters_checkboxes'>
                {wheelsFilterOptions.map((wheel) => {
                  return (
                    <div key={wheel} className='filters_checkbox'>
                      <Checkbox
                        id={wheel}
                        name='wheels'
                        value={wheel}
                        clearAll={clearAllFilters}
                      />

                      <FilterLabel option={wheel} text={`${wheel}" Wheels`} />
                    </div>
                  );
                })}
              </form>
            </section>

            <section>
              <h5>Color</h5>

              <form className='filters_checkboxes filters_colors'>
                {colorsFilterOptions.map((color) => {
                  return (
                    <div key={color} className='filters_checkbox'>
                      <Checkbox
                        id={color}
                        name='colors'
                        value={color}
                        clearAll={clearAllFilters}
                        hidden
                      />
                      <FilterLabel option={color} colorsProp={true} />
                    </div>
                  );
                })}
              </form>
            </section>

            <section>
              <h5>Price</h5>

              <form className='filters_checkboxes'>
                <SliderRange
                  range={minMaxPrice}
                  price
                  text='price'
                  reset={clearAllFilters}
                />
              </form>
            </section>

            <section>
              <h5>Mileage</h5>

              <form className='filters_checkboxes'>
                <SliderRange
                  range={minMaxMileage}
                  text='mileage'
                  reset={clearAllFilters}
                />
              </form>
            </section>
          </div>
        </>
      )}
    </section>
  );
}

export default Filters;
