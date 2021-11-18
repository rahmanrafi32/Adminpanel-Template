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
    addNewPassage,
    subsectionPassage,
    removePassage,
    isPassage,
    addNewOptionField,
    deleteNewOptionField, addAnswer
} from "../../features/createQuestionsSlice";

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
                        type="number"
                        placeholder={"Section No."}
                        onBlur={(event) =>
                            dispatch(sections(event.target.value))}
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
                    <div>
                        <label htmlFor="image">Upload image</label>
                        <input
                            id="image"
                            type="file"
                            onChange={(event) =>
                                dispatch(imageMain(event.target.value))}
                        />
                        <label htmlFor="image">Upload Audio</label>
                        <input
                            id="audio"
                            type="file"
                            onChange={(event) =>
                                dispatch(audioMain(event.target.value))}
                        />
                    </div>
                </Question>
            </div>
            <div
                style={{
                    borderLeft: "7px solid #aa3535",
                    marginBottom: "15px",
                    borderRadius: 8,
                    padding: 5,
                }}
            >
                {
                    questionSet.sections.map((question, indexIN) =>
                        question.subSections.map((subSection, indexOut) =>
                            <>
                                <Question>
                                    <TextField
                                        label="particular question rule"
                                        placeholder="Question Rule"
                                        multiline
                                        fullWidth
                                        onChange={(event) =>
                                            dispatch(examRulesSub(event.target.value))}
                                    />

                                    <div key={indexOut}
                                         style={{display: "flex", justifyContent: "space-between"}}>
                                        <FormControl variant="standard" sx={{m: 1, minWidth: 220}}>
                                            <InputLabel>Passage</InputLabel>
                                            <Select
                                                id="Passage"
                                                value={subSection.questionType}
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
                                            <IconButton onClick={() => dispatch(isPassage(true))}>
                                                <DescriptionOutlined
                                                    sx={{color: "#5f6368"}}
                                                    fontSize={"large"}
                                                />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                    {
                                        subSection.passages.map((pass, indexPassage) =>
                                            <div
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
                                                                onBlur={(event) =>
                                                                    dispatch(subsectionPassage({
                                                                        value: event.target.value,
                                                                        index: indexPassage
                                                                    }))
                                                                }
                                                            />
                                                            <Tooltip title={"Add Passage"}>
                                                                <IconButton
                                                                    onClick={() => dispatch(addNewPassage(indexPassage))}>
                                                                    <AddCircleOutline fontSize={"large"}/>
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Tooltip title={"Delete Passage"}>
                                                                <IconButton
                                                                    onClick={() => dispatch(removePassage(indexPassage))}>
                                                                    <Close fontSize={"large"}/>
                                                                </IconButton>
                                                            </Tooltip>
                                                        </>
                                                }
                                            </div>
                                        )
                                    }
                                </Question>
                                <Option>
                                    <TextField
                                        label="Write your question here"
                                        placeholder="Question"
                                        multiline
                                        fullWidth
                                        onBlur={event => dispatch(questionText(event.target.value))}
                                    />
                                    {
                                        subSection.questionAndAns.map(singleQuestion =>
                                            <>
                                                {singleQuestion.queAndAns.options.map((option, optionIndex) =>
                                                    <div>
                                                        <input type={"radio"} disabled/>
                                                        <input
                                                            type={"text"}
                                                            placeholder={`option`}
                                                            style={{marginLeft: '10px'}}
                                                            // onBlur={() => dispatch()}
                                                        />
                                                        <IconButton
                                                            aria-label="delete"
                                                            onClick={() => dispatch(deleteNewOptionField(optionIndex))}
                                                        >
                                                            <Close/>
                                                        </IconButton>
                                                    </div>
                                                )}
                                                <div>
                                                    <Button
                                                        color={"primary"}
                                                        size="small"
                                                        onClick={() => dispatch(addNewOptionField(""))}
                                                    >
                                                        Add option
                                                    </Button>
                                                    <br/>
                                                    <input
                                                        type={"text"}
                                                        placeholder="Answer"
                                                        style={{marginLeft: '10px'}}
                                                        onBlur={(event) => dispatch(addAnswer(event.target.value))}
                                                    />
                                                    <Button>Add Answer</Button>
                                                    {console.log(singleQuestion.queAndAns.answer)}
                                                </div>
                                            </>
                                        )
                                    }
                                </Option>
                            </>
                        )
                    )
                }
            </div>
        </Container>
    );
};

export default CreateQues;
