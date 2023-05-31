import React from 'react';
import { useState } from 'react';
import ocean from "../../../../Video/ocean.mp4";



export default function Email () {
const [emailInput, setEmailInput] = useState("");
 const [boxMessage, setBoxMessage] = useState("");

const handleEmailInput = (e) =>{
    setEmailInput(e.target.value);
}
const handleSendMessage = (e)=>{
   setBoxMessage(e.target.value);
}


 

  return (
    <form>
        <section className='box-message'>
        <div className="overlay"></div>
        <video src={ocean} muted autoPlay loop type="ocean/mp4"></video>

<div className='message-container'>

    {/* insert email */}
    <label>
       Email:
       <input type="text" value={emailInput} onChange={handleEmailInput}/>
    </label>

    {/* insert message */}

    <label>
        <h1>Please write your message here; we will answer ASAP.</h1>
  
       <input type="text" value={boxMessage} onChange={handleSendMessage}/>
    </label>

</div>
        </section>
    </form>
  )
}
