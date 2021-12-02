import React, { useRef } from 'react';
import useTwitterLogo from 'hooks/useTwitterLogo';
import useFontSize from 'hooks/useFontSize';
import classNameUtil from 'utils/className';
import './Container.css';
import getCSSVariables from 'utils/getCSSVariables';
import themes, { ThemeOption, TweetCardColors } from 'themes';
import css from './Container.module.css';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    children: any;
    className?: string,
    theme?: ThemeOption;
    colors?: TweetCardColors;
}

const Container = ({
  children,
  className,
  theme = 'light',
  colors = {},
  ...rest
} : ContainerProps) => {
  const containerRef = useRef(null);
  const twitterLogo = useTwitterLogo(containerRef);
  useFontSize(containerRef);

  return (
    <div
      ref={containerRef}
      {...classNameUtil(
        className,
        css.container,
        twitterLogo,
      )}
      {...rest}
      style={{ ...getCSSVariables(colors, themes[theme]), ...rest.style }}
    >
      {children}
    </div>
  );
};

export default Container;
