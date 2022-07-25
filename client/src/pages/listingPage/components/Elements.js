import styled from 'styled-components';
import { FaLightbulb, FaSolarPanel } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { HiInformationCircle } from 'react-icons/hi';

export const CardWrapper = styled.div`
  position: relative;
  border: solid 1px #cacaca;
  margin-top: 44px;
`;

export const SummarySection = styled.div``;

export const PlanSection = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  background-color: #ffffff;
  padding: 20px 30px 5px;
  margin-top: 44px;
  display: grid;
  grid-template-areas: 'logo detail cost' 'info info info';
`;

export const LightIcon = styled(FaLightbulb)`
  vertical-align: center;
  // margin-right: clamp(0.5rem, 1vw, 1.2rem);
  line-height: 1;
  padding-right: 6px;
`;

export const SolarIcon = styled(FaSolarPanel)`
  vertical-align: center;
  line-height: 1;
  padding-right: 8px;
`;

export const ElecBtn = styled.div`
  width: fit-content;
  position: absolute;
  top: -22px;
  color: #595959;
  font-weight: 300;
  height: 38px;
  font-size: 16px;
  background-color: #e2e2e2;
  overflow: hidden;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  line-hight: 2rem;
  padding: 20px 15px;
  border-radius: 5px;
`;

export const SolarBtn = styled.div`
  width: fit-content;
  position: absolute;
  left: 189px;
  top: -22px;
  color: #595959;
  font-weight: 300;
  height: 38px;
  font-size: 16px;
  background-color: #e2e2e2;
  overflow: hidden;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  line-hight: 2rem;
  padding: 20px 15px;
  border-radius: 5px;
`;

//Logo Section
export const LogoSection = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
}`;

export const LogoImg = styled.img`
  display: block;
  margin: 20px auto;
  width: 180px;
  height: auto;
`;

export const DetailLink = styled.a`
  display: block;
  font-weight: 700;
  color: #73bfee;
  text-decoration: none;
`;

//Detail Section
export const DetailSection = styled.div`
  grid-area: detail;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ComparedPrice = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 12px;
`;

export const PercentageText = styled.span`
color: #595959
font-weight: 300;
font-family: 'Nunito Sans',sans-serif;

`;

export const PlanHightlight = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-bottom: 12px;
`;

export const TickIcon = styled(TiTick)``;

export const HightlightItem = styled.span`
  font-family: 'Nunito Sans', sans-serif;
  font-family: Inter, sans-serif;
  margin-bottom: 5px;
  line-height: 22px;
  text-align: left;
`;  

export const TarrifWrapper = styled.div`
display: felx
justify-content: center;
align-items: center;
margin-bottom: 12px;
`;

export const TarrifPrice = styled.span`
  display: inline-block;
  border-radius: 5px;
  background-color: #e1eef1;
  padding: 5px;
  line-height: 22px;
`;

//Cost Section
export const CostSection = styled.div`
  grid-area: cost;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;ß
}`;

export const CostBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 200px;
  overflow: hidden;
`;

export const TitleBoxContainer = styled.div`
  flex: 1;
`;

export const CostTitlt = styled.p`
  background-color: #395e9c;
  color: white;
  padding: 7px 4px;
  font-size: 12px;
  text-align: left;
  font-family: 'Nunito Sans', sans-serif;
`;
export const InfoIcon = styled(HiInformationCircle)`
  padding-left: 10px;
`;

export const PriceContainer = styled.div`
  background-color: #cee0e4;
  flex: 2；;
`;

export const PriceUnit = styled.p`
  font-size: 1rem;
  color: #9da5a7;
`;
export const AnualPrice = styled.span`
  color: #1c2c70;
  font-size: 2rem;
  font-family: 'Nunito Sans', sans-serif;
`;
export const MonthlyPrice = styled.span`
  color: #4d7fae;
  font-size: 1.5rem;
  font-family: 'Nunito Sans', sans-serif;
`;

//Info Section
export const PlanFeatureWrapper = styled.div`
  grid-area: info;
`;

export const FeatureContent = styled.p`
  font-family: Inter, sans-serif;
  line-height: 22px;
  margin-bottom: 12px;
`;

//Benefits Section
export const BenefitsSection = styled.div`
  display: flex;
  background-color: #f5f5f5;
  padding: 22px;
`;

export const BenefitsContainer = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  font-family: Inter, sans-serif;
`;

export const BenefitItemsWrapper = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-family: Inter, sans-serif;
`;

export const ExtraInfoWrapper = styled.div``;

export const ExtraInfo = styled.p`
  line-height: 22px;
`;

export const ButtonArea = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
`;

export const ConnectBtn = styled.div`
  width: fit-content;
  height: 38px;
  font-size: 12px;
  color: #333;
  background-color: #1c2c6f;
  overflow: hidden;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  line-hight: 2rem;
  color: white;
  padding: 20px 15px;
  border-radius: 22px;
`;
