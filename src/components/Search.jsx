import React from "react";

const Search = () => {
  return (
    <div className="ui form">
      <div className="field">
        <label>Keywords</label>
        <input
          type="text"
          placeholder="Job title, dept., agency, series or occupation"
        />
      </div>
    </div>
  );
};

export default Search;
