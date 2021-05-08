import {React, useEffect, useState} from "react";
import { Button, makeStyles, Paper, Snackbar, Typography } from "@material-ui/core";
import _ from "underscore";
import Result from "./Result";

const useStyles = makeStyles({
  root: {
    minWidth: "40%",
  },
  paperCss: {
    width: "60%",
    height: "300px"
  },
  questionContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  buttonContainer:{
    display:"flex",
    padding:"10px 10px"
  },
  button:{
    marginLeft:"auto"
  },
  questionCard:{
    padding:"20px",
    margin:"25px 0px",
    height: "100px"
  },
  timerStyle: {
    fontFamily:"Roboto-Mono, monospace"
  },
  colorCorrectAnswer:{
    backgroundColor: "#92F7BA",
    padding: "15px",
    borderRadius: "7px",
    color: "#474747"
  },
  colorWrongAnswer: {
    backgroundColor: "#FF7A7A",
    padding: "15px",
    borderRadius: "7px",
    color: "#474747"
  }
})

function Quiz(props){
  const classes = useStyles();
const {questions, gobacktoHome}=props;
const [counter, setCounter] = useState(0);
const [correct, setCorrect] = useState(0);
const [seconds, setSeconds] = useState(10);
const [answerText, setAnswerText] = useState('');
const [completedQuiz, setCompletedQuiz] = useState(false);
const vertical='bottom';const horizontal='center';
  useEffect(() => {
    if(counter<11 && _.isEmpty(answerText))  {
    const interval = setInterval(() => {
      setSeconds(second => (second === 1 ? 10 : second - 1));
    }, 1000);

    return () => clearInterval(interval);
    }
    
  }, [counter,questions,answerText]);

  useEffect(()=>{
    if(_.isEqual(seconds,10)) 
    setCounter(counter=>counter+1);
  },[seconds]);

  useEffect(()=>{
    if(counter===11)
    {
      setCounter(0);
      setCompletedQuiz(true);
    }
  },[counter, gobacktoHome]);

  const handleClick=(value)=>{
    if(_.isEqual(value,questions[counter-1].correct_answer))
    {
      setCorrect(correct=>correct+1);
      setAnswerText('Correct');
    }
    if(!_.isEqual(value,questions[counter-1].correct_answer)) setAnswerText('Wrong');
    setTimeout(()=>{
    setSeconds(10);
    setAnswerText('');
    },3000);
  }

  const goBack=()=>{
    setCompletedQuiz(false);
    gobacktoHome();
  }

    return(
        <div>
            {!completedQuiz &&( 
            <div className={classes.questionContainer}>
              <Paper elevation={5} className={classes.paperCss}>
                <div className={classes.buttonContainer}>
            <Typography variant="h6" className={classes.timerStyle}>Timer: {seconds}</Typography>
            <Typography variant="h6" className={`${classes.button} ${classes.timerStyle}`}>Question no:: {counter}</Typography>
            </div>
            {questions[counter-1] && (
              <div className={classes.questionCard}>
            <Typography variant="h5">{questions[counter-1].question}</Typography>
            </div>
            )}
            <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary" onClick={()=>handleClick('True')} disabled={!_.isEmpty(answerText)}>TRUE</Button>
            <Button className={classes.button} variant="contained" color="primary" onClick={()=>handleClick('False')} disabled={!_.isEmpty(answerText)}>FALSE</Button>
            </div>
            </Paper>
            {answerText && 
            <Snackbar 
              autoHideDuration={3000}
              open={!_.isEmpty(answerText)}
              anchorOrigin={{vertical, horizontal}}>
              <div className={_.isEqual(answerText,'Correct')?
                classes.colorCorrectAnswer:
                classes.colorWrongAnswer}>
                  <Typography variant="h6" className={classes.timerStyle}>{_.isEqual(answerText,'Correct')?answerText:`${answerText}----Correct Answer:${questions[counter-1].correct_answer}`}</Typography></div>
              </Snackbar>}
            </div>
            )}
            {completedQuiz && <Result count={correct} getbackToQuiz={goBack}/>}
        </div>
    )
}
export default Quiz;
