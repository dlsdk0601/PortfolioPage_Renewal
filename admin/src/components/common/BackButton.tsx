// components
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/common/BackButtonStyle";

// lib

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <S.BackButtonBox onClick={() => navigate(-1)}>
      <S.LeftArrowImage
        alt="arrow"
        src={require("../../styles/img/leftArrow.png")}
      />
      <S.BackText>Back</S.BackText>
    </S.BackButtonBox>
  );
}
