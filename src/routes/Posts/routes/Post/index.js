import React from "react";
import { useParams, Redirect, Route, Link } from "react-router-dom";
import {MOCK_POSTS} from "../../mock";
import {Comments} from "../Comments";

export const Post = (props) => {
    const {postId} = useParams();

    const post = MOCK_POSTS.find(({id}) => id === postId);


    if (!post) {
        return <Redirect to="404"/>
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>

            <Link to={`/posts/${postId}/comments`}>
                Leave comment
            </Link>
            <br/>
            {/*  comment route  */}
            <Route path={`/posts/:postId/comments`} component={Comments}></Route>
        </div>
    );
};