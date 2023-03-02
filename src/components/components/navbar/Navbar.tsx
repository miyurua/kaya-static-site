import { Button, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
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

  return (
    <>
      <Container>
        <HeaderWrapper>
          <SubHeaderWrapper>
            <Logo preview={false} src={KayaLogo} alt={APP_LOGO_ALT} />
            <MobileLogo
              preview={false}
              src={KAYA_CDN_SVG_URL + 'kaya-logo-mobile.svg'}
              alt={APP_LOGO_ALT}
            />
          </SubHeaderWrapper>
          <ButtonContainer>
            <NavbarButtonWrapper>
              <Button onClick={() => handleNavigation()}>Login</Button>
              <Button type='primary' onClick={() => handleNavigation()}>
                Sign up
              </Button>
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
