import React from 'react';
import {styled} from "@mui/material/styles";
import QuesForm from "./QuesForm";

const Div = styled('div')(({theme}) => ({
    marginLeft: 250,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        width: 'auto',
    },
}));

const QuestionSet = () => {
    return (
        <Div>
            <QuesForm/>
        </Div>
    );
};

export default QuestionSet;
