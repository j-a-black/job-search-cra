import React, { useState } from "react";

const Search = ({ onTermSubmit }) => {
  const [userInput, setUserInput] = useState({ term: "", location: "" });

  const onInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(userInput);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="term">Keywords</label>
          <input
            type="text"
            name="term"
            placeholder="Job title, dept., agency, series or occupation"
            value={userInput.term}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            placeholder="City, State, Zip or Country"
            value={userInput.location}
            onChange={onInputChange}
          />
        </div>
        {console.log(userInput.term, userInput.location)}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
