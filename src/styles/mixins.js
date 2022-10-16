import { css } from 'styled-components';
import { breakpoints } from './breakpoints';

const minWidthQuery = (width, ...args) => css`
  @media (min-width: ${width}) {
    ${css(...args)};
  }
`;

const maxWidthQuery = (width, ...args) => css`
  @media (max-width: ${width}) {
    ${css(...args)};
  }
`;

const ie10Up = (...args) => css`
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    ${css(...args)}
  }
`;

export const media = {
  forPhoneOnly: (...args) =>
    maxWidthQuery(breakpoints.phone, ...args),
  forTabletUp: (...args) =>
    minWidthQuery(breakpoints.tablet, ...args),
  forLaptopUp: (...args) =>
    minWidthQuery(breakpoints.laptop, ...args),
  forDesktopUp: (...args) =>
    minWidthQuery(breakpoints.desktop, ...args),
  forBigDesktopUp: (...args) =>
    minWidthQuery(breakpoints.bigDesktop, ...args),
  ie10Up,
};

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
