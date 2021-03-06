import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Card from "./components/Card";

import usajobs from "./data/usajobs";

const App = () => {
  const [results, setResults] = useState([]);

  const onTermSubmit = async (userInput) => {
    const response = await usajobs
      .get("/api/searchhh", {
        params: {
          Keyword: userInput.term,
          LocationName: userInput.Location,
        },
      })
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));
    let data = await response.data.SearchResult.SearchResultItems;
    setResults(data);
  };

  const renderCards = results.map((item, index) => {
    return <Card key={index} item={item} />;
  });

  return (
    <div className="ui container">
      <Search onTermSubmit={onTermSubmit} />
      <div className="ui segment">{renderCards}</div>
      {console.log(results)}
    </div>
  );
};

export default App;
