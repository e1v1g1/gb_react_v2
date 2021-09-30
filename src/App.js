import React from 'react';
//import faker from 'faker';

import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';


import styles from './App.module.css';

import {ChatWindow} from "./components/ChatWindow";
import {ChatList} from "./components/ChatList"



// // генератор списка
// const list = Array.from( {
//         length: 5
// }).map(() => faker.name.findName());
// console.log(list);


function App() {


   return (
    <div className={styles.app}>
        <ChatWindow />
        <h6>Dark theme switch</h6>
        <Switch />
    </div>
  );
}

export default App;
