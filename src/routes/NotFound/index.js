import React from "react";
import {Link} from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';

export const NotFound = () => {

    return (
        <div>
           <h1>404 NotFound</h1>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key=""
                variant="button"
                to="/"
            >
                Go to Home
            </Link>
        </div>
    );
};