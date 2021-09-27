import React, {useContext} from 'react';
import {styled} from "@mui/material/styles";
import {QuestionSets} from "../../App";
import {Typography} from "@mui/material";

const Div = styled('div')(({theme}) => ({
    marginLeft: 250,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        width: 'auto',
    },
}));

const Container = styled("div")(({theme}) => ({
    width: "50vw",
    margin: "10px auto",
    backgroundColor: "#fdfdfd",
    padding: 20,
}));

const OptionDiv = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    '& input': {
        marginRight: 10
    }
}))


const PreviewQues = () => {
    const [questions] = useContext(QuestionSets);
    console.log(questions)
    return (
        <Div>
            <Container>
                <Typography variant={"h3"} sx={{textAlign:'center', m:5}}>{questions.questionSetName}</Typography>
                {questions.questionSet.map((question, index) =>
                    <div key={index}>
                        {question.passages.map((passage, index) => <Typography key={index} variant={"h5"}>{passage.passage}</Typography>)}
                        <Typography variant={"h5"}>{index + 1}. {question.questionText}</Typography>
                        {question.options.map((option, j) => <OptionDiv key={j}>
                            {(question.questionType !== 'file' && question.questionType !== 'text') &&
                            <input type={question.questionType} disabled/>}
                            <p>{option.option}</p>
                        </OptionDiv>)}
                    </div>
                )}
            </Container>
        </Div>
    );
};

export default PreviewQues;
