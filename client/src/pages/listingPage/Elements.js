import styled from 'styled-components';
import { IoIosPin } from 'react-icons/io';
import { RiFilter2Fill } from 'react-icons/ri';
import { HiInformationCircle } from 'react-icons/hi';

export const PageWrapper = styled.div`
  padding: 2rem;
`;

export const FilterWrapper = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  width: 100%;
  font-weight: 300;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  min-height: 68px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto 0;
  justify-content: space-between;
  z-index: 1;
`;

export const ElectricityBtn = styled.div`
  width: fit-content;
  height: 38px;
  font-size: 16px;
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
  border-radius: 5px;
`;

export const Badge = styled.div`
  color: black;
  background-color: white;
  width: 16px;
  height: 22px;
  border-radius: 10px 10px;
  text-align: center;
  margin-left: 11px;
`;

export const LocationFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocationInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  color: #4f4f4f;
  margin-right: 1rem;
`;

export const LocationIcon = styled(IoIosPin)`
  vertical-align: center;
  line-height: 1;
  padding-right: 2px;
`;

export const FilterBtn = styled.select`
  width: fit-content;
  height: 38px;
  font-size: 16px;
  font-weight: 200;
  color: #333;
  background-color: #1c2c6f;
  overflow: hidden;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  line-hight: 2rem;
  color: white;
  padding-left: 30px;
  padding-right: 20px;
  border-radius: 5px;
  border: none;
  outline:none;
  margin-right: 20px;
`;

export const FilterIcon = styled(RiFilter2Fill)`
  vertical-align: center;
  line-height: 1;
  padding-right: 2px;
  color: white;
  position: absolute;
  left: 5px;
`;

export const InfoIcon = styled(HiInformationCircle)`
  vertical-align: center;
  line-height: 1;
  padding-right: 2px;
  color: #4b4b4b;
`;

export const Hint = styled.p`
  font-family: Inter, sans-serif;
  line-height: 22px;
`;

export const CardSection = styled.div``;

export const WariningMsg = styled.p`
  color: red;
`;


export const Selection = styled.select`

`

export const Option = styled.option`

`