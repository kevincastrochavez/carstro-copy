import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useStateValue } from '../StateProvider';

function Hamburger({ white }) {
  const [{ minMaxPrice, minMaxMileage }] = useStateValue();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className='navbar'>
        <div className='menu-bars'>
          <MenuIcon
            onClick={showSidebar}
            className='hamBarsIcon'
            styles='width: 100%; height: 40px;'
          />
        </div>
      </div>

      <nav
        className={sidebar ? 'nav-menu active' : 'nav-menu '}
        id={white ? 'navMenu_white' : ''}
      >
        <ul className='nav-menu-items'>
          <NavLink
            to={'/'}
            className='nav-text'
            onClick={() => setSidebar(false)}
          >
            <p className='nav-text-a'>Home</p>
            <ArrowForwardIosIcon />
          </NavLink>
          <NavLink
            to={`/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`}
            className='nav-text'
            onClick={() => setSidebar(false)}
          >
            <p className='nav-text-a'>Inventory</p>

            <ArrowForwardIosIcon />
          </NavLink>

          <NavLink
            to={'/salesRepresentatives'}
            className='nav-text'
            onClick={() => setSidebar(false)}
          >
            <p className='nav-text-a'>Sales Representatives</p>
            <ArrowForwardIosIcon />
          </NavLink>

          <NavLink
            to={'/aboutUs'}
            className='nav-text'
            onClick={() => setSidebar(false)}
          >
            <p className='nav-text-a'>About Us</p>
            <ArrowForwardIosIcon />
          </NavLink>

          <NavLink
            to={'/marketing'}
            className='nav-text'
            onClick={() => setSidebar(false)}
          >
            <p className='nav-text-a'>Marketing</p>
            <ArrowForwardIosIcon />
          </NavLink>

          {/* <div className='hamQuickLinks'>
            <li className='hamQuickLinksSingle'>
              <p onClick={() => filterByBrand('Audi')}>Audi</p>
            </li>
            <li className='hamQuickLinksSingle'>
              <p onClick={() => filterByBrand('BMW')}>BMW</p>
            </li>
            <li className='hamQuickLinksSingle'>
              <p onClick={() => filterByBrand('Lamborghini')}>Lamborghini</p>
            </li>
            <li className='hamQuickLinksSingle'>
              <p onClick={() => filterByBrand('Ferrari')}>Ferrari</p>
            </li>
          </div> */}
        </ul>
      </nav>
    </div>
  );
}

export default Hamburger;
