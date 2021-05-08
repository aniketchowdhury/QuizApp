import {React} from "react";
import {Card, CardContent, IconButton, makeStyles, Typography} from "@material-ui/core";
import Replay from "@material-ui/icons/Replay";

const useStyles= makeStyles({
    root:{
        width:"60%",
        padding:"30px",
        backgroundColor: "#DEDEDE"
    },
    resultContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    resultDiv: {
        marginBottom: "30px",
        fontFamily:"Roboto-Mono, monospace"
    },
    resetButton: {
        "&.MuiIconButton-root":{
            borderRadius: "unset"
        }
    }
})
function Result(props)
{
    const classes = useStyles();
    const {count,getbackToQuiz} = props;
    const handleClick=()=>{
        getbackToQuiz();
    }
    return(
        <div className={classes.resultContainer}>
            <Card className={classes.root}>
                <CardContent>
            <Typography variant="h5" className={classes.resultDiv}>Your Result-Correct Answers::{count}</Typography>
            <IconButton className={classes.resetButton} onClick={handleClick} color="primary">RESET<Replay /></IconButton>
                </CardContent>
            </Card>
        </div>
    )
}
export default Result;
