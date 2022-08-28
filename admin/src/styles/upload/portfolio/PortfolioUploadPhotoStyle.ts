import styled from "styled-components";

export const PhotoWrapper = styled.div`
  width: 47%;
  background-color: #e5e5e7;
  margin-bottom: 50px;
`;

export const PhotoTitle = styled.h2`
  line-height: 52px;
  font-size: 26px;
  padding-left: 4%;
  border-bottom: 1px solid white;
  margin-bottom: 25px;
  background-color: #35464e;
  color: white;
`;

export const InputBox = styled.form`
  width: 95%;
  margin: 0 auto;
`;

export const photoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 78px;
`;

export const FigureBox = styled.figure`
  width: 50px;
  height: 50px;
`;

export const PhotoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const PhotoInput = styled.input`
  display: none;
`;

export const PhotoLabel = styled.label`
  border-radius: 10px;
  width: 120px;
  height: 30px;
  display: flex;
  background: #35464e;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  margin-right: 20px;
`;
