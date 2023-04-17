import React, { useEffect, useState } from 'react';

import { useStateValue } from '../StateProvider';

function Checkbox({ id, name, value, clearAll, hidden }) {
  const [{ singleBrand }, dispatch] = useStateValue();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Checks if there is previous state, like coming from the links in Homepage
    if (singleBrand) {
      if (singleBrand.includes(value)) {
        setIsChecked(true);

        // Waits to clean the state so second time it does not run
        setTimeout(() => {
          dispatch({
            type: 'REMOVE_SINGLE_BRAND',
          });
        }, 500);
      }
    }

    // First condition checks if the checkbox was checked and if it corresponds to the right form field according to the filters. If that is true, then adds its value to the state layer
    if (isChecked && name === 'brands') {
      dispatch({
        type: 'SET_BRAND_FILTER',
        brandsFilters: id,
      });
      // If the checkbox is unchecked, removes its value from the state layer
    } else if (!isChecked && name === 'brands') {
      dispatch({
        type: 'REMOVE_BRAND_FILTER',
        brandsFilters: id,
      });
    }

    if (isChecked && name === 'years') {
      dispatch({
        type: 'SET_MODEL_YEAR_FILTER',
        modelYearsFilters: id,
      });
    } else if (!isChecked && name === 'years') {
      dispatch({
        type: 'REMOVE_MODEL_YEAR_FILTER',
        modelYearsFilters: id,
      });
    }

    if (isChecked && name === 'wheels') {
      dispatch({
        type: 'SET_TIRE_SIZE_FILTER',
        tireSize: id,
      });
    } else if (!isChecked && name === 'wheels') {
      dispatch({
        type: 'REMOVE_TIRE_SIZE_FILTER',
        tireSize: id,
      });
    }

    if (isChecked && name === 'colors') {
      dispatch({
        type: 'SET_COLOR_FILTER',
        colors: id,
      });
    } else if (!isChecked && name === 'colors') {
      dispatch({
        type: 'REMOVE_COLOR_FILTER',
        colors: id,
      });
    }
  }, [isChecked]);

  // Unchecks the checkboxes when the clear function is fired
  useEffect(() => {
    if (clearAll) {
      setIsChecked(false);
    }
  }, [clearAll]);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <input
      type='checkbox'
      id={`${id}-car`}
      name={name}
      value={value}
      checked={isChecked}
      onClick={handleClick}
      hidden={hidden && true}
    />
  );
}

export default Checkbox;
