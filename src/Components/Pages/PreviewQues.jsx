import {FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import React, {useContext} from "react";
import {QuestionSets} from "../../App";
import {useSelector} from "react-redux";

const Div = styled("div")(({theme}) => ({
    marginLeft: 250,
    [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        width: "auto",
    },
}));

const Container = styled("div")(({theme}) => ({
    width: "50vw",
    margin: "10px auto",
    backgroundColor: "#fdfdfd",
    padding: 20,
}));

const OptionDiv = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    "& input": {
        marginRight: 10,
    },
}));

const QuesSetName = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
}));

const PreviewQues = () => {
    const questionSet = useSelector((state) => state.createQuestion.questions);

    console.log(questionSet);
    return (
        <Div>
            <Container>
                <QuesSetName>
                    <Typography variant={"h5"} fontSize={16} sx={{m: 3}}>Exam Year: {questionSet.year}</Typography>
                    <Typography variant={"h5"} fontSize={16} sx={{m: 3}}>Exam No: {questionSet.examNo}</Typography>
                    <Typography variant={"h5"} fontSize={16} sx={{m: 3}}>Exam Type: {questionSet.examType}</Typography>
                </QuesSetName>
                {
                    questionSet.sections.map((section, index) =>
                        <>
                            <div
                                style={{
                                    borderLeft: "7px solid #aa3520",
                                    marginBottom: "15px",
                                    borderRadius: 8,
                                    padding: 5,
                                }}>
                                <Typography variant={"h5"} fontSize={16} sx={{m: 3}}>Section
                                    No: {section.sectionNo}</Typography>
                                <Typography variant={"subtitle1"} sx={{m: 3}}>{section.examRules}</Typography>
                                <Typography variant={"h5"} sx={{m: 3}}>{section.passage}</Typography>
                            </div>
                            <div
                                style={{
                                    borderLeft: "7px solid #aa3520",
                                    marginBottom: "15px",
                                    borderRadius: 8,
                                    padding: 5,
                                }}
                            >

                            </div>

                        </>
                    )
                }
            </Container>
            {/*<Container>*/}
            {/*  <Typography variant={"h3"} sx={{ textAlign: "center", m: 5 }}>*/}
            {/*    {questions.questionSetName}*/}
            {/*  </Typography>*/}
            {/*  {questions.questionSet.map((question, index) => (*/}
            {/*    <div key={index}>*/}
            {/*      {question.passages.map((passage, index) => (*/}
            {/*        <Typography key={index} variant={"h5"}>*/}
            {/*          {passage.passage}*/}
            {/*        </Typography>*/}
            {/*      ))}*/}
            {/*      <Typography variant={"h5"}>*/}
            {/*        {index + 1}. {question.questionText}*/}
            {/*      </Typography>*/}
            {/*      {question.options.map((option, j) => (*/}
            {/*        <OptionDiv key={j}>*/}
            {/*          {question.questionType !== "file" &&*/}
            {/*            question.questionType !== "text" && (*/}
            {/*              <input type={question.questionType} disabled />*/}
            {/*            )}*/}
            {/*          <p>{option.option}</p>*/}
            {/*        </OptionDiv>*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*  ))}*/}
            {/*</Container>*/}
        </Div>
    );
};

export default PreviewQues;
