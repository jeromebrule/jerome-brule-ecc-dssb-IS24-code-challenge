import React from "react";
import {useEffect, useState} from "react";

interface Props {
  usersInfo: string[];
}

const Search = ({usersInfo}: Props) => {
  const [search, setSearch] = useState("");

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      {search}
    </div>
  );
};

export default Search;
