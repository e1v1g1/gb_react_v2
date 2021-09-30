import React, {useState} from 'react';

import './ChatInput.css'

export const ChatInput = (props) => {

    //Создаем стейт для  сообщений
    const [chatMessage, setChatMessage] = useState({
        chatAuthor: "",
        chatText: "",
    });

    const handleChangeAuthor = (e) => {
        setChatMessage({ ...chatMessage, chatAuthor: e.target.value });
    };

    const handleChangeMessage = (e) => {
        setChatMessage({ ...chatMessage, chatText: e.target.value });
    };


    //Обработчик отправки данных формы.
    const handleSubmit = () => {
        props.changeMessageList(chatMessage);
        setChatMessage({ chatAuthor: "", chatText: "" });
    };


    return (
        <div className="chatInput">
            <input
                type="text"
                placeholder="author"
                onChange={handleChangeAuthor}
                value={chatMessage.chatAuthor}
            />
            <input
                type="text"
                placeholder="Input message"
                onChange={handleChangeMessage}
                value={chatMessage.chatText}
            />
            <button
                onClick={handleSubmit}>
                Send
            </button>
        </div>

    );
}