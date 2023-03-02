import React, { CSSProperties } from 'react';

export interface SVGLoaderProps {
    name: string;
    baseUrl?: string;
    className?: string;
    width?: string;
    height?: string;
    style?: CSSProperties | undefined;
    wrapper?: 'div' | 'span' | 'svg' | undefined;
    color?: string;
    strokeWidth?: string;
}
