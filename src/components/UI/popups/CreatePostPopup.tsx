import React from "react";
import { ModalWindow, PostInput } from "components";

const CreatePostPopup: React.FC<CreatePostProps> = ({ setCreatePost }) => {
  return (
    <ModalWindow setVisible={setCreatePost} title="" className="modal_post">
      <PostInput />
    </ModalWindow>
  );
};

interface CreatePostProps {
  setCreatePost: any;
}

export default CreatePostPopup;
