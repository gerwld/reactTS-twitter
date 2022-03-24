import React from "react";
import s from "./Sidebar.module.css";
import SearchInput from "../SearchInput/SearchInput";

const Sidebar = () => {
  return (
    <div className={s.sidebar_block}>
      <SearchInput />
    </div>
  );
};

export default Sidebar;
