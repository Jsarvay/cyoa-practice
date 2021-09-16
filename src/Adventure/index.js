import React, { useState } from "react";
import Message from "../Message/index.js";
import "./style.css";

const messages = [
    "Welcome Traveler", 
    "Rest a While won't you.",
    "Or Not, whatever."
  ];


const AdventureBox = () => {

    const [currentMessage, setCurrentMessage] = useState(0);
    const handleClick = () => {
        if (currentMessage < messages.length - 1) {
            setCurrentMessage(currentMessage + 1);
        } else {
            setCurrentMessage(0);
        }
    };

    return (
        <div className="AdventureWindow">
            <Message message={messages[currentMessage]} key={currentMessage} />
            <div onClick={handleClick} className="AdventureFooter">
                Enter
            </div>
        </div>
    );
};

export default AdventureBox;