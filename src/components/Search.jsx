import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <div className="ui form">
      <div className="field">
        <label>Keywords</label>
        <input
          type="text"
          placeholder="Job title, dept., agency, series or occupation"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
