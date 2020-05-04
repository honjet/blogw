import React, { useState } from "react";
import PropTypes from "prop-types";

import FormArticle from "components/article/FormArticle";
import PreviewArticle from "components/article/PreviewArticle";

const NewArticle = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChangeTitle = e => setTitle(e.target.value);
  const handleChangeBody = e => setBody(e.target.value);

  return (
    <div className="new-article row row-cols-1 row-cols-md-2">
      <FormArticle
        {...props}
        isNew={true}
        action={"/home/articles"}
        title={title}
        body={body}
        handleChangeTitle={handleChangeTitle}
        handleChangeBody={handleChangeBody}
      />
      <PreviewArticle title={title} body={body} />
    </div>
  );
};

NewArticle.propTypes = {
  authenticityToken: PropTypes.string.isRequired
};

export default NewArticle;
