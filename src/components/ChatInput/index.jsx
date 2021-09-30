import React, {useState, useRef} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';



import './ChatInput.css'

export const ChatInput = (props) => {

    const inputRef = useRef(null);


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
                ref={inputRef}
            />
            <Button variant="contained"
                onClick={handleSubmit}>
                Send
            </Button>
        </div>

    );
}