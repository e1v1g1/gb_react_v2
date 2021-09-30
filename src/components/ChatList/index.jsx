import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AccountBox } from '@material-ui/icons';

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export const ChatList = () => {
     const [dense, setDense] = React.useState(false);
     const [secondary, setSecondary] = React.useState(false);




return (
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Chat list
            </Typography>
            <Demo>
                <List dense={dense}>
                    {generate(
                        <ListItem divider>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountBox />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Name 1"
                                secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>,
                    )}
                </List>
            </Demo>
        </Grid>
    </Grid>

    )
    }