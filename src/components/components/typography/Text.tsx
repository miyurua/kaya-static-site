import { Typography } from 'antd';
import styled from 'styled-components';
import { VariationType } from '.';
import { handleColor, handleFontWeight } from './utils';

const { Paragraph } = Typography;

//TODO: get  these with a HOC styled components Refer Styled components document
const handlefontSize = (variation: VariationType | undefined) => {
    switch (variation) {
        case 'xl':
            return '20px';
        case 'lg':
            return '18px';
        case 'md':
            return '16px';
        case 'sm':
            return '14px';
        case 'xs':
            return '12px';
        default:
            return '20px';
    }
};

//TODO: Optimize the redundancy on switch statement with a key Value mapper
const handlelineHeight = (variation: VariationType | undefined) => {
    switch (variation) {
        case 'xl':
            return '30px';
        case 'lg':
            return '28px';
        case 'md':
            return '24px';
        case 'sm':
            return '20px';
        case 'xs':
            return '18px';
        default:
            return '30px';
    }
};

export const Text = styled(Paragraph)<{ variation?: VariationType; weight?: string; color?: string }>`
    &&&& {
        font-family: 'Overpass';
        font-style: normal;
        font-weight: ${({ weight }) => handleFontWeight(weight)};
        font-size: ${({ variation }) => handlefontSize(variation)};
        line-height: ${({ variation }) => handlelineHeight(variation)};
        color: ${({ color }) => handleColor(color)};
    }
`;
