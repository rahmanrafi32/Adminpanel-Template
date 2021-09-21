import React from 'react';
import {styled} from "@mui/material/styles";
import CreateQues from "./CreateQues";

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
            <CreateQues/>
        </Div>
    );
};

export default QuestionSet;
