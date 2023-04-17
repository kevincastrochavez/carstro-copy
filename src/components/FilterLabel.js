import { Tooltip } from '@mui/material';
import React, { useState } from 'react';

import { useStateValue } from '../StateProvider';

function FilterLabel({ option, colorsProp, text }) {
  const [{ colors }] = useStateValue();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Tooltip title={option} placement='top' arrow>
      <label
        className={`${
          // Adds class if the label option is included in the state layer (if the color was clicked)
          colors.includes(option) && 'filterLabel_selected'
        } filterLabel`}
        onClick={() => colorsProp && setIsSelected(!isSelected)}
        htmlFor={`${option}-car`}
      >
        {colorsProp ? (
          <img
            className='filterLabel_colorImg'
            src={`https://raw.githubusercontent.com/kevincastrochavez/carstro-cars-uploader/main/public/carColors/${option.toLowerCase()}.png`}
            alt={`Color ${option} for filtering by such`}
          />
        ) : (
          text
        )}
      </label>
    </Tooltip>
  );
}

export default FilterLabel;
