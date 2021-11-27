import React, { useState, useEffect } from 'react';

const useContainerDimensions = (myRef: React.RefObject<HTMLDivElement>) => {
  const getDimensions = () => ({
    width: myRef?.current ? myRef.current.offsetWidth : 0,
    height: myRef?.current ? myRef.current.offsetHeight : 0,
  });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return dimensions;
};

export default useContainerDimensions;
