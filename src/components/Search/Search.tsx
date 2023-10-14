import React, { Dispatch, SetStateAction } from "react";
import { MdSearch } from "react-icons/md";

type SerachProps = {
  searchNote: Dispatch<SetStateAction<string>>;
}

function Search({searchNote}: SerachProps) {
  return <div className="search">
    <MdSearch className="search-icons" size="1.3em"/>
    <input type="text" onChange={e => searchNote(e.target.value)} placeholder="type to search..."/>
  </div>;
}

export default Search;
