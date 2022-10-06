import React, { useState } from "react";

// console.log('object');

export default function TextForm(props) {
  const handleUppercaseClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowercaseClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    let newText = '';
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");

  //text = "new text";    Wrong way to change the state
  // setText("new text")  Correct way to change the state

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="box"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-info mx-1" onClick={handleUppercaseClick} >
        Convert to UPPERCASE
      </button>
      <button className="btn btn-info mx-2" onClick={handleLowercaseClick} >
        Convert to lowercase
      </button>
      <button className="btn btn-danger mx-2" onClick={handleClearClick} >
        Clear text
      </button>
    </div>
    <div className="conatiner" my-2>
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").length } minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
