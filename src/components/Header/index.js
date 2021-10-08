import React from "react";
import { makeStyles } from '@material-ui/styles';
// import Toolbar from '@material-ui/core/Toolbar';
import Toolbar from '@mui/material/Toolbar';
// import Link from '@material-ui/core/Link';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom'; // импортируем Link как RouterLink. Назначаем псевдоним
// import {getPostsPath} from "../../navigation";


const useStyles = makeStyles((theme) => ({
    toolbarSecondary: {
        justifyContent: 'center',
        borderColor: 'rgb(19, 47, 76)',
        backgroundColor: 'rgb(200, 200, 200)',
        marginBottom: '30px'
    },
    toolbarLink: {
        flexShrink: 0,
        color: '#fff',
        cursor: 'pointer',
    },
}));



export const Header = (props) => {
    const classes = useStyles();

    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            <Link
                component={RouterLink}  // привязываем ссылку к роутеру
                color="inherit"
                noWrap
                key=""
                margin={2}
                variant="subtitle1"
                to="/"    // куда ведет ссылка
                className={classes.toolbarLink}
            >
                Home
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key=""
                margin={2}
                variant="subtitle1"
                to="/profile"
                className={classes.toolbarLink}
            >
                Profile
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key=""
                margin={2}
                variant="subtitle1"
                to="/posts"
                className={classes.toolbarLink}
            >
                Posts
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key=""
                margin={2}
                variant="subtitle1"
                to="/chats"
                className={classes.toolbarLink}
            >
                Chats
            </Link>
        </Toolbar>
    );
};