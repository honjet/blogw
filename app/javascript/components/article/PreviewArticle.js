import React from "react";
import PropTypes from "prop-types";

import AsciiDoc from "components/AsciiDoc";

const PreviewArticle = props => {
  const { title, body } = props;

  return (
    <article className="preview-article">
      <h1>{title}</h1>
      <AsciiDoc content={body} />
    </article>
  );
};

PreviewArticle.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PreviewArticle;
