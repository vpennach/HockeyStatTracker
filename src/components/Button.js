// Button.js was taken from https://github.com/briancodex/react-website-v1/blob/master/src/components/Button.js


// Button.js
import React from 'react';
import '../styles/Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick, // Receive the onClick handler as a prop
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick} // Attach the onClick handler
      type={type}
    >
      {children}
    </button>
  );
};
