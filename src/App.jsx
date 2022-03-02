import React from "react";
import Search from "./components/Search";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="ui container">
      <Search />
      <div className="ui segment">
        <Card />
      </div>
    </div>
  );
};

export default App;
