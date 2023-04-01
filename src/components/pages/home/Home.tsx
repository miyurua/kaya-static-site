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
  QuoteComponent,
  SectionWrapper,
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
  REVAMP_NEW_CONTENT_HOME_PAGE_DESC_SOURCE,
  REVAMP_NEW_CONTENT_HOME_PAGE_HARVARD_QUOTE,
  REVAMP_NEW_CONTENT_HOME_PAGE_HARVARD_SOURCE,
  REVAMP_NEW_CONTENT_HOME_PAGE_PARAGRAPGH_ONE,
  REVAMP_NEW_CONTENT_HOME_PAGE_PARAGRAPGH_THREE,
  REVAMP_NEW_CONTENT_HOME_PAGE_PARAGRAPGH_TWO,
  REVAMP_NEW_CONTENT_HOME_PAGE_PARAGRAPH_FOUR,
  REVAMP_NEW_CONTENT_HOME_PAGE_THREE_DIMENTIONS,
  REVAMP_NEW_CONTENT_HOME_PAGE_TITLE_APPLY_SECTION,
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
                    <MobileHeroImage src={KAYA_CDN_SVG_URL + 'mobile-hero-image.svg'} alt={REVAMP_HOME_PAGE_WELCOME_IMAGE_ALT} />
                    <Text variation='xl' weight='regular'>
                      <span>
                        <Text variation='xl' weight='bold'>
                          {REVAMP_HOME_PAGE_WELCOME_DESCRIPTION_SPAN + ' '}
                        </Text>
                      </span>
                      {REVAMP_HOME_PAGE_WELCOME_DESCRIPTION}
                    </Text>
                    <QuoteComponent>
                      <SectionWrapper>
                        <Heading variation='xs' weight='bold'>
                          {REVAMP_NEW_CONTENT_HOME_PAGE_TITLE_APPLY_SECTION}
                        </Heading>
                        <Text variation='md' weight='regular'>
                          {REVAMP_NEW_CONTENT_HOME_PAGE_DESC_SOURCE}
                        </Text>
                      </SectionWrapper>
                    </QuoteComponent>
                  </HeroContent>
                </WelcomeInteractRows>
              </WelcomeInteractive>
              <WelcomeFigure>
                <HeroPersonOneFigure src={KAYA_CDN_SVG_URL + 'hero-person-one.svg'} alt={REVAMP_HERO_PERSON_ONE} />
                <figure>
                  <WelcomeFigureImage src={KAYA_CDN_SVG_URL + 'hero-grid-image.svg'} alt={REVAMP_HOME_PAGE_WELCOME_IMAGE_ALT} />
                </figure>
                <HeroPersonTwoFigure src={KAYA_CDN_SVG_URL + 'hero-person-two.svg'} alt={REVAMP_HERO_PERSON_TWO} />
                <HeroPersonThreeFigure src={KAYA_CDN_SVG_URL + 'hero-person-three.svg'} alt={REVAMP_HERO_PERSON_THREE} />
              </WelcomeFigure>
            </WelcomeContainer>
            <ApplyNowSection>
              <img src={KAYA_CDN_SVG_URL + 'apply-section-mobile-top-border-mobile.svg'} alt='top border' />
              <ApplyNowSectionContent>
                <Heading variation='xs' weight='regular'>
                  {REVAMP_NEW_CONTENT_HOME_PAGE_PARAGRAPGH_ONE}
                </Heading>
              </ApplyNowSectionContent>
              <img src={KAYA_CDN_SVG_URL + 'apply-section-mobile-bottom-border-mobile.svg'} alt='bottom border' />
            </ApplyNowSection>

            <SectionWrapper>
              <div className='list-container'>
                <Text variation='xl'>{REVAMP_NEW_CONTENT_HOME_PAGE_PARAGRAPGH_TWO}</Text>
                <Text variation='xl'>{REVAMP_NEW_CONTENT_HOME_PAGE_PARAGRAPGH_THREE}</Text>
                {REVAMP_NEW_CONTENT_HOME_PAGE_THREE_DIMENTIONS.map((item, index) => {
                  return (
                    <Text variation='xl' weight='normal' key={index}>
                      <div className='order-list'>
                        <b>{item.TITLE}</b> - {item.DESC}
                      </div>
                    </Text>
                  );
                })}
                <Heading variation='xs' weight='bold'>
                  {REVAMP_NEW_CONTENT_HOME_PAGE_HARVARD_QUOTE}
                </Heading>
                <Text variation='md' weight='regular'>
                  {REVAMP_NEW_CONTENT_HOME_PAGE_HARVARD_SOURCE}
                </Text>
                <Text variation='xl'>{REVAMP_NEW_CONTENT_HOME_PAGE_PARAGRAPH_FOUR}</Text>
              </div>
            </SectionWrapper>
          </HomeWrapper>
          <FooterContainer>
            <FooterContent>
              <FooterContentColumn>
                <FooterLogo preview={false} src={KAYA_CDN_SVG_URL + 'kaya-black.svg'} alt={APP_LOGO_ALT} />
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
