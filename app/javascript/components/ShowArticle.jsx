import React from "react";

const ShowArticle = props => {
  const { username, title, body } = props;

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <p>Writtend by {username}</p>
      {body}
    </React.Fragment>
  );
};

export default ShowArticle;
