import React from "react";
import s from "./s.module.css";
import { Field } from "react-final-form";
import TextareaAutosize from "react-textarea-autosize";
import { useDispatch, useSelector } from "react-redux";

import { SimpleForm } from "components";
import { RootState } from "store/reducers";
import { fetchAddPost, onPostType } from "store/actions/posts";
import { selectTweetPendingErrorStatus, selectTweetPendingStatus } from "store/selectors";

import { CircularProgress } from "@mui/material";
import { IoImageOutline } from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";



const PostInput = () => {
  const dispatch = useDispatch();
  const isPending = useSelector(selectTweetPendingStatus) as boolean;
  const isError = useSelector(selectTweetPendingErrorStatus) as boolean;
  const { maxLength, currentText } = useSelector(({ post }: RootState) => ({
    maxLength: post.maxLength,
    currentText: post.currentPostText,
  }));

  const length = currentText.length;
  const left = maxLength - currentText.length;

  const onTextareaSend = (data) => {
    dispatch(fetchAddPost(data.post_content));
  };

  const onTextAreaChange = (e: any, onChange: Function) => {
    dispatch(onPostType(e.target.value));
    onChange(e);
  };

  const getColor = (length: number) => {
    if (length > maxLength) return "secondary";
    else if (length >= 280) return "warning";
    return "primary";
  };

  return (
    <div className={s.textarea_block}>
      <div className={s.user_avatar}>
        <img src="/img/avatar.jpeg" alt="Profile picture" className={s.avatar} />
      </div>
      <div className={s.form}>
        <SimpleForm onSend={onTextareaSend} initialValue={{ post_content: currentText }}>
          <Field name="post_content">
            {(props) => (
              <TextareaAutosize
                autoFocus
                name={props.input.name}
                value={props.input.value}
                onChange={(e) => onTextAreaChange(e, props.input.onChange)}
                placeholder="What's Happening?"
                minRows={1}
                maxRows={20}
                disabled={isPending}
              />
            )}
          </Field>
          <div className={s.form_buttons}>
            <div className={s.btn_group}>
              <button type="button" className={`${s.btn} ${s.btn_media}`}>
                <IoImageOutline />
              </button>
              <button type="button" className={`${s.btn} ${s.btn_emoji}`}>
                <AiOutlineSmile />
              </button>
            </div>
            <div className={s.progressBar}>
              <span className={left < 0 ? s.warning : ""}>{left}</span>
              <CircularProgress
                size={22}
                color={getColor(length)}
                thickness={4.5}
                className={s.circle}
                variant="determinate"
                value={length <= 300 ? Math.ceil(length / 3) : 100}
              />
            </div>
            <button
              className={s.btn_send + " button_ct"}
              type="submit"
              disabled={length > maxLength || length < 1 || isPending}>
              {isPending && !isError ? "Pending..." : "Tweet"}
            </button>
          </div>
        </SimpleForm>
        {isError && <span>Error</span>}
      </div>
    </div>
  );
};

export default PostInput;
