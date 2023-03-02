import { Button, Divider } from 'antd';
import React, { useState } from 'react';
import {
  ApplyNowSection,
  ApplyNowSectionContent,
  ApplyNowSectionCTASection,
  BenefitBorderImg,
  BenefitCTA,
  BenefitListWrapper,
  FindWorkTalentWrapper,
  FooterBottom,
  FooterContainer,
  FooterContent,
  FooterContentColumn,
  FooterLogo,
  FullWidthContainer,
  HeroContent,
  HeroPersonOneFigure,
  HeroPersonThreeFigure,
  HeroPersonTwoFigure,
  HomePageOuterContainer,
  HomeWrapper,
  ImageListWrapper,
  KayaBenefitsBgImage,
  KayaBenefitsWrapper,
  ListItemWrapper,
  MobileHeroImage,
  MobileHorizontalGridImg,
  MobileVerticalGridImg,
  TalentSectionImgDesktop,
  TalentSectionImgMobile,
  TalentSectionWrapper,
  TitleContent,
  TitleWrapper,
  VerticleGrid,
  WelcomeContainer,
  WelcomeFigure,
  WelcomeFigureImage,
  WelcomeInteractive,
  WelcomeInteractRows,
  WorkSectionImgDesktop,
  WorkSectionImgMobile,
  WorkSectionWrapper,
} from './styled';
import MobileFooter from './components/mobile-footer/MobileFooter';
import { Heading, Text } from '../../components/typography';
import { FreelanceCarouselSection } from './components';
import {
  APP_LOGO_ALT,
  COPYRIGHT_KAYA_TEXT,
  KAYA_CDN_SVG_URL,
  REVAMP_BENEFITS_CTA,
  REVAMP_BENEFITS_CTA_BUTTON,
  REVAMP_BENEFITS_SECTION_IMAGE,
  REVAMP_BORDER_IMG,
  REVAMP_BOY_SITTING,
  REVAMP_GRID_IMAGE,
  REVAMP_HERO_PERSON_ONE,
  REVAMP_HERO_PERSON_THREE,
  REVAMP_HERO_PERSON_TWO,
  REVAMP_HOME_PAGE_APPLY_SECTION_DESC,
  REVAMP_HOME_PAGE_APPLY_SECTION_TITLE,
  REVAMP_HOME_PAGE_APPLY__SECTION_BTN_TEXT,
  REVAMP_HOME_PAGE_BENEFITS,
  REVAMP_HOME_PAGE_BENEFITS_DESC,
  REVAMP_HOME_PAGE_BENEFITS_TITLE,
  REVAMP_HOME_PAGE_FIND_TALENT_BUTTON,
  REVAMP_HOME_PAGE_FIND_TALENT_DESC,
  REVAMP_HOME_PAGE_FIND_TALENT_TITLE,
  REVAMP_HOME_PAGE_FIND_WORK_BUTTON,
  REVAMP_HOME_PAGE_FIND_WORK_DESC,
  REVAMP_HOME_PAGE_FIND_WORK_TITLE,
  REVAMP_HOME_PAGE_FOOTER_LOGO_TEXT,
  REVAMP_HOME_PAGE_WELCOME_DESCRIPTION,
  REVAMP_HOME_PAGE_WELCOME_DESCRIPTION_SPAN,
  REVAMP_HOME_PAGE_WELCOME_IMAGE_ALT,
  REVAMP_HOME_PAGE_WELCOME_TITLE,
} from '../../../constant/AppConstant';
import MessageModal from '../../components/message-modal/MessageModal';

const Home: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <HomePageOuterContainer>
        <FullWidthContainer>
          <HomeWrapper>
            <WelcomeContainer>
              <WelcomeInteractive>
                <WelcomeInteractRows>
                  <HeroContent>
                    <Heading variation='2xl' weight='semiBold'>
                      {REVAMP_HOME_PAGE_WELCOME_TITLE}
                    </Heading>
                    <MobileHeroImage
                      src={KAYA_CDN_SVG_URL + 'mobile-hero-image.svg'}
                      alt={REVAMP_HOME_PAGE_WELCOME_IMAGE_ALT}
                    />
                    <Text variation='xl' weight='regular'>
                      <span>
                        <Text variation='xl' weight='bold'>
                          {REVAMP_HOME_PAGE_WELCOME_DESCRIPTION_SPAN + ' '}
                        </Text>
                      </span>
                      {REVAMP_HOME_PAGE_WELCOME_DESCRIPTION}
                    </Text>
                  </HeroContent>
                </WelcomeInteractRows>
              </WelcomeInteractive>
              <WelcomeFigure>
                <HeroPersonOneFigure
                  src={KAYA_CDN_SVG_URL + 'hero-person-one.svg'}
                  alt={REVAMP_HERO_PERSON_ONE}
                />
                <figure>
                  <WelcomeFigureImage
                    src={KAYA_CDN_SVG_URL + 'hero-grid-image.svg'}
                    alt={REVAMP_HOME_PAGE_WELCOME_IMAGE_ALT}
                  />
                </figure>
                <HeroPersonTwoFigure
                  src={KAYA_CDN_SVG_URL + 'hero-person-two.svg'}
                  alt={REVAMP_HERO_PERSON_TWO}
                />
                <HeroPersonThreeFigure
                  src={KAYA_CDN_SVG_URL + 'hero-person-three.svg'}
                  alt={REVAMP_HERO_PERSON_THREE}
                />
              </WelcomeFigure>
            </WelcomeContainer>
            <ApplyNowSection>
              <img
                src={
                  KAYA_CDN_SVG_URL +
                  'apply-section-mobile-top-border-mobile.svg'
                }
                alt='top border'
              />
              <ApplyNowSectionContent>
                <Heading variation='md' weight='semiBold'>
                  {REVAMP_HOME_PAGE_APPLY_SECTION_TITLE}
                </Heading>
                <ApplyNowSectionCTASection>
                  <p>{REVAMP_HOME_PAGE_APPLY_SECTION_DESC}</p>
                  <Button size='large' onClick={() => handleClick()}>
                    {REVAMP_HOME_PAGE_APPLY__SECTION_BTN_TEXT}
                  </Button>
                </ApplyNowSectionCTASection>
              </ApplyNowSectionContent>
              <img
                src={
                  KAYA_CDN_SVG_URL +
                  'apply-section-mobile-bottom-border-mobile.svg'
                }
                alt='bottom border'
              />
            </ApplyNowSection>
            <FreelanceCarouselSection />
            <FindWorkTalentWrapper>
              <WorkSectionWrapper>
                <div>
                  <Heading variation='lg' weight='bold'>
                    {REVAMP_HOME_PAGE_FIND_WORK_TITLE}
                  </Heading>
                  <p>{REVAMP_HOME_PAGE_FIND_WORK_DESC}</p>
                  <Button
                    size='large'
                    type='primary'
                    onClick={() => handleClick()}
                  >
                    {REVAMP_HOME_PAGE_FIND_WORK_BUTTON}
                  </Button>
                </div>
                <WorkSectionImgDesktop
                  src={KAYA_CDN_SVG_URL + 'find-work-boy-sitting.svg'}
                  alt={REVAMP_BOY_SITTING}
                />
                <WorkSectionImgMobile
                  src={KAYA_CDN_SVG_URL + 'work-section-mobile-img.svg'}
                  alt={REVAMP_BOY_SITTING}
                />
              </WorkSectionWrapper>
              <TalentSectionWrapper>
                <div>
                  <Heading variation='lg' weight='bold'>
                    {REVAMP_HOME_PAGE_FIND_TALENT_TITLE}
                  </Heading>
                  <p>{REVAMP_HOME_PAGE_FIND_TALENT_DESC}</p>
                  <Button
                    size='large'
                    type='primary'
                    onClick={() => handleClick()}
                  >
                    {REVAMP_HOME_PAGE_FIND_TALENT_BUTTON}
                  </Button>
                </div>
                <TalentSectionImgDesktop
                  src={KAYA_CDN_SVG_URL + 'find-talent-girl.svg'}
                  alt={REVAMP_BOY_SITTING}
                />
                <TalentSectionImgMobile
                  src={KAYA_CDN_SVG_URL + 'talent-section-mobile-img.svg'}
                  alt={REVAMP_BOY_SITTING}
                />
              </TalentSectionWrapper>
            </FindWorkTalentWrapper>
            <KayaBenefitsWrapper>
              <TitleWrapper>
                <img
                  src={KAYA_CDN_SVG_URL + 'benefit-section-grid.svg'}
                  alt={REVAMP_GRID_IMAGE}
                />
                <TitleContent>
                  <Heading variation='xl' weight='semibold'>
                    {REVAMP_HOME_PAGE_BENEFITS_TITLE}
                  </Heading>
                  <p>{REVAMP_HOME_PAGE_BENEFITS_DESC}</p>
                </TitleContent>
              </TitleWrapper>
              <ImageListWrapper>
                <MobileHorizontalGridImg
                  src={KAYA_CDN_SVG_URL + 'mobile-horizontal-grid.svg'}
                  alt={REVAMP_GRID_IMAGE}
                />
                <img
                  className='working-person-img'
                  src={KAYA_CDN_SVG_URL + 'person-work-on-laptop.png'}
                  alt={REVAMP_HERO_PERSON_ONE}
                />
                <img
                  className='working-person-img-mobile'
                  src={KAYA_CDN_SVG_URL + 'working-person-mobile.png'}
                  alt={REVAMP_HERO_PERSON_ONE}
                />
                <MobileVerticalGridImg
                  src={KAYA_CDN_SVG_URL + 'mobile-vertical-grid-image.svg'}
                  alt={REVAMP_GRID_IMAGE}
                />
                <BenefitListWrapper>
                  {REVAMP_HOME_PAGE_BENEFITS.map((item, index) => {
                    return (
                      <ListItemWrapper key={index}>
                        <span>{item.NO}</span>
                        <p>{item.DESC}</p>
                      </ListItemWrapper>
                    );
                  })}
                </BenefitListWrapper>
              </ImageListWrapper>
              <KayaBenefitsBgImage
                src={KAYA_CDN_SVG_URL + 'kaya-benifits-Bg.svg'}
                alt={REVAMP_BENEFITS_SECTION_IMAGE}
              />
              <VerticleGrid
                src={KAYA_CDN_SVG_URL + 'benefit-section-grid-two.svg'}
                alt={REVAMP_GRID_IMAGE}
              />
              <BenefitCTA>
                <h3>{REVAMP_BENEFITS_CTA}</h3>
                <Button size='large' onClick={() => handleClick()}>
                  {REVAMP_BENEFITS_CTA_BUTTON}
                </Button>
              </BenefitCTA>
            </KayaBenefitsWrapper>
            <BenefitBorderImg
              src={KAYA_CDN_SVG_URL + 'benefit-bottom-border.svg'}
              alt={REVAMP_BORDER_IMG}
            />
          </HomeWrapper>
          <FooterContainer>
            <FooterContent>
              <FooterContentColumn>
                <FooterLogo
                  preview={false}
                  src={KAYA_CDN_SVG_URL + 'kaya-black.svg'}
                  alt={APP_LOGO_ALT}
                />
                <p>{REVAMP_HOME_PAGE_FOOTER_LOGO_TEXT}</p>
              </FooterContentColumn>
            </FooterContent>
            <Divider />
            <FooterBottom>
              <p>{COPYRIGHT_KAYA_TEXT}</p>
            </FooterBottom>
          </FooterContainer>
          <MobileFooter />
        </FullWidthContainer>
      </HomePageOuterContainer>
      <MessageModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Home;
