import React from "react";
import {Switch, Route} from 'react-router-dom';
import {Home} from './Home';
import {Posts} from './Posts';
import {Post} from "./Posts/routes/Post";
import {Profile} from './Profile';
import {NotFound} from './NotFound'
import {ChatWindow} from "./ChatWindow";


export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />  {/*  exact - точное совпадение пути  */}
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:postId" component={Post} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/chats" component={ChatWindow} />

            <Route path="*" component={NotFound} /> {/*  404 route  */}
        </Switch>
    );
};