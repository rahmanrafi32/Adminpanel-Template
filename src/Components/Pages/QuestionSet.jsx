import React, {useContext} from 'react';
import {styled} from "@mui/material/styles";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import CreateQues from "./CreateQues";
import {QuestionSets} from "../../App";
import {Button, Tooltip} from "@mui/material";
import {Link} from "react-router-dom";

const Div = styled('div')(({theme}) => ({
    marginLeft: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        width: 'auto',
    },
}));

const QuestionSet = () => {
    const [questions, setQuestions] = useContext(QuestionSets);
    const addAnotherQues = () => {
        setQuestions([
            ...questions,
            {
                questionText: "",
                questionType: "radio",
                options: [
                    {optionText: ""}
                ]
            }]);
    };

    const submitQuestion = () => {
        console.log("form submitted");
    };


    return (
        <Div>
            <CreateQues/>
            <div>
                <Tooltip title={"Add Question"}>
                    <Fab color="primary" aria-label="add" onClick={addAnotherQues}>
                        <AddIcon/>
                    </Fab>
                </Tooltip>
                <Button color={"primary"} sx={{width: '10vw'}} onClick={submitQuestion}>Submit</Button>
                <Link to={'/preview'} style={{textDecoration: 'none'}}>Preview</Link>
            </div>
        </Div>
    );
};

export default QuestionSet;
