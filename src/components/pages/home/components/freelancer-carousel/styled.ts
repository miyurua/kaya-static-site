import styled from 'styled-components';
import { KAYA_CDN_SVG_URL } from '../../../../../constant/AppConstant';

export const FreelancerListSection = styled.div`
  height: 886px;
  background-image: url(${KAYA_CDN_SVG_URL + 'freelancers-list-bg.svg'});
  background-repeat: no-repeat;
  position: relative;
  right: 25px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    background-image: unset;
    position: static;
    height: 1100px;
  }
`;

export const FreelancerListContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 156px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
    position: static;
  }
`;

export const MeetKayansTopMobileBorderGrid = styled.img`
  display: none;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
    width: 100%;
  }
`;

export const MeetKayans = styled.div`
  @media only screen and (${(props) => props.theme.breakPoints.sm}) {
    margin-bottom: 84px;
  }

  h1 {
    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: 36px;
      width: 312px;
      position: relative;
      top: -70px;
      margin: 0 auto;
      margin-bottom: -${(props) => props.theme.margin.jumbo};
    }
  }

  p {
    font-size: ${(props) => props.theme.fonts.size.large};
    font-weight: ${(props) => props.theme.fonts.weight.normal};
    line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};
    width: 485px;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      width: 312px;
      margin: 0 auto;
    }
  }

  span {
    border-bottom: 1px solid ${(props) => props.theme.gray.gray400};
    cursor: pointer;
  }
`;

export const FreelancerCorousalWrapper = styled.div`
  position: relative;
  right: 150px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    position: static;
    width: 100%;
  }

  .ant-carousel {
    width: 437px;
    position: relative;
    top: -10px;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      width: 90%;
      position: static;
      margin: 0 auto;
    }
  }

  .slick-dots-bottom {
    position: relative;
    bottom: 0;
    top: 80px;

    @media only screen and (${(props) => props.theme.breakPoints.sm}) {
      top: 10px;
    }
  }

  .slick-dots li {
    margin: 0;
    width: 24px;
  }

  .slick-dots li button {
    background: gray !important;
    transform: rotateZ(90deg);

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      width: 10px;
      height: 10px;
      border-radius: 100%;
    }
  }

  .slick-dots li.slick-active button {
    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: ${(props) => props.theme.gray.gray700} !important;
    }
  }

  .slick-prev {
    position: relative;
    top: 520px;
    left: 34px;
    transition: 200ms ease-in-out;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      display: none !important;
    }

    &:hover {
      scale: 1.1;
      transition: 100ms ease-in-out;
    }

    &:active {
      scale: 0.9;
      transition: 200ms ease-in-out;
    }
  }

  .slick-next {
    position: relative;
    top: 77px;
    left: 371px;
    transition: 200ms ease-in-out;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      display: none !important;
    }

    &:hover {
      scale: 1.1;
      transition: 100ms ease-in-out;
    }

    &:active {
      scale: 0.9;
      transition: 200ms ease-in-out;
    }
  }
`;

export const FreelancerSliderCard = styled.div``;

export const FreelancerImage = styled.img`
  margin-bottom: ${(props) => props.theme.margin.medium};
`;

export const FreelancerNameTitleWrapper = styled.p`
  font-size: ${(props) => props.theme.fonts.size.large};
  font-weight: ${(props) => props.theme.fonts.weight.normal};
  line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};
  width: 435px;
  color: ${(props) => props.theme.gray.gray700};

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    color: ${(props) => props.theme.gray.gray900};
    font-size: ${(props) => props.theme.fonts.size.larger};
    font-weight: ${(props) => props.theme.fonts.weight.strong};
    line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};
    margin-bottom: ${(props) => props.theme.margin.small};
    width: auto;
  }

  > span {
    font-size: ${(props) => props.theme.fonts.size.medium};
    font-weight: ${(props) => props.theme.fonts.weight.weak};
    margin-left: ${(props) => props.theme.margin.medium};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      display: block;
      margin-left: 0;
      font-size: 20px;
      color: ${(props) => props.theme.gray.gray600};
    }
  }
`;

export const FreelancerDescriptions = styled.p`
  font-size: ${(props) => props.theme.fonts.size.large};
  font-weight: ${(props) => props.theme.fonts.weight.normal};
  line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};
  width: 435px;
  color: ${(props) => props.theme.gray.gray700};

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    width: auto;
  }
`;

export const CarouselDividerWrapper = styled.div`
  display: none;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
    width: 312px;
    margin: 0 auto;
    margin-top: 50px;

    .ant-divider {
      border-top: 1px solid ${(props) => props.theme.gray.gray300};
    }
  }
`;
