import React from "react";

const ShowArticle = props => {
  const { username, title, body } = props;

  return (
    <React.Fragment>
      Username: {username}
      Title: {title}
      Body: {body}
    </React.Fragment>
  );
};

export default ShowArticle;
