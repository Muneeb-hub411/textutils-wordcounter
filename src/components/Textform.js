import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const [text, settext] = useState("");
  const btnclick = () => {
    let newtext = text;
    if (newtext === newtext.toLowerCase()) {
      settext(newtext.toUpperCase());
      props.showAlert("Converted to UpperCase", "success");
    } else {
      alert("Text is already in Upper Case");
    }
    // settext(newtext);
  };
  const change = (event) => {
    settext(event.target.value);
  };
  const btn2click = () => {
    settext("");
  };
  const btn3click = () => {
    let newtext = text;
    if (newtext === newtext.toUpperCase()) {
      settext(newtext.toLowerCase());
      props.showAlert("Converted to lowercase", "success");
    } else {
      alert("Text is already in lowercase");
    }
  };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "gray" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div>
          <div className="form-group">
            <label htmlfor={text}>
              <h3>{props.heading}</h3>
            </label>
            <textarea
              className="form-control"
              id="txtarea"
              rows="6"
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              onChange={change}
              value={text}
            >
              {text}
            </textarea>
            <buttton className="btn btn-primary my-10" onClick={btnclick}>
              Change to UpperCase
            </buttton>
            <button className="btn btn-primary mx-3 my-3" onClick={btn3click}>
              Change to LowerCase
            </button>
            <button className="btn btn-primary mx-3 my-3" onClick={btn2click}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "gray" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3> Text Preview</h3>
        <p>{text.length > 1 ? text : "enter text to preview"}</p>

        <p>
          {/* <strong>Character Counter</strong>:{text.length}   */}
          <strong>Character Counter</strong>:{text.length}
        </p>
        <p>
          {/* <strong>Words Counter</strong>:{text.split(" ").length} */}
          {/* <strong>Words Counter</strong>:{text.trim().split(" ").length} */}
          <strong>Words Counter</strong>:{" "}
          {text.trim() === "" ? 0 : text.trim().split(" ").length}
        </p>
        <p>
          <strong>Estimated time to read</strong>:
          {0.008 * (text.trim() === "" ? 0 : text.trim().split(" ").length)}
        </p>
      </div>
    </>
  );
}
