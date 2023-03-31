import React, { useState, useEffect } from "react";
import { Carousel, Divider } from "antd";

import {
  CarouselDividerWrapper,
  FreelancerCorousalWrapper,
  FreelancerDescriptions,
  FreelancerImage,
  FreelancerListContent,
  FreelancerListSection,
  FreelancerNameTitleWrapper,
  FreelancerSliderCard,
  KayaPageContnent,
  MeetKayans,
  MeetKayansTopMobileBorderGrid,
} from "./styled";
import { IFreelancerSliderdata, Itext } from "./types";
import { SVGLoader } from "../../../../components/svg";
import {
  KAYA_CDN_HOME_PAGE_CONTENT_URL,
  KAYA_CDN_SVG_URL,
  REVAMP_FREELANCER_IMG,
  REVAMP_HOME_PAGE_FREELANCER_MEET_KAYANS,
  REVAMP_HOME_PAGE_FREELANCER_MEET_KAYANS_DESC,
  REVAMP_HOME_PAGE_FREELANCER_MEET_KAYANS_DESC_SPAN,
  REVAMP_NEW_CONTENT_HOME_PAGE_PARAGRAPGH_ONE,
} from "../../../../../constant/AppConstant";
import { Heading } from "../../../../components/typography";
import MessageModal from "../../../../components/message-modal/MessageModal";

const FreelanceCarouselSection: React.FC<Itext> = ({ text: paragraphText }) => {
  const [freelancerList, setFreelancerList] = useState<IFreelancerSliderdata[]>(
    []
  );

  const [open, setOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const handleClick = () => {
    setOpen(true);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(KAYA_CDN_HOME_PAGE_CONTENT_URL);
  //     const freelancerData = await response.json();
  //     setFreelancerList(freelancerData.freelancers);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <FreelancerListSection>
        <FreelancerListContent>
          <MeetKayansTopMobileBorderGrid
            src={KAYA_CDN_SVG_URL + "meet-kayans-top-border.svg"}
            alt="top-border"
          />
          <MeetKayans>
            <Heading variation="md" weight="bold">
              {/* {REVAMP_HOME_PAGE_FREELANCER_MEET_KAYANS} */}
            </Heading>
            <p>
              {/* {paragraphText} */}
              {/* <span onClick={() => handleClick()}>
                {REVAMP_HOME_PAGE_FREELANCER_MEET_KAYANS_DESC_SPAN}
              </span> */}
            </p>
          </MeetKayans>
          <FreelancerCorousalWrapper>
            {/* <Carousel
              swipeToSlide
              draggable
              autoplay
              arrows
              nextArrow={
                <span>
                  <SVGLoader name='slider-next-arrow-icon' />
                </span>
              }
              prevArrow={
                <span>
                  <SVGLoader name='slider-prev-arrow-icon' />
                </span>
              }
            >
              {freelancerList.map(
                (freelancer: IFreelancerSliderdata, index: number) => {
                  return (
                    <FreelancerSliderCard key={index}>
                      <FreelancerImage
                        src={freelancer.IMG_URL}
                        alt={REVAMP_FREELANCER_IMG}
                      />
                      <FreelancerNameTitleWrapper>
                        {freelancer.NAME}
                        <span>{freelancer.TITLE}</span>
                      </FreelancerNameTitleWrapper>
                      <FreelancerDescriptions>
                        {freelancer.DESC}
                      </FreelancerDescriptions>
                    </FreelancerSliderCard>
                  );
                }
              )}
            </Carousel> */}
          </FreelancerCorousalWrapper>
        </FreelancerListContent>
        <CarouselDividerWrapper>
          <Divider />
        </CarouselDividerWrapper>
      </FreelancerListSection>
      {/* <MessageModal open={open} setOpen={setOpen} /> */}

      <KayaPageContnent>
        <p>{paragraphText}</p>
      </KayaPageContnent>

    </>
  );
};

export default FreelanceCarouselSection;
