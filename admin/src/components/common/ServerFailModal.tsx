import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/common/ServerFailModalStyle";

const ServerFailModal = (props: {
  title?: string;
  onClickOkButton?: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Modal>
        <S.TitleBox className="content-text">
          <S.Title className="title">
            {props.title ?? "please try again"}
          </S.Title>
        </S.TitleBox>
        <S.ButtonBox className="button-list">
          <S.Button
            className="confirm-button"
            type="button"
            onClick={() => {
              if (props.onClickOkButton) {
                props.onClickOkButton();
                return;
              }
              navigate("/");
            }}
          >
            OK
          </S.Button>
        </S.ButtonBox>
      </S.Modal>
      <S.BackGround />
    </S.Wrapper>
  );
};

export default ServerFailModal;
