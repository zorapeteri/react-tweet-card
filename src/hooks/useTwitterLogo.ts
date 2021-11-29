import React from 'react';
import useContainerDimensions from './useContainerDimensions';

const useTwitterLogo = (myRef: React.RefObject<HTMLDivElement>) => {
  const { width, height } = useContainerDimensions(myRef);

  return height > width && 'hideTwitterLogo';
};

export default useTwitterLogo;
