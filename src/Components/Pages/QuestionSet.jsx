import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import CreateQues from "./CreateQues";
import { QuestionSets } from "../../App";
import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "./Theme";
import { Close } from "@mui/icons-material";
import { CREATE_EXAM_PAPER } from "../../Graphql/Mutations";
import { useMutation } from "@apollo/client";

const Div = styled("div")(({ theme }) => ({
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
  const [questions, setQuestions] = useContext(QuestionSets);

  const [ExamPaper, { error }] = useMutation(CREATE_EXAM_PAPER);

  const addAnotherQues = () => {
    let addAnotherQues = { ...questions };
    addAnotherQues.questionSet.push({
      questionText: "",
      questionType: "radio",
      isPassage: false,
      passages: [{ passage: "" }],
      options: [{ option: "" }],
      answers: [{ answer: "" }],
    });
    setQuestions(addAnotherQues);
  };

  const submitQuestion = async () => {
    await ExamPaper({
      variables: {
        payload: { ...questions },
      },
    });
  };

  return (
    <Div>
      <CreateQues />
      <div>
        <Tooltip title={"Add Question"}>
          <Fab color="primary" aria-label="add" onClick={addAnotherQues}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <Button
          color={"primary"}
          sx={{ width: "10vw" }}
          onClick={submitQuestion}
        >
          Submit
        </Button>
        <Link
          to={"/preview"}
          style={{ textDecoration: "none", color: theme.palette.primary.main }}
        >
          Preview
        </Link>
      </div>
    </Div>
  );
};

export default QuestionSet;
