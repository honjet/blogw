import React, {useState} from "react";
import PropTypes from "prop-types";

import TextareaAutosize from 'react-textarea-autosize';

const FormArticle = props => {
  const {
    isNew,
    action,
    method,
    authenticityToken,
    title,
    body,
    draft,
    handleChangeTitle,
    handleChangeBody
  } = props;

  const [editedDraft, setDraft] = useState(draft);
  const handleChangeDraft = e => setDraft(e.target.checked);

  return (
    <form
      className="form-article col mb-4"
      action={action}
      method="post"
      acceptCharset="utf-8"
    >
      {!isNew ? <input type="hidden" name="_method" value={method} /> : <></>}
      <input
        type="hidden"
        name="authenticity_token"
        value={authenticityToken}
      />
    <div className="form-group">
        <label htmlFor="article_title">タイトル</label>
        <input
          className="form-control"
          type="text"
          name="article[title]"
          id="article_title"
          value={title}
          onChange={handleChangeTitle}
        />
    </div>
      <div className="form-group">
        <label htmlFor="article_body">コンテンツ</label>
        <TextareaAutosize
          className="article-body-control form-control"
          name="article[body]"
          id="article_body"
          value={body}
          onChange={handleChangeBody}
        />
      </div>
      <div className="custom-control custom-checkbox mb-3">
        <input type="hidden" name="article[draft]" value="0" />
        <input
          className="custom-control-input"
          type="checkbox"
          name="article[draft]"
          id="article_draft"
          value="1"
          checked={editedDraft}
          onChange={handleChangeDraft}
        />
        <label className="custom-control-label" htmlFor="article_draft">下書き(非公開)</label>
      </div>
      <div className="actions">
        <input
          className="btn btn-danger"
          type="submit"
          value={isNew ? "作成する" : "更新する"}
          name="commit"
          data-disable-with={isNew ? "作成する" : "更新する"}
        />
      </div>
    </form>
  );
};

FormArticle.propTypes = {
  isNew: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  method: PropTypes.string,
  authenticityToken: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  draft: PropTypes.bool.isRequired,
  handleChangeTitle: PropTypes.func.isRequired,
  handleChangeBody: PropTypes.func.isRequired
};

export default FormArticle;
