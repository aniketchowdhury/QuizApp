import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, MenuItem, Select, Typography } from "@material-ui/core";
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
}));
function App() {
  const classes= useStyles();
  const [choice, setChoice] = useState('');
  const [questions, setQuestions] = useState(null);
  useEffect(()=>{
    console.log("choice==",choice);
    async function fetchRequest(){
      const questionSet = await getQuestions(choice);
      if(questionSet)
      setQuestions(questionSet.results);
    }
    !_.isEmpty(choice) && fetchRequest();
  }, [choice]); 

  function handleChange(event){
    setChoice(event.target.value);
  }
  const gobacktoHome=()=>{
    setChoice('');
    setQuestions(null);
  }
  return (
    <div className="App">
      <header className="App-header">
        {!questions && (
          <div>
        <Typography variant="h4">Please select difficulty level</Typography>
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
        questions && <Quiz questions={questions} gobacktoHome={gobacktoHome} />
      }
    </div>
  );
}

export default App;
