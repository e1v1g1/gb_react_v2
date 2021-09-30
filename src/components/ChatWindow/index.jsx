import React, {useState, useEffect} from 'react';
import {ChatInput} from "../ChatInput";

import './ChatWindow.css'
import {ChatList} from "../ChatList";


export const ChatWindow = () => {

    const [messageList, setMessageList] = useState([]);
    const changeMessageList = (newMessage) => {
        setMessageList([...messageList, newMessage]);
    };

    useEffect(() => {
        if (messageList.length !== 0) {
            const timer = setTimeout(() => {
                alert(
                    "сообщение от " +
                    messageList[messageList.length - 1].chatAuthor +
                    " отправленно"
                );
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [messageList]);


    return (
        <container maxWidth="sm">
            <div>
                <ChatList />
            </div>
            <div>
                <h4>Chat window</h4>
                <div className="chatMessageContainer">
                    {messageList.map((el, i) => {
                        return (
                            <div key={i} className="chatMessage">
                                <div className="chatMessage-author">{el.chatAuthor}:</div>
                                <div className="chatMessage-text">{el.chatText}</div>
                            </div>
                        );
                    })}
                </div>


                <ChatInput changeMessageList={changeMessageList}/>

            </div>

        </container>

    );
}