import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useStateValue } from '../StateProvider';

function BrowseByBrand() {
  const [{ minMaxPrice, minMaxMileage }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const selectSingleBrand = (brand) => {
    dispatch({
      type: 'SET_SINGLE_BRAND',
      singleBrand: brand,
    });

    navigate(
      `/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`
    );
  };

  return (
    <div className='homeBrowseByBrand'>
      <h2 className='homeSingleBrand'>Browse by Brand</h2>
      <div className='homeBrandLogos'>
        <div className='homeBrandLogos-column'>
          <div
            className='homeBrandLogos-singleLogo'
            onClick={() => selectSingleBrand('Kia')}
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Kia.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Kia</div>
          </div>
          <div
            className='homeBrandLogos-singleLogo'
            onClick={() => selectSingleBrand('Renault')}
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Renault.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Renault</div>
          </div>
          <div
            className='homeBrandLogos-singleLogo singleLogo_none'
            id='homeSingleBrandLogoLast2'
            onClick={() => selectSingleBrand('Ferrari')}
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Ferrari.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Ferrari</div>
          </div>
        </div>
        <div className='homeBrandLogos-column'>
          <div
            className='homeBrandLogos-singleLogo singleLogo_none'
            onClick={() => selectSingleBrand('BMW')}
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/BMW.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>BMW</div>
          </div>
          <div
            className='homeBrandLogos-singleLogo'
            onClick={() => selectSingleBrand('Lamborghini')}
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Lamborghini.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Lamborghini</div>
          </div>
          <div
            className='homeBrandLogos-singleLogo'
            onClick={() => selectSingleBrand('Jaguar')}
            id='homeSingleBrandLogoLast2'
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Jaguar.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Jaguar</div>
          </div>
        </div>
        <div className='homeBrandLogos-column'>
          <div
            className='homeBrandLogos-singleLogo'
            onClick={() => selectSingleBrand('Audi')}
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Audi.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Audi</div>
          </div>
          <div
            className='homeBrandLogos-singleLogo'
            onClick={() => selectSingleBrand('Ford')}
            id='homeSingleBrandLogoLast2'
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Ford.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Ford</div>
          </div>
          <div
            className='homeBrandLogos-singleLogo'
            onClick={() => selectSingleBrand('Honda')}
            id='homeSingleBrandLogoLast2'
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Honda.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Honda</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseByBrand;
