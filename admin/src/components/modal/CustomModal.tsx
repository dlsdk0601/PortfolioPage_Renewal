import React from "react";
import ReactDOM from "react-dom";
import ServerFailModal from "../common/ServerFailModal";

const CustomModal = (props: { title: string; onClick: () => void }) => {
  return ReactDOM.createPortal(
    <ServerFailModal
      title={props.title}
      onClickOkButton={() => props.onClick()}
    />,
    // @ts-ignore
    document.getElementById("modal-root")
  );
};

export default CustomModal;
