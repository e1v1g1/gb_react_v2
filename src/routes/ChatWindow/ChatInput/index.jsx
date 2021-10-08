import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';



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
            <Input
                sx={{ width: '25%' }}
                type="text"
                placeholder="author"
                onChange={handleChangeAuthor}
                inputProps={chatMessage.chatAuthor}

            />
            <Input
                type="text"
                placeholder="Input message"
                onChange={handleChangeMessage}
                value={chatMessage.chatText}
                sx={{ ml: 2 }}
            />
            <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ ml: 2 }}
            >
                Send
            </Button>
        </div>

    );
}