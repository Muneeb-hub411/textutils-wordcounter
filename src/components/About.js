import React from "react";
import { useState } from "react";

export default function About() {
  const [myStyle, setStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const Change = () => {
    if (myStyle.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setWord("Enable");
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
      setWord("Disable");
    }
  };
  const [word, setWord] = useState("Enable");

  return (
    <>
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary my-3" onClick={Change}>
          {word} DarkMode
        </button>
      </div>
    </>
  );
}
