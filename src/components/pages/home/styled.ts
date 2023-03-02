import styled from 'styled-components';
import { Input, Image, Button, Select } from 'antd';
import { KAYA_CDN_SVG_URL } from '../../../constant/AppConstant';

export const FullWidthContainer = styled.div`
  width: 100vw;
  height: 100%;
  overflow: auto;
  position: absolute;
  left: 0px;
  top: 0px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    overflow-x: hidden;
  }
`;

export const HomePageOuterContainer = styled.div`
  > div:first-child {
    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      overflow-x: hidden;
    }
  }
`;

export const HomeWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 0 !important;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    width: 100%;
  }
`;

export const WelcomeContainer = styled.div`
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex; /* NEW, Spec - Firefox, Chrome, Opera */
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: -${(props) => props.theme.margin.medium};
  /* height: 100vh; */

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    align-items: unset;
    display: block;
    margin-bottom: 60px;
  }
`;

export const WelcomeInteractive = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  align-self: center;
  margin-top: 70px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    margin-top: 0px;
  }
`;

export const WelcomeInteractRows = styled.div`
  width: 100%;
  position: relative;
  left: 50px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    position: static;
  }
`;

export const HeroContent = styled.div`
  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    margin: 50px 0;
  }

  > h1 {
    color: ${(props) => props.theme.gray.gray900};
    width: 650px;
    margin-bottom: ${(props) => props.theme.margin.small};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: 36px !important;
      width: 330px;
      line-height: 44px !important;
      margin: 0 auto;
      margin-bottom: ${(props) => props.theme.margin.jumbo};
    }
  }

  > div.ant-typography {
    width: 500px;
    color: ${(props) => props.theme.gray.gray900};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      width: 316px;
      font-size: 18px !important;
      margin: 0 auto;
      font-weight: ${(props) => props.theme.fonts.weight.weaker};
    }
  }

  span {
    display: inline;
    color: ${(props) => props.theme.gray.gray900};

    > * {
      display: inline;
    }
  }
`;

export const MobileHeroImage = styled.img`
  display: none;
  margin: 0;
  margin-bottom: ${(props) => props.theme.margin.jumbo};

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
    width: 100%;
  }
`;

export const WelcomeFigure = styled.div`
  width: 100%;
  position: relative;
  margin-left: 166px;
  margin-top: 75px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: none;
  }
`;

export const HeroPersonOneFigure = styled.img`
  position: absolute;
  margin-top: 20px;
  margin-left: 150px;
`;

export const HeroPersonTwoFigure = styled.img`
  position: absolute;
  margin-top: -360px;
  margin-left: 20px;
`;

export const HeroPersonThreeFigure = styled.img`
  position: absolute;
  margin-top: -90px;
  margin-left: 300px;
`;

export const WelcomeFigureImage = styled.img``;

export const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 500px;
  margin-top: 80px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    width: 312px;
    margin: 0 auto;
  }
`;

export const SearchSelect = styled(Select)`
  width: 150px;
  margin-right: -1px !important;

  .ant-select-selector {
    background-color: ${(props) => props.theme.gray.gray600} !important;
    height: 53px !important;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      height: 40px !important;
    }
  }

  div.ant-select-selector {
    padding-top: ${(props) => props.theme.padding.smaller} !important;
  }

  .anticon {
    color: white !important;
  }

  span.ant-select-selection-item {
    font-size: ${(props) => props.theme.fonts.size.small};
    color: white !important;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      line-height: ${(props) => props.theme.fonts.lineHeight.large} !important;
    }
  }
`;

export const InputWrapper = styled(Input)`
  width: 327px;

  input {
    font-size: ${(props) => props.theme.fonts.size.large};
    height: 50px;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      height: 40px !important;
    }
  }

  .ant-select-selector {
    width: 125px !important;
  }

  .ant-input-suffix {
    margin: 0;
    width: 50px;
    background-color: ${(props) => props.theme.gray.gray600};
    justify-content: center;

    .anticon {
      color: white !important;
    }

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fonts.size.small};

    input {
      font-size: ${(props) => props.theme.fonts.size.small};
    }
  }
`;

export const ApplyNowSection = styled.div`
  background-image: url(${KAYA_CDN_SVG_URL + 'apply-section-background.svg'});
  height: 700px;
  padding-top: 175px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    background-image: url(${KAYA_CDN_SVG_URL + 'apply-section-mobile-bg.svg'});
    padding-top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    height: fit-content;
  }

  h1 {
    width: 755px;
    margin: 0 auto;
    margin-bottom: ${(props) => props.theme.margin.larger};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: ${(props) => props.theme.fonts.size.larger} !important;
      line-height: 32px !important;
      width: 311px;
      margin: 0;
      padding-top: ${(props) => props.theme.padding.jumbo};
      margin-bottom: ${(props) => props.theme.margin.large};
      line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};
      margin: 0 auto;
      margin-bottom: ${(props) => props.theme.margin.large};
    }
  }

  img {
    display: none;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      display: block;
      width: 100%;
    }
  }
`;

export const ApplyNowSectionCTASection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 755px;
  margin: 0 auto;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    margin: 0 auto;
    width: 311px;
    display: block;
  }

  p {
    width: 420px;
    font-size: ${(props) => props.theme.fonts.size.larger};
    font-weight: ${(props) => props.theme.fonts.weight.weaker};
    line-height: ${(props) => props.theme.fonts.lineHeight.largest};
    color: ${(props) => props.theme.gray.gray600};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: 18px;
      width: 311px;
      line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};
      margin-bottom: ${(props) => props.theme.margin.large};
    }
  }

  a {
    margin-left: 25px;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      margin-left: 0;
    }
  }
`;

export const ApplyNowSectionContent = styled.div`
  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    background-color: #fff;
    height: 370px;
  }
`;

export const ProfessionalCategoryContainer = styled(WelcomeContainer)`
  flex-direction: column;
`;

export const SectionDividerImage = styled.div`
  text-align: right;
`;

export const DividerImage = styled.img`
  position: relative;
  right: 125px;
`;

export const FindWorkTalentWrapper = styled.div`
  background-image: url(${KAYA_CDN_SVG_URL + 'find-work-talent-section.svg'});
  height: 1310px;
  background-repeat: no-repeat;
  position: relative;
  top: 128px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    background-image: unset;
    height: auto;
    margin-bottom: 90px;
  }
`;

export const WorkSectionWrapper = styled.div`
  display: flex;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
  }

  div {
    width: 483px;
    position: relative;
    left: 250px;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      position: static;
      width: 330px;
      margin: 0 auto;
    }
  }

  h1 {
    margin-bottom: ${(props) => props.theme.margin.gigantic};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: 36px !important;
      margin-bottom: ${(props) => props.theme.margin.gigantic};
    }
  }

  p {
    width: 500px;
    margin-bottom: ${(props) => props.theme.margin.gigantic};
    font-size: ${(props) => props.theme.fonts.size.medium};
    line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: ${(props) => props.theme.fonts.size.medium};
      line-height: ${(props) => props.theme.fonts.lineHeight.large};
      font-weight: ${(props) => props.theme.fonts.weight.weaker};
      margin-bottom: ${(props) => props.theme.margin.jumbo};
      color: ${(props) => props.theme.gray.gray700};
      width: 330px;
    }
  }

  button {
    background-color: #425ee0;
    border: 1px solid #2c3f95;
  }
`;

export const WorkSectionImgDesktop = styled.img`
  position: relative;
  top: -129px;
  left: 338px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: none;
  }
`;

export const WorkSectionImgMobile = styled.img`
  display: none;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
    margin-bottom: 65px;
    width: 100%;
  }
`;

export const TalentSectionWrapper = styled.div`
  display: flex;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
  }

  div {
    width: 483px;
    position: relative;
    left: 250px;
    top: 100px;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      position: static;
      width: 330px;
      margin: 0 auto;
    }
  }

  h1 {
    margin-bottom: ${(props) => props.theme.margin.gigantic};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: 36px !important;
      margin-bottom: ${(props) => props.theme.margin.gigantic};
      line-height: ${(props) =>
        props.theme.fonts.lineHeight.gigantic} !important;
    }
  }

  p {
    width: 535.81px;
    margin-bottom: ${(props) => props.theme.margin.gigantic};
    font-size: ${(props) => props.theme.fonts.size.medium};
    line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: ${(props) => props.theme.fonts.size.medium};
      line-height: ${(props) => props.theme.fonts.lineHeight.large};
      font-weight: ${(props) => props.theme.fonts.weight.weaker};
      margin-bottom: ${(props) => props.theme.margin.jumbo};
      color: ${(props) => props.theme.gray.gray700};
      width: 330px;
    }
  }

  button {
    background-color: #01b8bf;
    border: 1px solid #048095;
  }
`;

export const TalentSectionImgDesktop = styled.img`
  position: relative;
  top: -182px;
  left: 452px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: none;
  }
`;

export const TalentSectionImgMobile = styled.img`
  display: none;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
    width: 100%;
  }
`;

export const KayaBenefitsWrapper = styled.div`
  position: relative;
  top: 130px;
  margin-bottom: -100px;
`;

export const TitleWrapper = styled.div`
  img {
    position: absolute;
    left: 108px;
    margin-top: -4px;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      display: none;
    }
  }
`;

export const TitleContent = styled.div`
  width: fit-content;
  margin: 0 auto;
  position: relative;
  top: 190px;
  left: -62px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    margin: 0;
    position: static;
    width: 100%;
  }

  h1 {
    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: 36px !important;
      font-weight: ${(props) => props.theme.fonts.weight.strongest} !important;
      line-height: 44px !important;
      width: 312px;
      margin: 0 auto;
      margin-bottom: ${(props) => props.theme.margin.small};
    }
  }

  p {
    font-size: ${(props) => props.theme.fonts.size.extraLarge};
    font-weight: ${(props) => props.theme.fonts.weight.weaker};
    width: 700px;
    line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: ${(props) => props.theme.fonts.size.medium};
      font-weight: ${(props) => props.theme.fonts.weight.weaker};
      width: 312px;
      line-height: ${(props) => props.theme.fonts.lineHeight.large};
      margin: 0 auto;
      color: ${(props) => props.theme.gray.gray600};
      margin-bottom: ${(props) => props.theme.margin.jumbo};
    }
  }
`;

export const ImageListWrapper = styled.div`
  display: flex;
  position: relative;
  top: 250px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    position: static;
    display: block;
  }

  .working-person-img {
    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      display: none;
    }
  }

  .working-person-img-mobile {
    display: none;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      display: block;
      width: 100%;
    }
  }
`;

export const MobileHorizontalGridImg = styled.img`
  display: none;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
    width: auto;
    position: relative;
    left: 55px;
    width: 100%;
  }
`;

export const MobileVerticalGridImg = styled.img`
  display: none;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: block;
    position: relative;
    left: -6px;
    width: 38%;
  }
`;

export const BenefitListWrapper = styled.div`
  position: relative;
  left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    position: absolute;
    top: 50%;
    left: 11px;
  }

  & div:first-child {
    position: relative;
    top: 13px;
  }

  & div:nth-child(2) {
    position: relative;
    top: 25px;
  }

  & div:last-child {
    position: relative;
    top: 79px;

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      top: 30px;
    }
  }
`;

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: ${(props) => props.theme.margin.gigantic};

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    justify-content: flex-start;
  }

  span {
    font-size: ${(props) => props.theme.fonts.size.gigantic};
    font-weight: ${(props) => props.theme.fonts.weight.strongest};
    margin-right: ${(props) => props.theme.margin.gigantic};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: 36px;
    }
  }

  p {
    font-size: ${(props) => props.theme.fonts.size.larger};
    font-weight: ${(props) => props.theme.fonts.weight.weaker};
    margin-top: -${(props) => props.theme.margin.smaller};
    padding-bottom: ${(props) => props.theme.padding.jumbo};
    line-height: 30px;
    width: 410px;
    border-bottom: 1px solid ${(props) => props.theme.gray.gray200};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: ${(props) => props.theme.fonts.size.medium};
      line-height: ${(props) => props.theme.fonts.lineHeight.large};
      font-weight: ${(props) => props.theme.fonts.weight.weaker};
      width: 228px;
      border-bottom: none;
    }
  }
`;

export const KayaBenefitsBgImage = styled.img`
  position: absolute;
  top: -35px;
  left: 905px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: none;
  }
`;

export const VerticleGrid = styled.img`
  position: relative;
  left: 300px;
  top: -272px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: none;
  }
`;

export const BenefitCTA = styled.div`
  width: 50%;
  margin: 0 auto;
  line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};
  position: relative;
  top: -150px;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    width: 312px;
    margin: 0 auto;
    position: static;
    margin-top: ${(props) => props.theme.margin.large};
    margin-bottom: 300px;
  }

  h3 {
    font-size: ${(props) => props.theme.fonts.size.extraLarge};
    font-weight: ${(props) => props.theme.fonts.weight.weaker};
    margin-bottom: ${(props) => props.theme.margin.larger};

    @media screen and (${(props) => props.theme.breakPoints.sm}) {
      font-size: ${(props) => props.theme.fonts.size.medium};
      line-height: ${(props) => props.theme.fonts.lineHeight.larger};
    }
  }
`;

export const BenefitBorderImg = styled.img`
  height: 250px;
  position: relative;
  left: 592px;
  top: 100px;
  margin-bottom: ${(props) => props.theme.margin.jumbo};

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: none;
  }
`;
////////////////////////////////////
export const ProfCategoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    color: ${(props) => props.theme.fonts.color.softDark};
    font-size: ${(props) => props.theme.fonts.size.extraLarge};
    font-weight: ${(props) => props.theme.fonts.weight.strongest};
    line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};
  }
  > h4 {
    color: ${(props) => props.theme.fonts.color.neutral};
    max-width: 300px;
    font-size: ${(props) => props.theme.fonts.size.large};
    font-weight: ${(props) => props.theme.fonts.weight.normal};
    line-height: ${(props) => props.theme.fonts.lineHeight.large};
  }
`;

export const CategoryCardContainer = styled.div`
  margin-top: ${(props) => props.theme.margin.gigantic};
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const CategoryCard = styled.div`
  width: 180px;
  height: 180px;
  border: ${(props) => props.theme.border.small} solid
    ${(props) => props.theme.colors.default.pale};
  border-radius: ${(props) => props.theme.radius.small};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
`;

export const CategoryImage = styled.img`
  height: 100px;
  width: 100px;
`;

export const StartAsContainer = styled(WelcomeContainer)`
  margin-top: ${(props) => props.theme.margin.gigantic};
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const StartAsCard = styled.div`
  width: 500px;
  height: 600px;
  border: ${(props) => props.theme.border.small} solid
    ${(props) => props.theme.colors.default.pale};
  border-radius: ${(props) => props.theme.radius.gigantic};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > h4 {
    padding-top: ${(props) => props.theme.padding.small};
    color: ${(props) => props.theme.fonts.color.softDark};
    font-size: ${(props) => props.theme.fonts.size.large};
    font-weight: ${(props) => props.theme.fonts.weight.strongest};
    text-transform: uppercase;
  }
  /* > p {
    padding: ${(props) => props.theme.padding.smallest}
      ${(props) => props.theme.padding.large};
    color: ${(props) => props.theme.fonts.color.neutral};
    font-size: ${(props) => props.theme.fonts.size.medium};
    white-space: pre-line;
  } */
`;

export const StartAsImage = styled.img`
  height: 300px;
  width: 400px;
`;

export const RecentJobsContainer = styled.div`
  margin: 80px auto auto auto;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  > h3 {
    color: ${(props) => props.theme.fonts.color.softDark};
    font-size: ${(props) => props.theme.fonts.size.extraLarge};
    font-weight: ${(props) => props.theme.fonts.weight.strongest};
    line-height: ${(props) => props.theme.fonts.lineHeight.extraLarge};
  }
`;

export const JobListContainer = styled.div`
  margin-top: ${(props) => props.theme.margin.large};
  width: 581px;

  > div {
    margin-bottom: ${(props) => props.theme.margin.medium};
  }

  > div:last-child {
    margin-bottom: unset;
  }
`;

export const StatsContainer = styled.div`
  width: 100%;
  margin: ${(props) => props.theme.margin.gigantic} auto;
  border: ${(props) => props.theme.border.small} solid
    ${(props) => props.theme.colors.default.pale};
  border-radius: ${(props) => props.theme.radius.gigantic};
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const StatCard = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StatCardImage = styled.img`
  height: 80px;
  width: 80px;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  margin: 120px auto 0 auto;
  color: ${(props) => props.theme.fonts.color.light};
  font-size: ${(props) => props.theme.fonts.size.medium};
  /* padding: ${(props) => props.theme.padding.gigantic}; */
  flex-direction: column;
  align-items: center;

  @media screen and (${(props) => props.theme.breakPoints.sm}) {
    display: none;
  }
`;

export const FooterTitle = styled.div`
  padding-top: ${(props) => props.theme.padding.small};
`;

export const FooterLogo = styled(Image)`
  height: 24px;
  width: 117px;
  margin-bottom: ${(props) => props.theme.margin.gigantic};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.padding.jumbo};
  padding: ${(props) => props.theme.padding.gigantic} 40px;
`;

export const FooterContentColumn = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    padding-bottom: ${(props) => props.theme.padding.gigantic};
    color: ${(props) => props.theme.gray.gray500};
  }
  > a {
    color: ${(props) => props.theme.fonts.color.neutral};
    border-bottom: 1px solid ${(props) => props.theme.gray.gray600};
    margin-bottom: ${(props) => props.theme.margin.medium};
    padding-bottom: ${(props) => props.theme.padding.smallest};
  }

  p {
    width: 60%;
    font-size: ${(props) => props.theme.fonts.size.medium};
    font-weight: ${(props) => props.theme.fonts.weight.weak};
    color: ${(props) => props.theme.gray.gray600};
  }
`;

export const NewsletterText = styled.div`
  color: ${(props) => props.theme.fonts.color.neutral};
  white-space: pre-line;
`;

export const FooterBottom = styled.div`
  padding-right: ${(props) => props.theme.padding.larger};
  padding-left: ${(props) => props.theme.padding.larger};
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;

  p {
    color: ${(props) => props.theme.gray.gray600};
    margin: 0;
  }
`;

export const SocialMediaIconWrapper = styled.div`
  display: flex;
  align-items: baseline;

  > a {
    color: ${(props) => props.theme.gray.gray400};
    margin: ${(props) => props.theme.margin.small};
    font-size: ${(props) => props.theme.fonts.size.large};
  }
`;

export const FooterBottomIcons = styled.div`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 60px;
`;

export const FooterBottomIconContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-left: ${(props) => props.theme.margin.smaller};
`;

export const SubmitEmailInput = styled(Input)`
  width: 200px;
  font-size: ${(props) => props.theme.fonts.size.smaller};
  background: ${(props) => props.theme.colors.default.neutral};
  border-color: transparent;

  > input {
    font-size: ${(props) => props.theme.fonts.size.smaller};
  }
`;

export const SubmiteEmailInputButton = styled(Button)`
  margin-left: ${(props) => props.theme.margin.smaller};
  color: ${(props) => props.theme.fonts.color.softDark};

  &:hover {
    color: ${(props) => props.theme.fonts.color.softDark};
    border-color: ${(props) => props.theme.colors.default.neutral};
  }
`;
