/* eslint-disable no-plusplus, no-param-reassign */

import { useEffect, RefObject } from 'react';
import binarySearch from 'utils/binarySearch';

function isOverflowing(el: HTMLElement) {
  return el.clientWidth < el.scrollWidth
        || el.clientHeight < el.scrollHeight;
}

function setFontSize(el: HTMLElement, fontSize: number) {
  el.style.fontSize = `${fontSize}px`;
}

function getFontSize(el: HTMLElement) {
  return parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size').replace('px', ''));
}

function findFontSizeBinary(el: HTMLElement) {
  return binarySearch(getFontSize(el), (fontSize: number) => {
    setFontSize(el, fontSize);
    return isOverflowing(el);
  });
}

function calculateAndApplyFontSize(el: HTMLElement | null | undefined) {
  if (el) {
    setFontSize(el, findFontSizeBinary(el));
  }
}

const useFontSize = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const handleResize = () => {
      calculateAndApplyFontSize(ref?.current);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);
};

export default useFontSize;
