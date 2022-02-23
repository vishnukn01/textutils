import React, { useState } from "react";

export default function TextForm(props) {
  const [text, updateText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    updateText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    updateText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    updateText(newText);
  };
  const handleCapClick = () => {
    let newText = text.toLowerCase().replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });
    updateText(newText);
  };
  const handleOnChange = (e) => {
    updateText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapClick}>
          Capitalize Words
        </button>
      </div>
      <div className="container my-3">
        <h4>Your text summary</h4>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minute read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
