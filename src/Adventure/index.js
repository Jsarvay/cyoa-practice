import React from "react";
import "./style.css";
const Message = () => <div />

const AdventureBox = () => {
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