import React from 'react';
import useContainerDimensions from './useContainerDimensions';

const useFontSize = (myRef: React.RefObject<HTMLDivElement>) => {
  const { width, height } = useContainerDimensions(myRef);
  const fontSize = Math.min(width, height) * 0.04;
  return `${fontSize}px`;
};

export default useFontSize;
