import React from 'react';
import { COPYRIGHT_KAYA_TEXT } from '../../../../../constant/AppConstant';
import { SVGLoader } from '../../../../components/svg';
import {
  CopyrightTextWrapper,
  FooterIconWrapper,
  MobileFooterWrapper,
} from './styled';

const MobileFooter: React.FC = () => {
  return (
    <MobileFooterWrapper>
      <FooterIconWrapper>
        <SVGLoader name='social-media-icon-twitter' />
        <SVGLoader name='social-media-icon-linkedin' />
        <SVGLoader name='social-media-icon-facebook' />
        <SVGLoader name='github-icon' />
        <SVGLoader name='dribble-icon' />
      </FooterIconWrapper>
      <CopyrightTextWrapper>{COPYRIGHT_KAYA_TEXT}</CopyrightTextWrapper>
    </MobileFooterWrapper>
  );
};

export default MobileFooter;
