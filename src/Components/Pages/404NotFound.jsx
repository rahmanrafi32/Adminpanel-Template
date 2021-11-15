import React from 'react';

import {styled} from "@mui/material/styles";

const Div = styled('div')(({theme}) => ({
    marginLeft: 260,
    [theme.breakpoints.down('sm')]: {
        marginLeft:0,
        width: 'auto',
    },
}));

const NotFound = () => {
    return (
        <Div>
            <h1>404 Sorry Page not found</h1>
        </Div>
    );
};

export default NotFound;
