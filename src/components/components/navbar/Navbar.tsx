import { Button } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  ButtonContainer,
  Container,
  HeaderWrapper,
  Logo,
  MobileLogo,
  MobileSliderMenu,
  NavbarButtonWrapper,
  SubHeaderWrapper,
} from './styled';
import KayaLogo from '../../../assets/svg/kaya-black.svg';
import MobieMenu from './mobile-menu/MobileMenu';
import { APP_LOGO_ALT, KAYA_CDN_SVG_URL } from '../../../constant/AppConstant';
import MessageModal from '../message-modal/MessageModal';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleNavigation = () => {
    setOpen(true);
  };

  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      <Container>
        <HeaderWrapper>
          <SubHeaderWrapper>
            <Logo preview={false} src={KayaLogo} alt={APP_LOGO_ALT} onClick={() => navigateTo('/')}/>
            <MobileLogo preview={false} src={KAYA_CDN_SVG_URL + 'kaya-logo-mobile.svg'} alt={APP_LOGO_ALT} />
          </SubHeaderWrapper>
          <ButtonContainer>
            <NavbarButtonWrapper>
              <Button onClick={() => navigateTo('/')}>Home</Button>
              <Button onClick={() => navigateTo('/about')}>About</Button>
            </NavbarButtonWrapper>
          </ButtonContainer>
          <MobileSliderMenu>
            <MobieMenu />
          </MobileSliderMenu>
        </HeaderWrapper>
      </Container>
      <MessageModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
