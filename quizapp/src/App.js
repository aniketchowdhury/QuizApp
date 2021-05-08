import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, MenuItem, Select, Typography } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';
import { useEffect, useState } from 'react';
import Quiz from './Quiz';
import { getQuestions } from './apiCalls';
import _ from 'underscore';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 520,
    top:"50px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  errorText:{
    marginTop: "60px",
    color: "#EB0909"
  }
}));
function App() {
  const classes= useStyles();
  const [choice, setChoice] = useState('');
  const [responseCode, setResponseCode] = useState(null);
  const [questions, setQuestions] = useState(null);
  useEffect(()=>{
    console.log("choice==",choice);
    async function fetchRequest(){
      const questionSet = await getQuestions(choice);
      if(questionSet)
      {
        setQuestions(questionSet.results);
        setResponseCode(questionSet.response_code)
      }
    }
    !_.isEmpty(choice) && fetchRequest();
  }, [choice]); 

  function handleChange(event){
    setChoice(event.target.value);
  }
  const gobacktoHome=()=>{
    setChoice('');
    setQuestions(null);
    setResponseCode(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3" style={{margin:"50px"}}>Quiz-Application</Typography>
        {(_.isNull(questions)||_.isUndefined(questions) || _.isEqual(responseCode,1))&&(
          <div>
        <Typography variant="h4">To start quiz lease select difficulty level</Typography>
        <FormControl className={classes.formControl}>
          <Select
            value={choice}
            onChange={handleChange}
          >
            <MenuItem value={'easy'}>Easy</MenuItem>
            <MenuItem value={'medium'}>Medium</MenuItem>
            <MenuItem value={'hard'}>Difficult</MenuItem>
          </Select>
        </FormControl></div>
        )}
      </header>
      {
        _.isEqual(responseCode,0) &&<Quiz questions={questions} gobacktoHome={gobacktoHome} />
      }
        { _.isEqual(responseCode,1) &&<div className={classes.errorText}>
          <WarningIcon style={{verticalAlign: "sub"}} />
          Oops!! Seems there was a problem in loading the questions. Please try again
          </div>
      }
    </div>
  );
}

export default App;
