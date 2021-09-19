import React from "react";
import MemeGen from "./components/MemeGen";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui segment">
        <h2 className="ui center aligned header">Meme Generator</h2>
      </div>
      <div className="ui segment">
        <MemeGen />
      </div>
    </div>
  );
};

export default App;
