import React from 'react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../../../StateProvider';

const RepresentativeOptions = (props) => {
  const [{}, dispatch] = useStateValue();

  const options = [
    {
      text: (
        <Link to='/salesRepresentatives'>
          See Sales Representatives Information
        </Link>
      ),
      handler: () => dispatch({ type: 'SHOW_CHAT', showChat: false }),
      id: 1,
    },
    {
      text: <span>Chat with agent</span>,
      handler: props.actionProvider.handleChatWithAgent,
      id: 2,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className='options_button'>
      {option.text}
    </button>
  ));

  return <div className='options_container'>{buttonsMarkup}</div>;
};

export default RepresentativeOptions;
