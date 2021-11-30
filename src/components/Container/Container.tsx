import React, { useRef } from 'react';
import useTwitterLogo from '../../hooks/useTwitterLogo';
import css from './Container.module.css';
import './Container.css';
import useFontSize from '../../hooks/useFontSize';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    children: any;
    className?: string,
    gradientBackground?: boolean;
    transparentBackground?: boolean;
}

const Container = ({
  children, className, gradientBackground, transparentBackground, ...rest
} : ContainerProps) => {
  const containerRef = useRef(null);
  const twitterLogo = useTwitterLogo(containerRef);
  useFontSize(containerRef);

  return (
    <div
      ref={containerRef}
      className={[className, css.container, twitterLogo, gradientBackground && css.gradientBackground, transparentBackground && css.transparentBackground].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
