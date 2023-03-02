import { Typography } from 'antd';
import styled from 'styled-components';
import { handleColor, handleFontWeight } from './utils';

const { Title } = Typography;

export type VariationType = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

//TODO: get  these with a HOC styled components Refer Styled components document
const handlefontSize = (variation: VariationType | undefined) => {
    switch (variation) {
        case '2xl':
            return '72px';
        case 'xl':
            return '50px';
        case 'lg':
            return '48px';
        case 'md':
            return '36px';
        case 'sm':
            return '30px';
        case 'xs':
            return '24px';
        default:
            return '72px';
    }
};

//TODO: Optimize the redundancy on switch statement with a key Value mapper
const handlelineHeight = (variation: VariationType | undefined) => {
    switch (variation) {
        case '2xl':
            return '90px';
        case 'xl':
            return '72px';
        case 'lg':
            return '60px';
        case 'md':
            return '44px';
        case 'sm':
            return '38px';
        case 'xs':
            return '32px';
        default:
            return '72px';
    }
};

export const Heading = styled(Title)<{ variation?: VariationType; weight?: string; color?: string }>`
    &&&& {
        font-family: 'Overpass';
        font-style: normal;
        font-weight: ${({ weight }) => handleFontWeight(weight)};
        font-size: ${({ variation }) => handlefontSize(variation)};
        line-height: ${({ variation }) => handlelineHeight(variation)};
        letter-spacing: -0.02em;
        color: ${({ color }) => handleColor(color)};
    }
`;
