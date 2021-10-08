import React from "react";
import { Link } from "react-router-dom";
import {MOCK_POSTS} from "./mock";

export const Posts = (props) => {

    return (
        <div>
            <h1>Posts</h1>
                <ul>
                    {
                        MOCK_POSTS.map(({title, id})=> <li>
                          <Link to={`/posts/${id}`}>    {/*Тут кавычки backtick, иначе работать не будет*/}
                                {title}
                            </Link>
                        </li>)
                    }
                </ul>
        </div>
    );
};