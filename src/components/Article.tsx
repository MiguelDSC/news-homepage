import React from "react";

type ArticleProps = {
  id: number;
  title: string;
  desc: string;
  cssId: string;
  img: string;
};

function Article(props: ArticleProps) {
  console.log(props.img);

  return (
    <article className="newsArticle" id={props.cssId}>
      <div id="imageContainer">
        <img src={props.img} alt="" />
      </div>
      <div id="TextContainer">
        <h1>0{props.id}</h1> <h4>{props.title}</h4> <p>{props.desc}</p>
      </div>
    </article>
  );
}

export default Article;
