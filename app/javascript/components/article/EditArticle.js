import React, {useState} from "react";
import PropTypes from "prop-types";

import FormArticle from "components/article/FormArticle";
import PreviewArticle from "components/article/PreviewArticle";

const EditArticle = props => {
  const {title, body, path} = props;
  const [editedTitle, setTitle] = useState(title);
  const [editedBody, setBody] = useState(body);

  const handleChangeTitle = e => setTitle(e.target.value);
  const handleChangeBody = e => setBody(e.target.value);

  return (
    <div className="edit-article">
      <FormArticle
        {...props}
        action={`/user/${path}`}
        method={"patch"}
        title={editedTitle}
        body={editedBody}
        handleChangeTitle={handleChangeTitle}
        handleChangeBody={handleChangeBody}
      />
      <PreviewArticle title={editedTitle} body={editedBody} />
    </div>
  );
};

EditArticle.propTypes = {
  authenticityToken: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  draft: PropTypes.bool.isRequired,
  publishedAt: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default EditArticle;
