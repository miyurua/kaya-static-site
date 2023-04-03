import React from "react";
import { SectionWrapper, SubPageWrapper } from "./styled";
import { Heading, Text } from "../../components/typography";
import {
  APP_LOGO_ALT,
  COPYRIGHT_KAYA_TEXT,
  KAYA_CDN_SVG_URL,
  REVAMP_HOME_PAGE_FOOTER_LOGO_TEXT,
  REVAMP_NEW_CONTNET_ABOUT_PAGE_DESC,
} from "../../../constant/AppConstant";
import { Col, Divider, Row } from "antd";
import { HeaderImage } from "../../components/header-image";
import {
  FooterContent,
  FooterContentColumn,
  FooterLogo,
  FooterBottom,
  FooterContainer,
} from "../home/styled";

const About: React.FC = () => {
  return (
    <>
      <SubPageWrapper>
        <HeaderImage title="About us" img />
        <SectionWrapper>
          <Text variation="xl" weight="normal" color="#4E535B">
            KAYA was founded by a team of veterans from the global IT
            outsourcing industry recognized for their innovative work in the
            space. Together the KAYA founders have extensive experience in IT
            Services, staffing, exchanges and the rapidly growing freelance
            marketplace. Additionally, the KAYA founders have founded and led
            multi-billion dollar businesses that have served blue-chip global
            2000 enterprises and high-tech customers. KAYA is laser focused on
            delivering a better value proposition for the most talented tech
            freelancers and the enterprises that seek to hire them.
          </Text>
        </SectionWrapper>
      </SubPageWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterContentColumn>
            <FooterLogo
              preview={false}
              src={KAYA_CDN_SVG_URL + "kaya-black.svg"}
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
    </>
  );
};

export default About;
