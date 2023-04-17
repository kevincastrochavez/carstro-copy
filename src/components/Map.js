import React from 'react';
import GoogleMapReact from 'google-map-react';
import { google_key } from '../utilities/constants.js';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Map({ data }) {
  const defaultProps = {
    center: {
      lat: 40.7596198,
      lng: -111.8867975,
    },
    zoom: 5,
  };
  const scrollToRep = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const PinMap = ({ text, id }) => {
    return (
      <div className='pin_container'>
        <LocationOnIcon className='map_pin' onClick={() => scrollToRep(id)} />
        <div className='pin_name'>{text}</div>
      </div>
    );
  };

  return (
    // Important! Always set the container height explicitly
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: google_key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {data.map((item) => (
          <PinMap
            lat={item.lat}
            lng={item.lng}
            text={item.location}
            id={item.id}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
