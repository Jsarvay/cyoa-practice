import React, { useMemo } from "react";
import { animated, useTransition } from "react-spring";
import "./style.css";

const Message = ({message}) => {
    const items = useMemo(
        () =>
        message.split("").map((letter, index) => ({
            item: letter,
            key: `${letter}${index}`
        })),
        [message]
    );

    const transitions = useTransition(items, item => item.key, {
        trail: 35,
        from: {display: "none"},
        enter: {display: ""}
    });

    
};

export default Message;