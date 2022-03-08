import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Card from "./components/Card";

import usajobs from "./data/usajobs";

const App = () => {
  const [results, setResults] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await usajobs.get("/api/search", {
      params: {
        Keyword: term,
      },
    });

    setResults(response);
  };

  return (
    <div className="ui container">
      <Search onTermSubmit={onTermSubmit} />
      <div className="ui segment">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {console.log(results)}
    </div>
  );
};

export default App;
