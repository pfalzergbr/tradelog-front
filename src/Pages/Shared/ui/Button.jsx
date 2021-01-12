import React from 'react';

const Button = ({ children, type, onClick }) => {

  const buttonType = () => {
    return `btn btn--${type}`
  }

  return <button className={buttonType()} onClick={onClick}>{children}</button>;
};

export default Button;
