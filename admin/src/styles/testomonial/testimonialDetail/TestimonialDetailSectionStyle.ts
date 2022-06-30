import styled from "styled-components";

export const TestimonialDetailSectionWrapper = styled.div`
  width: 85%;
  max-height: 90vh;
  overflow: auto;
  margin: 50px 0 0 3%;
  display: flex;
  justify-content: flex-satrt;
  align-items: flex-start;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.SubTextColor};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.MainColor};
    border-radius: 30px;
  }
`;

export const TestimonialBox = styled.div`
  width: 60%;
  height: 650px;
  margin: 100px auto 0 auto;
  position: relative;
  border: 3px solid #35464e;
  border-radius: 20px;
`;

export const ProfileBox = styled.figure`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #eee;
  position: absolute;
  left: 50%;
  top: -15%;
  transform: translate(-50%, 0);
`;

export const ProfilPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

export const TestimonialName = styled.h1`
  text-align: center;
  width: 100%;
  margin-top: 15%;
  position: relative;
`;

export const TestimonialDescriptionBox = styled.ul`
  margin: 50px auto 0 auto;
`;

export const TestimonialDescriptionItem = styled.li`
  margin: 20px auto 20px auto;
  text-align: center;
`;

export const TestimonialText = styled.p`
  width: 60%;
  margin: auto;
`;
