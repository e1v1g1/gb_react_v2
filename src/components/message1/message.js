import React from "react";

import './message.css';

const Message =(props) => {

    return (
        <div className='messageContainer'>
            <h1 className='messageHeader'>Message component {props.count}:</h1>
            <div className='messageText'> {props.messageText}</div>
        </div>
    );
}

//Тут сделал экспорт default.
export default Message;
