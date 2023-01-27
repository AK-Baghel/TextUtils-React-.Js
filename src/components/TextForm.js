import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("All letters converted to Uppercase.","success");
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("All letters converted to Lowercase.","success");
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied.","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed all extra spaces.","success");
    }
    const handleClear = () => {
        setText("");
        props.showAlert("Text area cleared.","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    return (
        <>
            <div className='container ' style={{color:props.mode==='light'?'#042743':'white'}}>
                <h1>{props.heading}</h1>

                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words , {text.length} Charachters & Reading Time={0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>

                <div className='my-3'>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here...' style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'#042743':'white'}}></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary m-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary m-2" onClick={handleClear}>Clear</button>

            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white',border:`1px solid ${props.mode==='light'?'aqua':'white'}`,overflow:"scroll"}}>
                <h2 className='my-3'>Preview</h2>
                <p>{text.length>0?text:'Enter something in the textbox above to preview it.'}</p>
            </div>
        </>
    )
}
