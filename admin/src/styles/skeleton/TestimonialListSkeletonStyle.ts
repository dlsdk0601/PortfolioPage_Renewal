import styled from "styled-components";
import { skeletonAnimation } from "./animation";

export const TestimonialListSkeletonstyle = styled.li`
  width: 100%;
  height: 80px;
  margin: 20px 0;
  padding: 10px 30px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.SubColor};
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    box-shadow: 3px 3px 3px 3px ${(props) => props.theme.SubColor};
  }
`;

export const ImgBoxSkeleton = styled.figure`
  width: 50px;
  height: 50px;
  animation: ${skeletonAnimation} 3s linear infinite;
`;

export const TestiMonialTitleSkeleton = styled.p`
  margin-left: 20px;
  width: 100%;
  height: 20px;
  animation: ${skeletonAnimation} 3s linear infinite;
`;
