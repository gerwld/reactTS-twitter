import React from "react";
import { ModalWindow } from "../../../common/ModalWindow/ModalWindow";
import MainPostTextarea from '../MainPostTextarea/MainPostTextarea';

const CreatePostPopup: React.FC<CreatePostProps> = ({ setCreatePost }) => {
  return (
    <ModalWindow setVisible={setCreatePost} title="">
      <MainPostTextarea />
    </ModalWindow>
  );
};

interface CreatePostProps {
  setCreatePost: any;
}

export default CreatePostPopup;
