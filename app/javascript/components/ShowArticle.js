import React from "react";

import AsciiDoc from './AsciiDoc';

const ShowArticle = props => {
  const { username, title, body } = props;

  return (
    <article>
      <h1>{title}</h1>
      <p>Writtend by {username}</p>
      <AsciiDoc content={body} />
    </article>
  );
};

export default ShowArticle;
