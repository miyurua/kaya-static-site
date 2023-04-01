import React from 'react';
import { SectionWrapper, SubPageWrapper } from './styled';
import { Heading, Text } from '../../components/typography';
import { REVAMP_NEW_CONTNET_ABOUT_PAGE_DESC } from '../../../constant/AppConstant';
import { Col, Row } from 'antd';
import { HeaderImage } from '../../components/header-image';

const About: React.FC = () => {
  return (
    <>
      <SubPageWrapper>
        <HeaderImage title='About us' img />
        <SectionWrapper>
          <Text variation='xl' weight='normal' color='#4E535B'>
            KAYA was founded by a team of veterans from the global IT outsourcing industry recognized for their innovative work in
            the space. Together the KAYA founders have extensive experience in IT Services, staffing, exchanges and the rapidly
            growing freelance marketplace. Additionally, the KAYA founders have founded and led multi-billion dollar businesses
            that have served blue-chip global 2000 enterprises and high-tech customers. KAYA is laser focused on delivering a
            better value proposition for the most talented tech freelancers and the enterprises that seek to hire them.
          </Text>
        </SectionWrapper>
      </SubPageWrapper>
    </>
  );
};

export default About;
