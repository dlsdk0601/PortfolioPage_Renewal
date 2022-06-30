import styled from "styled-components";

export const TestimonialBox = styled.ul<{ isData: boolean }>`
  max-height: 80vh;
  padding-right: 10px;
  overflow: ${(props) => (props.isData ? "auto" : "visible")};

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

export const NoDataText = styled.p`
  text-align: center;
  margin-top: 50px;
  color: ${(props) => props.theme.MainTextColor};
`;
