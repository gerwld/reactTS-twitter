import React from "react";
import { ModalWindow } from "../../../common/ModalWindow/ModalWindow";
import MainPostTextarea from '../MainPostTextarea/MainPostTextarea';
import s from "./ModalWindow.module.css";

const CreatePostPopup: React.FC<CreatePostProps> = ({ setCreatePost }) => {
  return (
    <ModalWindow setVisible={setCreatePost} title="" className={s.modal_post}>
      <MainPostTextarea />
    </ModalWindow>
  );
};

interface CreatePostProps {
  setCreatePost: any;
}

export default CreatePostPopup;
