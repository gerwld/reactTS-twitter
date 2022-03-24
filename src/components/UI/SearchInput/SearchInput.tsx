import React from "react";
import s from "./Search.module.css";

const SearchInput = () => {
  return (
    <div className={s.search_block}>
      <input type="text" placeholder="Search Twitter" name="global-search" />
    </div>
  );
};

export default SearchInput;
