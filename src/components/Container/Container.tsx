import React, { useRef } from 'react';
import css from './Container.module.css';
import useFontSize from '../../hooks/useFontSize';

type ContainerProps = {
    children: any;
    gradientBackground?: boolean;
    transparentBackground?: boolean;
}

const Container = ({ children, gradientBackground, transparentBackground } : ContainerProps) => {
  const containerRef = useRef(null);
  const fontSize = useFontSize(containerRef);

  return (
    <div
      ref={containerRef}
      className={[css.container, gradientBackground && css.gradientBackground, transparentBackground && css.transparentBackground].filter(Boolean).join(' ')}
      style={{ fontSize }}
    >
      {children}
    </div>
  );
};

export default Container;
