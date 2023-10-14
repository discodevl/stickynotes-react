import React from "react";
import { MdSearch } from "react-icons/md";

type SerachProps = {
  searchText: (text:string) => void;
}

function Search({searchText}: SerachProps) {
  return <div className="search">
    <MdSearch className="search-icons" size="1.3em"/>
    <input type="text" onChange={e => searchText(e.target.value)} placeholder="type to search..."/>
  </div>;
}

export default Search;
