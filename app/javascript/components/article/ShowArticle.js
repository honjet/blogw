import React from "react";
import PropTypes from "prop-types";

import AsciiDoc from "components/AsciiDoc";
import { mapDate } from "mapper";

const ShowArticle = props => {
  const { username, title, body, draft, publishedAt, updatedAt } = mapDate(
    props,
    "publishedAt",
    "updatedAt",
  );

  return (
    <article className="show-article">
      <h1>{title}</h1>
      <p className="text-muted">
        {username} updated at {updatedAt.toLocaleString()}<br />
        {draft ? "非公開" : `公開: ${publishedAt.toLocaleDateString()}`}
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
