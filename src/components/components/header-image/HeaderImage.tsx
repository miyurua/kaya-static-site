import React, { FC } from 'react';
import { Heading, Text } from '../typography';
import { HeaderWrapper } from './styled';
import { IHeaderImageProps } from './types';
import { SVGLoader } from '../svg';

const HeaderImage: FC<IHeaderImageProps> = ({ title, description, img }) => {
    return (
        <HeaderWrapper>
            <Heading className="center-align" variation="2xl" weight="semiBold">
                {title}
            </Heading>
            <Text className="center-align" color="#4E535B" variation="xl" weight="normal">
                {description}
            </Text>
            {img && (
                <div className="image-container">
                    <SVGLoader name="hero-graph" />
                </div>
            )}
        </HeaderWrapper>
    );
};

export default HeaderImage;
