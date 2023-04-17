import React from 'react';

function Button({ text, bgColor, className, onClick }) {
  return (
    <button onClick={onClick} className={`btn btn__${bgColor} ${className}`}>
      {text}
    </button>
  );
}

export default Button;
