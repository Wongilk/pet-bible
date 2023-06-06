import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = ({ style, placeholder, onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (onChange) onChange(searchTerm);
  }, [searchTerm]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm("");
  };
  return (
    <div style={style} className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          className="input is-rounded input is-black"
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder={placeholder}
        />
        <AiOutlineSearch className="search-icon" />
      </form>
    </div>
  );
};

export default SearchBar;
