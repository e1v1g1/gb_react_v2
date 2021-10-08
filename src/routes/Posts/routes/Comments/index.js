import React from 'react';
import {useParams} from "react-router-dom";
import {MOCK_POSTS} from "../../mock";



export const Comments = (props) => {
    const {postId} = useParams();

    const post = MOCK_POSTS.find(({id}) => id === postId);

    if (!post) {
        return null
    }

    return (
        <ul>
            {
                post.comments.map(({id}) => (<li  key={id}>
                    asdasdasd
                </li>))
            }
        </ul>
    );
};