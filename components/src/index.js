import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Jin" />
      <CommentDetail author="Brian" />
      <CommentDetail author="Bruno" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
