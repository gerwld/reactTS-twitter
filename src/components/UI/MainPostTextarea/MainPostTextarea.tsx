import React, { useEffect, useRef, useState } from "react";
import s from "./MainPostTextarea.module.css";
import { Field } from "react-final-form";
import SimpleForm from "../../../common/SimpleForm";
import TextareaAutosize from "react-textarea-autosize";
import { CircularProgress } from "@mui/material";

const MainPostTextarea = () => {
  const maxSymbols = 300;
  const [length, setLength] = useState(0);
  const [left, setLeft] = useState(maxSymbols);
  const onTextareaSend = (data: object) => {
    console.log(data);
  };

  const getColor = (length: number) => {
    if (length > maxSymbols) {
      return "secondary";
    } else if (length >= 280) {
      return "warning";
    }
    return "primary";
  };

  const onTextAreaChange = (e: any, onChange: any) => {
    onChange(e);
    setLength(e.target.value.length);
    setLeft(maxSymbols - e.target.value.length);
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
                Media
              </button>
              <button type="button" className={`${s.btn} ${s.btn_emoji}`}>
                Emoji
              </button>
            </div>
            <div className="progressBar">
              <span className={left < 0 ? 'warning' : ''}>{left}</span>
              <CircularProgress
                size={22}
                color={getColor(length)}
                thickness={4.5}
                variant="determinate"
                value={length <= 300 ? Math.ceil(length / 3) : 100}
              />
            </div>
            <button type="submit" disabled={length > maxSymbols || length < 1}>Tweet</button>
          </div>
        </SimpleForm>
      </div>
    </div>
  );
};

export default MainPostTextarea;
