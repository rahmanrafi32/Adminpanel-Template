import React from 'react';
import {styled} from "@mui/material/styles";

const Div = styled('div')(({theme}) => ({
    marginLeft: 260,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        width: 'auto',
    },
}));

const Settings = () => {
    return (
        <Div>
            <h1>This is settings page</h1>
        </Div>
    );
};

export default Settings;
