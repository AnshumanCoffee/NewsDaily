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
      <h1 style={{marginTop: '60px'}}>{props.heading}</h1>
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
    <div className="conatiner my-2" >
        <h2>Your News Article's Summary</h2>
        <p>{countWords(text)} words, {text.length} characters</p>
        <p>{0.008*countWords(text) } minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
