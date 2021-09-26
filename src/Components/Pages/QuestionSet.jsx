import React, {useContext} from 'react';
import {styled} from "@mui/material/styles";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import CreateQues from "./CreateQues";
import {QuestionSets} from "../../App";
import {Button, Tooltip} from "@mui/material";
import {Link} from "react-router-dom";
import theme from "./Theme";
import {Close} from "@mui/icons-material";

const Div = styled('div')(({theme}) => ({
    marginLeft: 250,
    marginBottom:20,
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
                isPassage: false,
                passages: [
                    {passage: ""}
                ],
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
                <Link to={'/preview'} style={{textDecoration: 'none', color: theme.palette.primary.main}}>Preview</Link>
            </div>
        </Div>
    );
};

export default QuestionSet;
