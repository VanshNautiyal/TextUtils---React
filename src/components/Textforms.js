
import React, {useState} from 'react'


export default function Textforms(props) {
    const handleupClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("The text is converted to upper case", "Success")

    }

    const handlelowClick = () =>{
      //console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("The text is converted to lower case", "Success")

  }
    const handleOnChange = (event) =>{
        //console.log("On chnage");
        setText(event.target.value)
    }
    const handleclearClick = (event) =>{
      //console.log("On chnage");
      setText(" ")
      props.showAlert("The box is clear", "Success")
  }

    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.Heading} </h1>
      <button className="btn btn primary" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handleclearClick}>Clear Text</button>
      
      <div className="mb-3">
      <textarea className ="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
      color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn primary mx-2" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handleupClick}>Convert to UpperCase</button>
      <button className="btn btn primary mx-2" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handlelowClick}>Convert to LowerCase</button>
    </div>
    <div className='container' style = {{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words & {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter the text in textbox'}</p>
    </div>
    </>
  )
}
