import React from "react";

function Sidebar() {
  return (
    <div id="sidebar">
      <h1 id="title">New</h1>
      <div id="articleList">
        <div className="article">
          <h4> Hydrigen VS Electric Cars</h4>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <span></span>
        <div className="article">
          <h4> The Downsides of AI Artisty</h4>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <span></span>
        <div className="article">
          <h4> Is VC Funding Drying up?</h4>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
