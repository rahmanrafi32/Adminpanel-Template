import {
    AddCircleOutline,
    Close,
    DescriptionOutlined
} from "@mui/icons-material";
import {
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
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
    questionText,
    sections,
    addNewPassageField,
    subsectionPassage,
    removePassage,
    isPassage,
    addNewOptionField,
    deleteNewOptionField,
    addNewOption,
    deleteQuestionField,
    addNewAnswerField,
    deleteNewAnswerField,
    addNewAnswer
} from "../../features/createQuestionsSlice";
import React from "react";

const Container = styled("div")(({theme}) => ({
    width: "50vw",
    margin: "10px auto",
    backgroundColor: "#fdfdfd",
    padding: 20,
}));

const HeaderTitle = styled(Typography)(({theme}) => ({
    textAlign: "center",
    color: theme.palette.primary.main,
    fontSize: 30
}));

const QuesSetName = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    "& input": {
        outline: "none",
        width: "100%",
        backgroundColor: "#fdfdfd",
        margin: "0 10px",
        border: 0,
        fontSize: 16,
        "&:focus": {
            borderBottom: "1px solid #aa3535",
        },
    },
}));

const Question = styled("div")(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& input": {
        outline: "none",
        width: "30%",
        margin: "10px 0",
        backgroundColor: "#fdfdfd",
        border: 0,
        fontSize: 16,
        "&:focus": {
            borderBottom: "1px solid #d1d1d1",
        },
    },
}));

const Option = styled("div")(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    "& input": {
        backgroundColor: "#fdfdfd",
        border: "none",
        outline: "none",
        margin: '15px 0',
        fontSize: 18,
        borderBottom: "1px solid #d1d1d1",
    },
}));

const CreateQues = () => {
    const dispatch = useDispatch();
    const questionSet = useSelector((state) => state.createQuestion.questions);
    return <Container>
        <HeaderTitle variant={"h4"}>Create Question</HeaderTitle>
        <QuesSetName>
            <input
                type="text"
                placeholder={"Exam year"}
                onBlur={(e) => {
                    let year = parseInt(e.target.value)
                    return dispatch(examYear(year));
                }}
            />
            <input
                type="text"
                placeholder={"Exam No."}
                onBlur={(e) => {
                    let exam = parseInt(e.target.value)
                    return dispatch(examNo(exam));
                }}
            />
            <FormControl variant="standard" sx={{m: 1, minWidth: 220}}>
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
                borderLeft: "7px solid #aa3520",
                marginBottom: "15px",
                borderRadius: 8,
                padding: 5,
            }}
        >
            <Question>
                <input
                    type="text"
                    placeholder={"Section No."}
                    onBlur={(e) => {
                        let section = parseInt(e.target.value);
                        return dispatch(sections(section))
                    }}
                />
                <TextField
                    sx={{marginBottom: 2}}
                    label="Exam rule"
                    placeholder="Exam Rule"
                    multiline
                    fullWidth
                    onChange={(event) =>
                        dispatch(examRulesMain(event.target.value))}
                />
                <TextField
                    label="Main Passage"
                    placeholder="Passage"
                    multiline
                    fullWidth
                    onChange={(event) =>
                        dispatch(passageMain(event.target.value))}
                />
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between'
                }}>
                    <label htmlFor="image" style={{padding: 8}}><strong>Upload image</strong></label>
                    <input
                        id="image"
                        type="file"
                        onChange={(event) =>
                            dispatch(imageMain(event.target.value))}
                    />
                    <label htmlFor="audio" style={{padding: 8}}><strong>Upload Audio</strong></label>
                    <input
                        id="audio"
                        type="file"
                        onChange={(event) =>
                            dispatch(audioMain(event.target.value))}
                    />
                </div>
            </Question>
        </div>
        {
            questionSet.sections.map((section, sectionIndex) =>
                section.subSections.map((subSection, subSectionIndex) =>
                    <div
                        key={subSectionIndex}
                        style={{
                            borderLeft: "7px solid #aa3535",
                            marginBottom: "15px",
                            borderRadius: 8,
                            padding: 5,
                        }}
                    >
                        <Question>
                            <TextField
                                label="particular question rule"
                                placeholder="Question Rule"
                                multiline
                                fullWidth
                                value={subSection.examRules}
                                onChange={(event) =>
                                    dispatch(examRulesSub({value: event.target.value, index: subSectionIndex}))}
                            />
                            {
                                subSection.passages.map((pass, indexPassage) =>
                                    <div
                                        key={indexPassage}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginBottom: 5,
                                        }}
                                    >
                                        {
                                            !subSection.isPassage ? "" :
                                                <>
                                                    <TextField
                                                        label="Write your passage here"
                                                        placeholder="Passage"
                                                        multiline
                                                        fullWidth
                                                        value={pass}
                                                        onChange={(event) =>
                                                            dispatch(subsectionPassage({
                                                                value: event.target.value,
                                                                index: indexPassage
                                                            }))
                                                        }
                                                        sx={{margin: 1}}
                                                    />
                                                    <Tooltip title={"Add Passage"}>
                                                        <IconButton
                                                            disableRipple
                                                            sx={{p: 2}}
                                                            onClick={() => dispatch(addNewPassageField(""))}>
                                                            <AddCircleOutline fontSize={"medium"}
                                                                              sx={{color: "#aa3535"}}/>
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title={"Delete Passage"}>
                                                        <IconButton
                                                            disableRipple
                                                            sx={{p: 2}}
                                                            onClick={() => dispatch(removePassage(indexPassage))}>
                                                            <Close fontSize={"medium"}
                                                                   sx={{color: "#aa3535"}}/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </>
                                        }
                                    </div>
                                )
                            }
                        </Question>
                        <Option>
                            {
                                subSection.questionAndAns.map((singleQuestion, singleQuesIndex) =>
                                    <div key={singleQuesIndex}>
                                        {/*selecting question type*/}
                                        <div style={{display: "flex", justifyContent: "space-between"}}>
                                            <FormControl variant="standard" sx={{m: 1, minWidth: 220}}>
                                                <InputLabel>Question Type</InputLabel>
                                                <Select
                                                    id="Passage"
                                                    value={singleQuestion.queAndAns.questionType}
                                                    label="Passage"
                                                    onChange={(e) => dispatch(questionType({
                                                        value: e.target.value,
                                                        index: subSectionIndex
                                                    }))}
                                                >
                                                    <MenuItem value={"text"}>Passage</MenuItem>
                                                    <MenuItem value={"radio"}>Multiple Choice</MenuItem>
                                                    <MenuItem value={"checkbox"}>True False</MenuItem>
                                                    <MenuItem value={"file"}>File</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <Tooltip title={"Add Passage"}>
                                                <IconButton disableRipple
                                                            sx={{p: 2}}
                                                            onClick={() => dispatch(isPassage(true))}>
                                                    <DescriptionOutlined
                                                        sx={{color: "#aa3535"}}
                                                        fontSize={"medium"}
                                                    />
                                                </IconButton>
                                            </Tooltip>
                                        </div>

                                        {/*writing question or selecting an image for question*/}
                                        {
                                            (singleQuestion.queAndAns.questionType === "file") ? <input type="file"
                                                                                                        onChange={event => dispatch(questionText(event.target.value))}/> :
                                                <TextField
                                                    label="Write your question here"
                                                    placeholder="Question"
                                                    multiline
                                                    fullWidth
                                                    onBlur={event => dispatch(questionText(event.target.value))}
                                                />
                                        }

                                        {/*add option and delete option*/}
                                        {singleQuestion.queAndAns.options.map((option, optionIndex) =>

                                            <div key={optionIndex}>
                                                <input
                                                    type={"text"}
                                                    value={singleQuestion.queAndAns.options[optionIndex]}
                                                    placeholder={`option ${optionIndex + 1}`}
                                                    style={{marginLeft: '10px'}}
                                                    onChange={(event) => dispatch(addNewOption({
                                                        value: event.target.value,
                                                        optionIndex,
                                                        subSectionIndex
                                                    }))}
                                                />
                                                <IconButton
                                                    aria-label="delete"
                                                    sx={{p: 2}}
                                                    onClick={() => dispatch(deleteNewOptionField({
                                                        optionIndex,
                                                        subSectionIndex
                                                    }))}
                                                >
                                                    <Close sx={{color: "#aa3535"}}/>
                                                </IconButton>
                                            </div>
                                        )}
                                        <Button
                                            color={"primary"}
                                            size="small"
                                            onClick={() => dispatch(addNewOptionField({
                                                value: "",
                                                subSectionIndex
                                            }))}
                                        >
                                            Add option
                                        </Button>
                                        <br/>

                                        {/*add answer*/}
                                        {singleQuestion.queAndAns.answer.map((ans, answerIndex) =>
                                            <div key={answerIndex}>
                                                <input
                                                    type={"text"}
                                                    value={singleQuestion.queAndAns.answer[answerIndex]}
                                                    placeholder={`Answer ${answerIndex + 1}`}
                                                    style={{marginLeft: '10px'}}
                                                    onChange={(event) => dispatch(addNewAnswer({
                                                        value: event.target.value,
                                                        answerIndex,
                                                        subSectionIndex
                                                    }))}
                                                />
                                                <IconButton
                                                    aria-label="delete"
                                                    sx={{p: 2}}
                                                    onClick={() => dispatch(deleteNewAnswerField({
                                                        answerIndex,
                                                        subSectionIndex
                                                    }))}
                                                >
                                                    <Close sx={{color: "#aa3535"}}/>
                                                </IconButton>
                                            </div>
                                        )}
                                        <Button
                                            color={"primary"}
                                            size="small"
                                            onClick={() => dispatch(addNewAnswerField({
                                                value: "",
                                                subSectionIndex
                                            }))}
                                        >
                                            Add Answer
                                        </Button>

                                        {/*delete Question */}
                                        <div style={{
                                            display: "flex",
                                            justifyContent: 'flex-end'
                                        }}>
                                            <Button
                                                disableRipple
                                                size={"small"}
                                                color={"primary"}
                                                sx={{width: "10vw"}}
                                                onClick={() => dispatch(deleteQuestionField(subSectionIndex))}
                                            >
                                                Delete Question
                                            </Button>
                                        </div>
                                    </div>
                                )
                            }
                        </Option>
                    </div>
                )
            )
        }
    </Container>;
};

export default CreateQues;
