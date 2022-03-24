import React from "react";
import s from "./Tweet.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineRetweet, AiOutlineHeart, AiOutlineLineChart } from "react-icons/ai";
import { FiMessageCircle, FiShare } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Tweet = () => {
  return (
    <div className={s.tweet_block}>
      <div className={s.tweet_sect_1}>
        <div className={s.avatar}>
          <img src="/avatar.jpeg" alt="Avatar" />
        </div>
      </div>
      <div className={s.tweet_sect_2}>
        <div className={s.tweet_priminfo}>
          <div className={s.tweet_group}>
            <span className={s.name}>
              <NavLink to="/">Patryk Jaworski</NavLink>
            </span>
            <span className={s.username}>
              <NavLink to="/">@user_name</NavLink>
            </span>
            <span className={s.datetime}>Oct 4, 2020</span>
          </div>
          <button className={`${s.btn} ${s.btn_opt}`}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="svg">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </button>
        </div>
        <div className={s.post}>
          Telegram упал впервые за 4 года использования. Интересно, на долго ли это?
        </div>
        <div className={s.buttons}>
          <button className={`${s.btn} ${s.btn_reply}`}>
            <FiMessageCircle />
          </button>
          <button className={`${s.btn} ${s.btn_rt}`}>
            <AiOutlineRetweet />
          </button>
          <button className={`${s.btn} ${s.btn_like}`}>
            <AiOutlineHeart />
          </button>
          <button className={`${s.btn} ${s.btn_share}`}>
            <FiShare />
          </button>
          <button className={`${s.btn} ${s.btn_analytics}`}>
            <AiOutlineLineChart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
