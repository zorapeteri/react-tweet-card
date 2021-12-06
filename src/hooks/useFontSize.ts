/* eslint-disable no-plusplus, no-param-reassign */

import { RefObject } from 'react';
import binarySearch from 'utils/binarySearch';
import useResizeObserver from 'use-resize-observer';

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

const useFontSize = (ref: RefObject<HTMLDivElement>) => {
  const handleResize = () => {
    calculateAndApplyFontSize(ref?.current);
  };

  useResizeObserver<HTMLDivElement>({
    ref,
    box: 'border-box',
    onResize: handleResize,
  });
};

export default useFontSize;
