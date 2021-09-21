import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import {FormControl, Select, Typography, InputLabel, MenuItem, Button, IconButton, TextField} from "@mui/material";
import {Close, ShortText} from "@mui/icons-material";


const Container = styled("div")(({theme}) => ({
    width: "50vw",
    margin: "10px auto",
    backgroundColor: "#fdfdfd",
    padding: 25,
}));

const HeaderTitle = styled(Typography)(({theme}) => ({
    textAlign: "center",
    color: "#aa3535",

}));

const QuesSetName = styled("div")(({theme}) => ({
    height: "10vh",
    display: "flex",
    alignItems: "center",
    "& input": {
        outline: "none",
        width: "100%",
        backgroundColor: "#fdfdfd",
        border: 0,
        fontSize: 20,
        "&:focus": {
            borderBottom: "1px solid #d1d1d1"
        }
    }
}));

const Question = styled("div")(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    "& input": {
        outline: "none",
        width: "50%",
        marginTop: 25,
        backgroundColor: "#fdfdfd",
        border: 0,
        fontSize: 18,
        "&:focus": {
            borderBottom: "1px solid #d1d1d1"
        }
    }
}));

const Option = styled("div")(({theme}) => ({
    padding: 5,
    display: "flex",
    flexDirection: "column",
    "& div": {
        margin: 5,
        "& input": {
            backgroundColor: "#fdfdfd",
            border: "none",
            outline: "none",
            fontSize: 16,
            borderBottom: "1px solid #d1d1d1"
        }
    }
}));

const CreateQues = () => {
    const [questions, setQuestions] = useState([{
        questionSetName: "",
        questionText: "",
        questionType: "radio",
        options: [
            {optionText: ""}
        ]
    }]);

    const addQuesSetName = (text) => {
        let newQuesName = [...questions];
        newQuesName.questionSetName = text;
        setQuestions(newQuesName);
        console.log(text);
    };

    const changeQuesType = (type, i) => {
        let newQuestionType = [...questions];
        newQuestionType[i].questionType = type;
        setQuestions(newQuestionType);
    };

    const addQuesText = (text, i) => {
        let newQuestionText = [...questions];
        newQuestionText[i].questionText = text;
        setQuestions(newQuestionText);
    };

    const ChangeOptionValue = (text, i, j) => {
        let newOptions = [...questions];
        newOptions[i].options[j].optionText = text;
        setQuestions(newOptions);
    };

    const AddOption = (i, type) => {
        let newOption = [...questions];
        if (newOption[i].options.length < 5) {
            newOption[i].options.push({optionText: "option " + (newOption[i].options.length + 1)});
            setQuestions(newOption);
        } else {
            alert("max option limit is 4");
        }
    };

    const RemoveOption = (i, k) => {
        let removeOptions = [...questions];
        if (removeOptions[i].options.length > 1) {
            removeOptions[i].options.splice(k, 1);
            setQuestions(removeOptions);
        }
        console.log(i, k);
    };

    const submitQuestion = () => {
        console.log("form submitted");
    };

    const previewQuestion = () => {
        console.log("question preview");
    };
    console.log(questions);
    return (
        <Container>
            <HeaderTitle variant={"h4"}>Create Question</HeaderTitle>
            {questions.map((question, index) => <div key={index}>
                <QuesSetName>
                    <input type="text" placeholder={"Question Set Name"}
                           onBlur={(event) => addQuesSetName(event.target.value)}/>
                </QuesSetName>
                <Question>
                    {question.questionType === "text" ? <TextField
                            label="Write your passage here"
                            placeholder="Passage"
                            multiline
                        /> :
                        <input type="text" placeholder={"Question"}
                               onBlur={event => addQuesText(event.target.value, index)}/>}
                    <FormControl variant="standard" sx={{m: 1, minWidth: 220}}>
                        <InputLabel>Select Option</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={question[index]?.questionType}
                            label="Age"
                            onChange={event => changeQuesType(event.target.value, index)}
                        >
                            <MenuItem value={"text"}>Passage</MenuItem>
                            <MenuItem value={"radio"}>Multiple Choice</MenuItem>
                            <MenuItem value={"checkbox"}>True False</MenuItem>
                            <MenuItem value={"File"}>File</MenuItem>
                        </Select>
                    </FormControl>
                </Question>
                {question.options.map((option, j) => <Option>
                    <div>
                        {question.questionType !== "text" ? <><input type={question.questionType}/>
                            <input type={"text"} style={{marginLeft:'10px'}}
                                   onChange={e => ChangeOptionValue(e.target.value, index, j)}/>
                            <IconButton aria-label="delete">
                                <Close onClick={() => RemoveOption(index, j)}/>
                            </IconButton></> :
                            <> <input type={"text"} onChange={e => ChangeOptionValue(e.target.value, index, j)}/>
                            <IconButton aria-label="delete">
                                <Close onClick={() => RemoveOption(index, j)}/>
                            </IconButton></>}

                    </div>
                </Option>)}
                {question.options.length < 5 && (
                    <div className="add_qus_body">
                        <Button size="small" onClick={() => AddOption(index, question.questionType)}>Add option</Button>
                    </div>
                )}
            </div>)}
            <Button color={"secondary"} onClick={submitQuestion}>Submit</Button>
            <Button color={"secondary"} onClick={previewQuestion}>Preview</Button>

        </Container>
    );
};

export default CreateQues;