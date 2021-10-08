import React from 'react';
import {Routes} from "./routes/Routes";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header";

//import faker from 'faker';

import styles from './App.module.css';


/**
 * /
 * /posts
 * /posts/:postId
 *    /posts/:postId/comments
 * /profile
 *    /profile/albums
 *    /profile/settings
 *    /profile/favorites
 * /Chats
 * /not-found
 * */


// // генератор списка
// const list = Array.from( {
//         length: 5
// }).map(() => faker.name.findName());
// console.log(list);



function App() {


   return (
       <BrowserRouter>
           <div className={styles.app}>
               <Header />
               {/*<Layout>*/}

               {/*</Layout>*/}
               <Routes />
               {/*<h1>x</h1>*/}
               {/*<ChatWindow />*/}
               {/*<Switch spacing={2}/>*/}
               {/*<h6>Dark theme switch</h6>*/}
           </div>
       </BrowserRouter>
  );
}

export default App;
