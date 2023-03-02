import React from 'react';
import { ReactSVG } from 'react-svg';
import { SVGLoaderProps } from './types';
import styled from 'styled-components';
import { KAYA_CDN_ICONS_URL } from '../../../constant/AppConstant';

const StyledReactSVG = styled(ReactSVG)<{
  width?: string;
  height?: string;
  color?: string;
  strokeWidth?: string;
}>`
  svg {
    ${({ width, height }) =>
      width &&
      height &&
      `width: ${width};
        height: ${height};
    `}
    ${({ strokeWidth }) =>
      strokeWidth &&
      `
        stroke-width: ${strokeWidth}
`}
  }
  path,
  circle {
    ${({ color }) =>
      color &&
      `
        stroke: ${color}
        `}
  }
`;

export const SVGLoader: React.FC<SVGLoaderProps> = ({
  name,
  baseUrl = KAYA_CDN_ICONS_URL,
  className = '',
  width,
  height,
  style,
  wrapper,
  color,
  strokeWidth,
}) => {
  return (
    <StyledReactSVG
      src={`${baseUrl}${name}.svg`}
      className={className}
      style={{ ...style }}
      wrapper={wrapper}
      width={width}
      height={height}
      color={color}
      strokeWidth={strokeWidth}
    />
  );
};
