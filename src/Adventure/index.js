import React, { useMemo } from "react";
import { animated, useTransition } from "react-spring";
import Message from "../Message/index.js";
import "./style.css";


const AdventureBox = () => {

    const [currentMessage, setCurrentMessage] = useState(0);
    const handleClick = () => {
        if (currentMessage < messages.length - 1) {
            setCurrentMessage(currentMessage + 1);
        } else {
            setCurrentMessage(0)
        };
    };

    return (
        <div className="AdventureWindow">
            <Message />
            <div onClick={handleClick} className="AdventureFooter">
                Enter
            </div>
        </div>
    );
};

export default AdventureBox;