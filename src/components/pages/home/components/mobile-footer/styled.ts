import styled from 'styled-components';

export const MobileFooterWrapper = styled.div`
    display: none;
    width: 100%;

    @media only screen and (${props => props.theme.breakPoints.sm}) {
        display: block;
    }
`;

export const FooterIconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 48px 48px 24px 48px;

    > div {
        cursor: pointer;
    }
`;

export const CopyrightTextWrapper = styled.p`
    font-size: ${props => props.theme.fonts.size.medium};
    font-weight: ${props => props.theme.fonts.weight.weak};
    color: ${props => props.theme.gray.gray500};
    width: 328px;
    margin: 0 auto;
    padding-bottom: 48px;
`;
