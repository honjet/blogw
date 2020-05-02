import React from "react";

const asciidoctor = require("asciidoctor")();
const sanitize = require("sanitize-html");

const AsciiDoc = props => {
  const { content } = props;

  const sanitizerOptions = {
    allowedTags: [
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "p",
      "a",
      "ul",
      "ol",
      "nl",
      "li",
      "b",
      "i",
      "strong",
      "em",
      "strike",
      "code",
      "hr",
      "br",
      "div",
      "table",
      "thead",
      "caption",
      "tbody",
      "tr",
      "th",
      "td",
      "pre"
    ],

    allowedAttributes: {
      "*": ["id", "class"],
      a: ["href", "name", "target"],
      img: ["src"]
    }
  };

  const htmlContent = asciidoctor.convert(content);
  const sanitizedContent = sanitize(htmlContent, {...sanitizerOptions});

  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
};

export default AsciiDoc;
