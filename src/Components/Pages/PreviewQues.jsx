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

const OptionDiv  = styled('div')(({theme})=>({
    display:'flex',
    alignItems:'center',
    '& input':{
        marginRight:10
    }
}))


const PreviewQues = () => {
    const [questions] = useContext(QuestionSets);
    console.log(questions)
    return (
        <Div>
            <Container>
                {questions.map((question, index) =>
                    <div key={index}>
                        <Typography variant={"h5"}>{index + 1}. {question.questionText}</Typography>
                        {question.options.map((option, j) => <OptionDiv key={j}>
                            <input type={question.questionType}/>
                            <p>{option.optionText}</p>
                        </OptionDiv>)}
                    </div>
                )}
            </Container>
        </Div>
    );
};

export default PreviewQues;
