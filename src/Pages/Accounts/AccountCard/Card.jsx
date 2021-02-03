import React from 'react';

//Add Animations later - Framer Motion

const Card = ({ children, type = '' }) => {
  return <div className={`card ${'card--' + type}`}> {children}</div>;
};

export default Card;
