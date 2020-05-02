import React from "react";
import PropTypes from "prop-types";

import AsciiDoc from "components/AsciiDoc";
import { mapDate } from "mapper";

const ShowArticle = props => {
  console.log(props);
  const { username, title, body, draft, publishedAt, updatedAt } = mapDate(
    props,
    "publishedAt",
    "updatedAt",
  );

  return (
    <article>
      <h1>{title}</h1>
      <p>
        {username} updated at {updatedAt.toLocaleString()}
      </p>
    <p>
        {draft ? "非公開" : `公開日: ${publishedAt.toLocaleString()}`}
    </p>
      <AsciiDoc content={body} />
    </article>
  );
};

ShowArticle.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  draft: PropTypes.bool.isRequired,
  publishedAt: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired
};

export default ShowArticle;
