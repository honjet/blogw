import React from "react";
import PropTypes from "prop-types";

const FormArticle = props => {
  const {
    action,
    method,
    authenticity_token,
    title,
    body,
    handleChangeTitle,
    handleChangeBody
  } = props;

  return (
    <form
      action={action}
      method="post"
      acceptCharset="utf-8"
      className="form-article"
    >
      {method ? <input type="hidden" name="_method" value={method} /> : <></>}
      <input
        type="hidden"
        name="authenticity_token"
        value={authenticity_token}
      />
      <div className="field">
        <label htmlFor="article_title">タイトル</label>
        <input
          type="text"
          name="article[title]"
          id="article_title"
          value={title}
          onChange={handleChangeTitle}
        />
      </div>
      <div className="field">
        <label htmlFor="article_body">コンテンツ</label>
        <textarea
          name="article[body]"
          id="article_body"
          value={body}
          onChange={handleChangeBody}
        />
      </div>
      <div className="field">
        <label htmlFor="article_draft">下書き(非公開)</label>
        <input type="hidden" name="article[draft]" value="0" />
        <input
          type="checkbox"
          name="article[draft]"
          id="article_draft"
          value="1"
        />
      </div>
      <div className="actions">
        <input
          type="submit"
          value="作成する"
          name="commit"
          data-disable-with="作成する"
        />
      </div>
    </form>
  );
};

FormArticle.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.string,
  authenticity_token: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleChangeTitle: PropTypes.func.isRequired,
  handleChangeBody: PropTypes.func.isRequired
};

export default FormArticle;
