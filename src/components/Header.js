import React, { useEffect, useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';

import { useStateValue } from '../StateProvider';
import Hamburger from './Hamburger';

function Header() {
  const [{ minMaxPrice, minMaxMileage }] = useStateValue();
  const [headerWhite, setHeaderWhite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      // Development
      // window.location.href === 'http://localhost:3000/' ||
      // window.location.href === 'http://localhost:3000/aboutUs' ||
      // window.location.href === 'http://localhost:3000/marketing'

      // Production
      window.location.href === 'https://carstro-15495.web.app/' ||
      window.location.href === 'https://carstro-15495.web.app/aboutUs' ||
      window.location.href === 'https://carstro-15495.web.app/marketing'
    ) {
      setHeaderWhite(false);
    } else {
      setHeaderWhite(true);
    }
  }, [window.location.href]);

  return (
    <div className='header'>
      <div className={`headerHeader ${headerWhite ? 'headerWhite' : ''}`}>
        <div className='leftSide'>
          <Link to='/'>
            <img
              className='header-logo'
              src='headerImages/logo.png'
              alt='Carstro car'
            />
          </Link>
        </div>
        <div className='rightSide'>
          <div className='links' id='showLinks'>
            <div className='dropdown'>
              <NavLink to='/' className='dropbtn'>
                Homepage
              </NavLink>
              <div className='dropdown_content'></div>
            </div>
            <div className='dropdown'>
              <NavLink
                className='dropbtn'
                to={`/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`}
              >
                Inventory
              </NavLink>
              <div className='dropdown_content'></div>
            </div>
            <div className='dropdown'>
              <NavLink to={'/salesRepresentatives'} className='dropbtn'>
                Sales Representatives
              </NavLink>
              <div className='dropdown_content'></div>
            </div>
            <div className='dropdown'>
              <NavLink to={'/aboutUs'} className='signOut'>
                About Us
              </NavLink>
              <div className='dropdown_content'></div>
            </div>
          </div>

          <div className='hamWrapper'>
            <Hamburger white={headerWhite} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
