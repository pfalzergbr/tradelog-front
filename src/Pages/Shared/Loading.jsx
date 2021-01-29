import React from 'react';
import LoadingSpinner from '../../assets/animations/loading-spinner.gif';

const Loading = () => {
  return (
    <div>
      <img className="loading-spinner" src={LoadingSpinner} alt="Animated loading spinner"/>
    </div>
  );
};

export default Loading;
