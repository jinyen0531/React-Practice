import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Jin" timeAgo="Today at 4:00PM" />
      <CommentDetail author="Brian" timeAgo="Today at 2:30PM" />
      <CommentDetail author="Bruno" timeAgo="Yesterday at 5:10PM" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
