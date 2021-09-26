import React, {useContext} from "react";
import {styled} from "@mui/material/styles";
import {
    FormControl,
    Select,
    Typography,
    InputLabel,
    MenuItem,
    Button,
    IconButton,
    TextField,
    Tooltip
} from "@mui/material";
import {AddCircleOutline, Close, DescriptionOutlined} from "@mui/icons-material";
import {QuestionSets} from "../../App";


const Container = styled("div")(({theme}) => ({
    width: "50vw",
    margin: "10px auto",
    backgroundColor: "#fdfdfd",
    padding: 20,
}));

const HeaderTitle = styled(Typography)(({theme}) => ({
    textAlign: "center",
    color: theme.palette.primary.main,

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
            borderBottom: "1px solid #aa3535"
        }
    }
}));

const Question = styled("div")(({theme}) => ({
    display: "flex",
    flexDirection: 'column',
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
    const [questions, setQuestions] = useContext(QuestionSets);

    const addQuesSetName = (text) => {
        let newQuesName = [...questions];
        newQuesName.questionSetName = text;
        setQuestions(newQuesName);
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
        if (removeOptions[i].options.length > 0) {
            removeOptions[i].options.splice(k, 1);
            setQuestions(removeOptions);
        }
    };

    const AddPassage = (i) => {
        let newPassage = [...questions];
        newPassage[i].isPassage = true;
        setQuestions(newPassage);
    }

    const AddNewPassage = (i) => {
        let newPassage = [...questions];
        newPassage[i].passages.push({passage: ""});
        setQuestions(newPassage);
    };

    const addPassage = (text, i, j) => {
        let newPassage = [...questions];
        newPassage[i].passages[j].passage = text;
        setQuestions(newPassage);
    }

    const RemovePassage = (i, k) => {
        let removePassages = [...questions];
        if (removePassages[i].passages.length > 0) {
            removePassages[i].passages.splice(k, 1);
            if (removePassages[i].passages.length === 0) {
                removePassages[i].isPassage = false
                removePassages[i].passages.push({passage: "Passage"});
            }
            setQuestions(removePassages);
        }
    };

    return (
        <Container>
            <HeaderTitle variant={"h4"}>Create Question</HeaderTitle>
            <QuesSetName>
                <input type="text" placeholder={"Question Set Name"}
                       onBlur={(event) => addQuesSetName(event.target.value)}/>
            </QuesSetName>

            {questions.map((question, index) => <div key={index}
                                                     style={{
                                                         borderLeft: '7px solid #aa3535',
                                                         marginBottom: '15px',
                                                         borderRadius: 8,
                                                         padding: 5
                                                     }}>

                    <Question>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <FormControl variant="standard" sx={{m: 1, minWidth: 220}}>
                                <InputLabel>Passage</InputLabel>
                                <Select
                                    id="Passage"
                                    value={question[index]?.questionType}
                                    label="Passage"
                                    onChange={event => changeQuesType(event.target.value, index)}
                                >
                                    <MenuItem value={"text"}>Passage</MenuItem>
                                    <MenuItem value={"checkbox"}>Multiple Choice</MenuItem>
                                    <MenuItem value={"radio"}>True False</MenuItem>
                                    <MenuItem value={"file"}>File</MenuItem>
                                </Select>
                            </FormControl>
                            <Tooltip title={"Add Passage"}>
                                <IconButton onClick={() => AddPassage(index)}>
                                    <DescriptionOutlined sx={{color: "#5f6368"}} fontSize={"large"}/>
                                </IconButton>
                            </Tooltip>
                        </div>

                        {question.passages.map((pass, k) => <div key={k}
                                                                 style={{
                                                                     display: 'flex',
                                                                     justifyContent: 'space-between',
                                                                     marginBottom: 5
                                                                 }}>
                            {question.isPassage && <>
                                <TextField
                                    label="Write your passage here"
                                    placeholder="Passage"
                                    multiline
                                    fullWidth
                                    onBlur={(event) => addPassage(event.target.value, index, k)}
                                />
                                <Tooltip title={"Add Passage"}>
                                    <IconButton onClick={() => AddNewPassage(index)}>
                                        <AddCircleOutline fontSize={"large"}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title={"Delete Passage"}>
                                    <IconButton onClick={() => RemovePassage(index, k)}>
                                        <Close fontSize={"large"}/>
                                    </IconButton>
                                </Tooltip>
                            </>}
                        </div>)}

                        {question.questionType === "file" ?
                            <input type={question.questionType} placeholder={"Question"}
                                   onBlur={event => addQuesText(event.target.value, index)}/> :
                            <TextField
                                label="Write your question here"
                                placeholder="Question"
                                multiline
                                fullWidth
                                onBlur={event => addQuesText(event.target.value, index)}
                            />}
                    </Question>

                    {question.options.map((option, j) => <Option key={j}>
                        <div>
                            {(question.questionType !== "text" && question.questionType !== "file") ? <>
                                    <input type={question.questionType} disabled/>
                                    <input type={"text"} placeholder={`option ${j + 1}`} style={{marginLeft: '10px'}}
                                           onChange={e => ChangeOptionValue(e.target.value, index, j)}/>
                                    <IconButton aria-label="delete" onClick={() => RemoveOption(index, j)}>
                                        <Close/>
                                    </IconButton></> :
                                <> <input type={"text"}
                                          onChange={e => ChangeOptionValue(e.target.value, index, j)}/>
                                    <IconButton aria-label="delete" onClick={() => RemoveOption(index, j)}>
                                        <Close/>
                                    </IconButton></>}
                        </div>
                    </Option>)}

                    {question.options.length < 5 && (
                        <div>
                            <Button color={"primary"} size="small"
                                    onClick={() => AddOption(index, question.questionType)}>Add option</Button>
                        </div>
                    )}
                    <br/>
                    <div>
                        <Button>Add Answer</Button>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default CreateQues;