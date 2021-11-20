import React from "react";
import {styled} from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CreateQues from "./CreateQues";
import {Button, IconButton, Tooltip} from "@mui/material";
import {Link} from "react-router-dom";
import theme from "./Theme";
import {CREATE_EXAM_PAPER} from "../../Graphql/Mutations";
import {useMutation} from "@apollo/client";
import {useDispatch, useSelector} from "react-redux";
import {addNewQuestionField} from "../../features/createQuestionsSlice";

const Div = styled("div")(({theme}) => ({
    marginLeft: 250,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        width: "auto",
    },
}));

const QuestionSet = () => {
    const questionSet = useSelector((state) => state.createQuestion.questions);

    const dispatch = useDispatch();

    const [ExamPaper, {error}] = useMutation(CREATE_EXAM_PAPER);

    let addAnotherQues = {
        examRules: "",
        image: "",
        questionText: "",
        questionType: "",
        isPassage: false,
        passages: [""],
        questionAndAns: [
            {
                questionNumber: 0,
                queAndAns: {
                    question: "",
                    questionType: "radio",
                    options: [""],
                    answer: ""
                }
            },
        ],
    };

    // const submitQuestion = async () => {
    //     await ExamPaper({
    //         variables: {
    //             payload: {},
    //         },
    //     });
    // };

    const submitQuestion = () =>{
        console.log(questionSet)
    }

    return (
        <Div>
            <CreateQues/>
            <div>
                <Tooltip title={"Add Question"}>
                    <Fab color="primary" aria-label="add" onClick={() => dispatch(addNewQuestionField(addAnotherQues))}>
                        <AddIcon/>
                    </Fab>
                </Tooltip>
                <Button
                    color={"primary"}
                    sx={{width: "10vw"}}
                    onClick={submitQuestion}
                >
                    Submit
                </Button>
                <Link
                    to={"/preview"}
                    style={{textDecoration: "none", color: theme.palette.primary.main}}
                >
                    <Button
                        color={"primary"}
                        sx={{width: "10vw"}}
                    >
                        Preview
                    </Button>
                </Link>
            </div>
        </Div>
    );
};

export default QuestionSet;
