import React, { useState } from "react";

export default function TextForm(Props) {
  const [text, setText] = useState("this is default state of text variable");
  const [myStyle, setmyStyle] = useState({
    color:'black',
    backgroundColor:'white'
  })
  const [btnText, setbtnText] = useState('Enable Dark Mode')

  const toggle=()=>{
    if(myStyle.color==='black')
    {
      setmyStyle({
        color:'white',
        backgroundColor:'black',
        border:'2px solid white'
      });
      setbtnText('Enable Light Mode');
    }
    else
    { setmyStyle({
      color:'black',
      backgroundColor:'white',
      border:'2px solid black'
    })
    setbtnText('Enable Dark Mode');
      
    }

  }
  function rev(str) {
    if (str.length <= 1) return str;
    let arr = str.split("");
    arr = arr.reverse();
    let s = arr.join("");
    return s;
  }
  const handleUpClicku = () => {
    console.log("clciked");
    setText(text.toUpperCase());
    Props.showalert("converted to uppercase","success");
  };
  const handleUpClickl = () => {
    console.log("clciked");
    setText(text.toLowerCase());
  };
  const handleclear = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  return (
    <>
      <div class="container my-3" style={myStyle}>
        <h1>{Props.heading}</h1>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClicku}>
          To UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUpClickl}>
          To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclear}>
          Clear
        </button>
      </div>
      <div class="container my-3" style={myStyle}>
        <h2>Your Summary</h2>
        <p>
          <b>{text.split(" ").length}</b> <i>words </i>and <b>{text.length}</b>{" "}
          <i>characters</i>
        </p>
        <hr />
        <h1>Reversed Text</h1>
        <p>{rev(text)}</p>
      </div>
      <div class="container my-2" >
        <button class="btn btn-primary" onClick={toggle}>{btnText}</button>
      </div>
    </>
  );
}
