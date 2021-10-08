import React, {useState, useEffect} from 'react';
import {ChatInput} from "./ChatInput";

import './ChatWindow.css'
import {ChatList} from "./ChatList";

//Material UI
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>
                        <ChatList />
                    </Item>
                </Grid>
                <Grid item xs={9}>
                    <Item>
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
                    </Item>
                </Grid>
            </Grid>

            <div>






            </div>

        </container>

    );
}