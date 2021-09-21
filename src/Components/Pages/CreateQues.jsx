import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import {FormControl, Select, Typography, InputLabel, MenuItem} from "@mui/material";

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

const QuesBody = styled("div")(({theme}) => ({
    height: "25vh",
    margin: "10px 0",
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
    marginTop: 10,
    padding: 10,
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
            {option: ""}
        ]
    }]);

    const addQuesSetName = (text) => {
        let newQuesName = [...questions];
        newQuesName.questionSetName = text;
        setQuestions(newQuesName);
        console.log(text);
    };

    const changeQuesType = (type,i) =>{
        let newQuestionType = [...questions];
        newQuestionType[i].questionType = type;
        setQuestions(newQuestionType);
    }

    console.log(questions);
    return (
        <Container>
            <HeaderTitle variant={"h4"}>Create Question</HeaderTitle>
            {questions.map((question, index) => <div key={index}>
                <QuesSetName>
                    <input type="text" placeholder={"Question Set Name"}/>
                </QuesSetName>
                <QuesBody>
                    <Question>
                        <input type="text" placeholder={"Question"} onBlur={(e) => addQuesSetName(e.target.value)}/>
                        <FormControl variant="standard" sx={{m: 1, minWidth: 220}}>
                            <InputLabel >Select Option</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={question[index]?.questionType}
                                label="Age"
                                onChange={e=>changeQuesType(e.target.value,index)}
                            >
                                <MenuItem value={"text"}>Passage</MenuItem>
                                <MenuItem value={"radio"}>Multiple Choice</MenuItem>
                                <MenuItem value={"checkbox"}>True False</MenuItem>
                                <MenuItem value={"File"}>File</MenuItem>
                            </Select>
                        </FormControl>
                    </Question>
                    <Option>
                        <div><input type={question.questionType}/><input type={"text"} style={{marginLeft: "10px"}}/></div>
                    </Option>
                </QuesBody>
            </div>)}
        </Container>
    );
};

export default CreateQues;