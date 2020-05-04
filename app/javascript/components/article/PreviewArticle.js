import React from "react";
import PropTypes from "prop-types";

import AsciiDoc from "components/AsciiDoc";

const PreviewArticle = props => {
  const { title, body } = props;

  return (
    <div className="preview-article col mb-4">
      <article className="card bg-darker border-darker">
        <div className="card-header box-darker">プレビュー</div>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <AsciiDoc content={body} />
        </div>
      </article>
    </div>
  );
};

PreviewArticle.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default PreviewArticle;
