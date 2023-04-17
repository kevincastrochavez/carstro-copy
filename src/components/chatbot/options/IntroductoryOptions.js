import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../../../StateProvider';

const IntroductoryOptions = (props) => {
  const [{ minMaxPrice, minMaxMileage }, dispatch] = useStateValue();

  const options = [
    {
      text: (
        <Link
          to={`/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`}
        >
          Shop a Vehicle
        </Link>
      ),
      handler: () => dispatch({ type: 'SHOW_CHAT', showChat: false }),
      id: 1,
    },
    {
      text: <Link to='/salesRepresentatives'>Find a dealer</Link>,
      handler: () => dispatch({ type: 'SHOW_CHAT', showChat: false }),
      id: 2,
    },
    {
      text: <span>Chat with representative</span>,
      handler: props.actionProvider.handleChatRepresentative,
      id: 3,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className='options_button'>
      {option.text}
    </button>
  ));

  return <div className='options_container'>{buttonsMarkup}</div>;
};

export default IntroductoryOptions;
