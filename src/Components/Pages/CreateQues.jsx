import {
  AddCircleOutline,
  Close,
  DescriptionOutlined
} from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionSets } from "../../App";
import {
  audioMain,
  examNo,
  examRulesMain,
  examRulesSub,
  examType,
  examYear,
  imageMain,
  passageMain,
  questionType,
  sections,
  subsectionPassage
} from "../../features/createQuestionsSlice";

const Container = styled("div")(({ theme }) => ({
  width: "50vw",
  margin: "10px auto",
  backgroundColor: "#fdfdfd",
  padding: 20,
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.main,
}));

const QuesSetName = styled("div")(({ theme }) => ({
  height: "10vh",
  display: "flex",
  alignItems: "center",
  padding: 5,
  "& input": {
    outline: "none",
    width: "100%",
    backgroundColor: "#fdfdfd",
    margin: "0 15px",
    border: 0,
    fontSize: 16,
    "&:focus": {
      borderBottom: "1px solid #aa3535",
    },
  },
}));

const Question = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "& input": {
    outline: "none",
    width: "30%",
    margin: "20px 0",
    backgroundColor: "#fdfdfd",
    border: 0,
    fontSize: 16,
    "&:focus": {
      borderBottom: "1px solid #d1d1d1",
    },
  },
}));

const Option = styled("div")(({ theme }) => ({
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
      borderBottom: "1px solid #d1d1d1",
    },
  },
}));

const CreateQues = () => {
  const dispatch = useDispatch();

  const [questions, setQuestions] = useContext(QuestionSets);

  const addQuesSetName = (text) => {
    let newQuesName = { ...questions };
    newQuesName.questionSetName = text;
    setQuestions(newQuesName);
  };

  const changeQuesType = (type, i) => {
    let newQuestionType = { ...questions };
    newQuestionType.questionSet[i].questionType = type;
    setQuestions(newQuestionType);
  };

  const addQuesText = (text, i) => {
    let newQuestionText = { ...questions };
    newQuestionText.questionSet[i].questionText = text;
    setQuestions(newQuestionText);
  };

  const ChangeOptionValue = (text, i, j) => {
    let newOptions = { ...questions };
    newOptions.questionSet[i].options[j].option = text;
    setQuestions(newOptions);
  };

  const AddOption = (i) => {
    let newOption = { ...questions };
    newOption.questionSet[i].options.push({
      option: "option " + (newOption.questionSet[i].options.length + 1),
    });
    setQuestions(newOption);
  };

  const RemoveOption = (i, k) => {
    let removeOptions = { ...questions };
    if (removeOptions.questionSet[i].options.length > 0) {
      removeOptions.questionSet[i].options.splice(k, 1);
      setQuestions(removeOptions);
    }
  };

  const AddPassage = (i) => {
    let newPassage = { ...questions };
    newPassage.questionSet[i].isPassage = true;
    setQuestions(newPassage);
  };

  const AddNewPassage = (i) => {
    let newPassage = { ...questions };
    newPassage.questionSet[i].passages.push({ passage: "" });
    setQuestions(newPassage);
  };

  const addPassage = (text, i, j) => {
    let newPassage = { ...questions };
    newPassage.questionSet[i].passages[j].passage = text;
    setQuestions(newPassage);
  };

  const RemovePassage = (i, k) => {
    let removePassages = { ...questions };
    if (removePassages.questionSet[i].passages.length > 0) {
      removePassages.questionSet[i].passages.splice(k, 1);
      if (removePassages.questionSet[i].passages.length === 0) {
        removePassages.questionSet[i].isPassage = false;
        removePassages.questionSet[i].passages.push({ passage: "Passage" });
      }
      setQuestions(removePassages);
    }
  };

  const removeQuestion = (i) => {
    let removeQuestion = { ...questions };
    if (removeQuestion.questionSet.length > 0) {
      removeQuestion.questionSet.splice(i, 1);
      setQuestions(removeQuestion);
    }
  };

  const createAnswerField = (i) => {
    let newAnswer = { ...questions };
    newAnswer.questionSet[i].answers.push({ answer: "Answer" });
    setQuestions(newAnswer);
  };
  const addAnswers = (text, i, j) => {
    let newAnswer = { ...questions };
    newAnswer.questionSet[i].answers[j].answer = text;
    setQuestions(newAnswer);
  };

  const removeAnswers = (i, j) => {
    let removeOptions = { ...questions };
    if (removeOptions.questionSet[i].answers.length > 0) {
      removeOptions.questionSet[i].answers.splice(j, 1);
      setQuestions(removeOptions);
    }
  };

  const questionSet = useSelector((state) => state.createQuestion.questions);

  console.log(questionSet);

  return (
    <Container>
      <HeaderTitle variant={"h4"}>Create Question</HeaderTitle>
      <QuesSetName>
        <input
          type="text"
          placeholder={"Exam year"}
          onBlur={(e) => dispatch(examYear(e.target.value))}
        />
        <input
          type="text"
          placeholder={"Exam No."}
          onBlur={(e) => dispatch(examNo(e.target.value))}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel>Exam Type</InputLabel>
          <Select
            value={questionSet.examType}
            label="question-type"
            onChange={(event) => dispatch(examType(event.target.value))}
          >
            <MenuItem value={"Reading"}>Reading</MenuItem>
            <MenuItem value={"Writing"}>Writing</MenuItem>
            <MenuItem value={"Listening"}>Listening</MenuItem>
          </Select>
        </FormControl>
      </QuesSetName>
      <div
        style={{
          borderLeft: "7px solid #aa3535",
          marginBottom: "15px",
          borderRadius: 8,
          padding: 5,
        }}
      >
        <Question>
          <input
            type="number"
            placeholder={"Section No."}
            onBlur={(event) => dispatch(sections(event.target.value))}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            label="Exam rule"
            placeholder="Exam Rule"
            multiline
            fullWidth
            onChange={(event) => dispatch(examRulesMain(event.target.value))}
          />
          <TextField
            label="Main Passage"
            placeholder="Passage"
            multiline
            fullWidth
            onChange={(event) => dispatch(passageMain(event.target.value))}
          />
          <div>
            <label htmlFor="image">Upload image</label>
            <input
              id="image"
              type="file"
              onChange={(event) => dispatch(imageMain(event.target.value))}
            />
            <label htmlFor="image">Upload Audio</label>
            <input
              id="audio"
              type="file"
              onChange={(event) => dispatch(audioMain(event.target.value))}
            />
          </div>
          <TextField
            label="particuler question rule"
            placeholder="Question Rule"
            multiline
            fullWidth
            onChange={(event) => dispatch(examRulesSub(event.target.value))}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
              <InputLabel>Passage</InputLabel>
              <Select
                id="Passage"
                value=""
                label="Passage"
                onChange={(e) => dispatch(questionType(e.target.value))}
              >
                <MenuItem value={"text"}>Passage</MenuItem>
                <MenuItem value={"checkbox"}>Multiple Choice</MenuItem>
                <MenuItem value={"radio"}>True False</MenuItem>
                <MenuItem value={"file"}>File</MenuItem>
              </Select>
            </FormControl>
            <Tooltip title={"Add Passage"}>
              <IconButton>
                <DescriptionOutlined
                  sx={{ color: "#5f6368" }}
                  fontSize={"large"}
                />
              </IconButton>
            </Tooltip>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <TextField
              label="Write your passage here"
              placeholder="Passage"
              multiline
              fullWidth
              onBlur={(event) =>
                dispatch(subsectionPassage(event.target.value))
              }
            />
            <Tooltip title={"Add Passage"}>
              <IconButton>
                <AddCircleOutline fontSize={"large"} />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Delete Passage"}>
              <IconButton>
                <Close fontSize={"large"} />
              </IconButton>
            </Tooltip>
          </div>
        </Question>
      </div>
      {/* {questions.questionSet.map((question, index) => (
        <div
          key={index}
          style={{
            borderLeft: "7px solid #aa3535",
            marginBottom: "15px",
            borderRadius: 8,
            padding: 5,
          }}
        >
          <Question>
            {question.questionType === "file" ? (
              <input
                type={question.questionType}
                placeholder={"Question"}
                onBlur={(event) => addQuesText(event.target.value, index)}
              />
            ) : (
              <TextField
                label="Write your question here"
                placeholder="Question"
                multiline
                fullWidth
                onBlur={(event) => addQuesText(event.target.value, index)}
              />
            )}
          </Question>

          {question.options.map((option, j) => (
            <Option key={j}>
              <div>
                {question.questionType !== "text" &&
                question.questionType !== "file" ? (
                  <>
                    <input type={question.questionType} disabled />
                    <input
                      type={"text"}
                      placeholder={`option ${j + 1}`}
                      style={{ marginLeft: "10px" }}
                      onChange={(e) =>
                        ChangeOptionValue(e.target.value, index, j)
                      }
                    />
                    <IconButton
                      aria-label="delete"
                      onClick={() => RemoveOption(index, j)}
                    >
                      <Close />
                    </IconButton>
                  </>
                ) : (
                  <>
                    {" "}
                    <input
                      type={"text"}
                      onChange={(e) =>
                        ChangeOptionValue(e.target.value, index, j)
                      }
                    />
                    <IconButton
                      aria-label="delete"
                      onClick={() => RemoveOption(index, j)}
                    >
                      <Close />
                    </IconButton>
                  </>
                )}
              </div>
            </Option>
          ))}

          <div>
            <Button
              color={"primary"}
              size="small"
              onClick={() => AddOption(index, question.questionType)}
            >
              Add option
            </Button>
          </div>

          <br />

          {question.answers.map((answer, j) => (
            <Option key={j}>
              <div>
                <input
                  type={"text"}
                  placeholder={"Answer"}
                  onChange={(e) => addAnswers(e.target.value, index, j)}
                />
                <IconButton
                  aria-label="delete"
                  onClick={() => removeAnswers(index, j)}
                >
                  <Close />
                </IconButton>
              </div>
            </Option>
          ))}

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => createAnswerField(index)}>Add Answer</Button>
            <Tooltip title={"Remove Question"}>
              <IconButton onClick={() => removeQuestion(index)}>
                <Close fontSize={"medium"} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      ))} */}
    </Container>
  );
};

export default CreateQues;
