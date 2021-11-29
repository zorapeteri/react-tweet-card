import React, { useRef } from 'react';
import useTwitterLogo from '../../hooks/useTwitterLogo';
import css from './Container.module.css';
import './Container.css';
import useFontSize from '../../hooks/useFontSize';

type ContainerProps = {
    children: any;
    gradientBackground?: boolean;
    transparentBackground?: boolean;
}

const Container = ({ children, gradientBackground, transparentBackground } : ContainerProps) => {
  const containerRef = useRef(null);
  const fontSize = useFontSize(containerRef);
  const twitterLogo = useTwitterLogo(containerRef);

  return (
    <div
      ref={containerRef}
      className={[css.container, twitterLogo, gradientBackground && css.gradientBackground, transparentBackground && css.transparentBackground].filter(Boolean).join(' ')}
      style={{ fontSize }}
    >
      {children}
    </div>
  );
};

export default Container;
