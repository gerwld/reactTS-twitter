import React, { useRef } from "react";
import s from "./MainPostTextarea.module.css";
import { Field } from "react-final-form";
import SimpleForm from "../../../common/SimpleForm";
import TextareaAutosize from "react-textarea-autosize";
import { CircularProgress } from "@mui/material";

const MainPostTextarea = () => {
  const onTextareaSend = (data: object) => {
    console.log(data);
  };

  return (
    <div className={s.textarea_block}>
      <div className={s.user_avatar}>
        <img src="/avatar.jpeg" alt="Profile picture" className={s.avatar} />
      </div>
      <div className={s.form}>
        <SimpleForm onSend={onTextareaSend}>
          <Field name="post_content">
            {(props) => (
              <TextareaAutosize
                autoFocus
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
                placeholder="What's Happening?"
                minRows={1}
                maxRows={20}
              />
            )}
          </Field>
          <div className={s.form_buttons}>
            <div className="group">
              <button type="button" className={`${s.btn} ${s.btn_media}`}>Media</button>
              <button type="button" className={`${s.btn} ${s.btn_emoji}`}>Emoji</button>
            </div>
            <CircularProgress size={22} color="primary" thickness={4.5} variant="determinate" value={75} />
            <button type="submit">Tweet</button>
          </div>
        </SimpleForm>
      </div>
    </div>
  );
};

export default MainPostTextarea;
