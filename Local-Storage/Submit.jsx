import React, { useState, useEffect } from 'react'
import './Submit_style.css'

const Submit = () => {
    const [inputText, setInputtext] = useState()
    const [lastText, setLasttext] = useState(
        localStorage.getItem("lastenterText") || "")

    useEffect(() => {
        localStorage.setItem("lastenterText", lastText)
    }, [lastText])

    function submit() {
        if (inputText.trim() === "") {
            alert("Please enter text first");
            return;
        }
        else {
            setLasttext(inputText)
            setInputtext("")
        }
    }
    return (
        <>
            <div className='Last-text'>
                <div className='input-container'>
                    <input
                        type="text"
                        value={inputText}
                        placeholder='Enter something'
                        onChange={(a) => setInputtext(a.target.value)} />
                </div>
                <div className='submit-button'>
                    <button onClick={submit}>Submit</button>
                    <p>Last text : {lastText}</p>
                </div>
            </div>
        </>
    )
}

export default Submit

