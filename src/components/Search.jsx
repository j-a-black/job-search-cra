import React, { useState } from "react";

const Search = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Keywords</label>
          <input
            type="text"
            placeholder="Job title, dept., agency, series or occupation"
            value={term}
            onChange={onInputChange}
          />
        </div>
        {console.log(term)}
      </form>
    </div>
  );
};

export default Search;
