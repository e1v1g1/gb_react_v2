import React from 'react';
//import faker from 'faker';

import styles from './App.module.css';

import {ChatWindow} from "./components/ChatWindow";



// // генератор списка
// const list = Array.from( {
//         length: 5
// }).map(() => faker.name.findName());
// console.log(list);


function App() {


   return (
    <div className={styles.app}>
        <ChatWindow />
    </div>
  );
}

export default App;
