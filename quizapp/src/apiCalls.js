import _ from "underscore";

export const getQuestions=async(choice)=>{
    const API = `https://opentdb.com/api.php?amount=10&category=18&difficulty=`+choice+`&type=boolean`;
    const requestOptions={
        method: "GET"
    }
    const results = await fetch(API,requestOptions);
    if(results.ok){
        return results.json().then(res=>{
            if(_.isEqual(res.response_code,0)) return res;
        })
    }

}
