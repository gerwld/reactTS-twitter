import React from "react";
import s from "./MainPostTextarea.module.css";
import { Field } from "react-final-form";
import TextareaAutosize from "react-textarea-autosize";
import { useDispatch, useSelector } from "react-redux";

import SimpleForm from "../../../common/SimpleForm";
import { RootState } from "../../../redux/reducers";
import { onPostType } from "../../../redux/actions/post";

import { CircularProgress } from "@mui/material";
import { IoImageOutline } from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";

const MainPostTextarea = () => {
  const dispatch = useDispatch();
  const { maxLength, currentText } = useSelector(({ post }: RootState) => ({
    maxLength: post.maxLength,
    currentText: post.currentPostText,
  }));

  const length = currentText.length;
  const left = maxLength - currentText.length;

  const onTextareaSend = (data: object) => {
    console.log(data);
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
              disabled={length > maxLength || length < 1}>
              Tweet
            </button>
          </div>
        </SimpleForm>
      </div>
    </div>
  );
};

export default MainPostTextarea;
