import React from "react";
import s from "./Sidebar.module.css";
import SearchInput from "../SearchInput/SearchInput";

const Sidebar = () => {
  return (
    <div className={s.sidebar_block}>
      <div className={s.search_block}>
        <SearchInput />
        <ActualTrends />
        <WhoFollow />
      </div>
    </div>
  );
};

const trends = [
  { name: "Duda", amount: "3,028" },
  { name: "#WorldCup2022", amount: "9,002" },
  { name: "Szwedzi", amount: "12,076" },
  { name: "Szojgu", amount: "23,628" },
];

const whoFollow = [
  {name: "Duda", username: "duda", avatar: "/avatar_2.jpeg"},
  {name: "Bill Gates", username: "BillGates", avatar: "/avatar_2.jpeg"},
];

const ActualTrends = () => {
  return (
    <div className={s.sb_block}>
      <h3>Trends for you</h3>
      {trends.map((e) => (
        <Trend key={e.name} name={e.name} amount={e.amount} />
      ))}
    </div>
  );
};

const Trend: React.FC<TrendsProps> = ({ name, amount }) => {
  return (
    <div className={s.trend_block}>
      <span className={s.name}>{name}</span>
      <span className={s.amount}>{amount} Tweets</span>
    </div>
  );
};

interface TrendsProps {
  name: string;
  amount: string | number;
}

const WhoFollow = () => {
  return (
    <div className={s.sb_block}>
      <h3>Who to follow</h3>
      {whoFollow.map((e) => (
        <FollowBlock key={e.name} name={e.name} username={e.username} avatar={e.avatar}/>
      ))}
    </div>
  );
};

const FollowBlock: React.FC<WhoFollowProps> = ({ name, username, avatar }) => {
  return (
    <div className={s.follow_block}>
      <div className={s.avatar}>
        <img src={avatar} alt={name + ' user avatar'} />
      </div>
      <div className={s.follow_info}>
        <span className={s.name}>{name}</span>
        <span className={s.username}>@{username}</span>
      </div>
      <button>Follow</button>
    </div>
  );
};

interface WhoFollowProps {
  name: string;
  username: string | number;
  avatar: string;
}

export default Sidebar;
