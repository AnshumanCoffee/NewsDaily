import React, { useState } from "react";
import countWords from "../Utils/stringUtils";

// console.log('object');

export default function TextForm(props) {
  // const splitText = ()=>{
  //   let  text = text.split(" ").length;
  // };

  const handleUppercaseClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UPPERCASE !!!", "success");
  };
  const handleLowercaseClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To lowercase!!!", "success");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("All Clear !!!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied !!!", "success");
  };
  const [text, setText] = useState(" ");

  //text = "new text";    Wrong way to change the state
  // setText("new text")  Correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 style={{ marginTop: "60px" }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="box"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-info mx-1" onClick={handleUppercaseClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-info mx-2" onClick={handleLowercaseClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-info mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div
        className="conatiner my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your News Article's Summary</h2>
        <p>
          {countWords(text)} words, {text.length} characters
        </p>
        <p>{0.008 * countWords(text)} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
