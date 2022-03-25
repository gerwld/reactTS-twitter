import React from "react";
import s from "./Sidebar.module.css";
import SearchInput from "../SearchInput/SearchInput";

const Sidebar = () => {
  return (
    <div className={s.sidebar_block}>
      <div className={s.search_block}>
        <SearchInput />
      </div>
    </div>
  );
};

export default Sidebar;
