import React, { useState } from 'react';
import { Button, Collapse, Drawer } from 'antd';

import {
  MobileMenuIconWrapper,
  HamburgerMenuToggleIcon,
  HamburgerMenubar,
  MobileMenuFooter,
} from './styled';
import KayaLogo from '../../../../assets/svg/kaya-black.svg';
import { MobileLogo, MobileSliderMenu } from '../styled';
import { APP_LOGO_ALT } from '../../../../constant/AppConstant';

const MobieMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const mobileMenuFooter = () => {
    return (
      <MobileMenuFooter>
        <Button type='primary'>Sign Up</Button>
        <Button>Login</Button>
      </MobileMenuFooter>
    );
  };

  return (
    <>
      {/* Mobile Menu Icon */}
      <MobileMenuIconWrapper onClick={() => setOpen(!open)}>
        <HamburgerMenuToggleIcon
          className={`hamburger ${open ? 'active' : ''}`}
        >
          <HamburgerMenubar />
          <HamburgerMenubar />
          <HamburgerMenubar />
        </HamburgerMenuToggleIcon>
      </MobileMenuIconWrapper>

      {/* Mobile Slider Menu */}
      <MobileSliderMenu>
        <Drawer
          mask={false}
          title={
            <MobileLogo preview={false} src={KayaLogo} alt={APP_LOGO_ALT} />
          }
          open={open}
          placement={'left'}
          width={300}
          closable={false}
          footer={mobileMenuFooter()}
        ></Drawer>
      </MobileSliderMenu>
    </>
  );
};

export default MobieMenu;
