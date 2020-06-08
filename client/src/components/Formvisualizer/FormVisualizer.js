import React from "react";
import "./FormVisualizer.css";

function FormVisualizer(props) {
  return (
    <div className="formmover">
      <div id="visualizerbox">
        <img
          src={props.data.imageUrl}
          alt="imagefailedtoload"
          className="VisualizerPic"
        />
        <h6 className="VisualizerTitle">{props.data.title}</h6>
        <div className="VisualizerP">Written by:{props.data.postedBy}</div>
        <div
          className="VisualizerP"
          dangerouslySetInnerHTML={{
            __html: props.data.body,
          }}
        ></div>
      </div>
    </div>
  );
}

export default FormVisualizer;
