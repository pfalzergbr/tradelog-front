import React from 'react';
import { useSelector } from 'react-redux';

import Loading from './Loading'

const LoadingGroup = ({ children }) => {
  const { isLoading } = useSelector(state => state.control);

  return <React.Fragment>{isLoading ? <Loading /> : children}</React.Fragment>;
};

export default LoadingGroup;
