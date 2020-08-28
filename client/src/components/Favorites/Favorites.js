import React, { useState } from "react";
import "./Favorites.css";
import htmlToImage from "html-to-image";
import FileBase64 from "react-file-base64";

function Favorites(props) {
  const [files, setfiles] = useState([]);

  const getimage = () => {
    htmlToImage
      .toPng(document.getElementById("mymodal153"), { quality: 0.01 })
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        // console.log(dataUrl);
        setfiles([...files, dataUrl]); // <-- spread existing state into new array, append new element
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div>
      <span onClick={getimage} className="minize close">
        save &minus;
      </span>
      <div className="imageholder">
        <div id="mymodal153">
          <img src="https://i.imgur.com/LFXgB63.png" class="dinoimage" />
          <h1>Cool</h1>
          <p>hi this is some example text</p>
        </div>
        <div id="imageplacer"></div>
        {files.map((post, index) => (
          //we can fiddle with sizes here :)
          <img src={post} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
