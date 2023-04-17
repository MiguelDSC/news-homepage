import React from "react";

type ArticleProps = {
  id: number;
  title: string;
  desc: string;
  cssId: string;
};

function Article(props: ArticleProps) {
  return <div id={props.cssId}>Article 0{props.id}</div>;
}

export default Article;
