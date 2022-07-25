import React from 'react';
import {
  CardWrapper,
  PlanSection,
  LightIcon,
  SolarBtn,
  SolarIcon,
  ElecBtn,
  LogoSection,
  LogoImg,
  DetailLink,
  DetailSection,
  ComparedPrice,
  PercentageText,
  PlanHightlight,
  TickIcon,
  HightlightItem,
  CostSection,
  CostBox,
  TitleBoxContainer,
  CostTitlt,
  InfoIcon,
  PriceContainer,
  PriceUnit,
  AnualPrice,
  MonthlyPrice,
  PlanFeatureWrapper,
  TarrifWrapper,
  TarrifPrice,
  FeatureContent,
  SummarySection,
  BenefitsSection,
  BenefitsContainer,
  BenefitItemsWrapper,
  ExtraInfoWrapper,
  ExtraInfo,
  ButtonArea,
  Selection,
  ConnectBtn,
} from './Elements';

import {
  formatBeneftisContent,
  formatIntro,
} from '../../../utils/formatBenefitsContent';

const ListingCard = ({
  listing: {
    logo,
    details,
    planDocument,
    percentage,
    planNameBelow,
    benefits,
    solarPrice,
    intro: { Ausgrid },
    extraBenefits,
    annualBill,
    monthlyBill,
  },
}) => {
  const formatedBenefits = formatBeneftisContent(benefits);
  const formatedExtraBenefits = formatBeneftisContent(extraBenefits);
  const formatedIntro = formatIntro(Ausgrid);
  return (
    <CardWrapper>
      <PlanSection>
        <ElecBtn>
          <LightIcon />
          Electricity
        </ElecBtn>
        <SolarBtn>
          <SolarIcon />
          Solar
        </SolarBtn>
        <LogoSection>
          <LogoImg src={logo} alt="UploadedPhoto" />
          <DetailLink href={details}>View Details</DetailLink>
          <DetailLink href={planDocument}>
            Basic Plan Information Document
          </DetailLink>
        </LogoSection>
        <DetailSection>
          <ComparedPrice>
            <PercentageText>{percentage}</PercentageText>
            <PercentageText>{planNameBelow}</PercentageText>
          </ComparedPrice>
          <PlanHightlight>
            {formatedBenefits.map((benefit, index) => (
              <HightlightItem key={index}>
                <TickIcon />
                {benefit}
              </HightlightItem>
            ))}
          </PlanHightlight>
          <TarrifWrapper>
            <TarrifPrice>
              <SolarIcon />
              Standard Feed in Tariff: &nbsp;
              {solarPrice}c
            </TarrifPrice>
          </TarrifWrapper>
        </DetailSection>
        <CostSection>
          <CostBox>
            <TitleBoxContainer>
              <CostTitlt>
                Estimated Cost
                <InfoIcon />
              </CostTitlt>
            </TitleBoxContainer>
            <PriceContainer>
              <PriceUnit>
                <AnualPrice>${annualBill}^</AnualPrice>/yr
              </PriceUnit>
              <PriceUnit>
                <MonthlyPrice>${monthlyBill}</MonthlyPrice>/mo
              </PriceUnit>
            </PriceContainer>
          </CostBox>
        </CostSection>
        <PlanFeatureWrapper>
          <FeatureContent>{formatedIntro}</FeatureContent>
        </PlanFeatureWrapper>
      </PlanSection>
      <SummarySection>
        <BenefitsSection>
          <BenefitsContainer>
            <BenefitItemsWrapper>
              <BenefitItemsWrapper>
                {formatedExtraBenefits.map((benefit, index) => (
                  <HightlightItem key={index}>
                    <TickIcon />
                    {benefit}
                  </HightlightItem>
                ))}
              </BenefitItemsWrapper>
            </BenefitItemsWrapper>
            <ExtraInfoWrapper>
              <ExtraInfo>
                ^The Estimated cost includes any applicable welcome credits, and
                conditional discounts (if applicable) which apply within the
                first 12 months of the plan.
              </ExtraInfo>
            </ExtraInfoWrapper>
          </BenefitsContainer>
          <ButtonArea>
            <ConnectBtn>Connect Online Today</ConnectBtn>
          </ButtonArea>
        </BenefitsSection>
      </SummarySection>
    </CardWrapper>
  );
};

export default ListingCard;
