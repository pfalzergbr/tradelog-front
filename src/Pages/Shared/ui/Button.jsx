import React from 'react';

const Button = ({ children, buttonStyle, onClick, disabled = false }) => {
  const buttonType = () => {
    return `btn btn--${buttonStyle}`;
  };

  return (
    <button className={buttonType()} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
