import styled from "styled-components";
import { skeletonAnimation } from "./animation";

export const SkeletonWrapper = styled.div`
  width: 85%;
  height: 90vh;
  overflow: auto;
  margin: 50px 0 0 3%;
  position: relative;
`;

export const OuterCircle = styled.div`
  position: absolute;
  left: 45%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 30px;
  animation: ${skeletonAnimation} 1s linear infinite;
`;

export const InnerCircle = styled.div`
  position: absolute;
  left: 45%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  z-index: 2;
  background: #e5e5e7;
`;
