import React from 'react';
import {Card, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const RootStyle = styled(Card)(({theme}) => ({
    borderRadius: 16,
    boxShadow: "none",
    textAlign: "center",
    padding: theme.spacing(5, 0),
    color: "#7A0C2E",
    backgroundColor: "#FFE7D9"
}));

const Admins = () => {
    return (
        <RootStyle>
            <Typography variant="h3">20</Typography>
            <Typography variant="subtitle2" sx={{opacity: 0.72}}>
                Total Admins
            </Typography>
        </RootStyle>
    );
};

export default Admins;
