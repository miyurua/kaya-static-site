import React from "react";
import { SectionWrapper, SubPageWrapper } from "./styled";
import { Heading, Text } from "../../components/typography";
import { REVAMP_NEW_CONTNET_ABOUT_PAGE_DESC } from "../../../constant/AppConstant";

const About: React.FC = () => {
  return (
    <SubPageWrapper>
      {/* <HeaderImage title="Credentialing" img /> */}
      <Heading className="center-align" variation="2xl" weight="semiBold">
        About
      </Heading>
      <SectionWrapper>
        <Text variation="xl" weight="normal">
        {REVAMP_NEW_CONTNET_ABOUT_PAGE_DESC}
        </Text>
      </SectionWrapper>
    </SubPageWrapper>
  );
};

export default About;
