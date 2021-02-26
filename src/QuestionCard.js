import React, { useState} from 'react';
import './App.css';

const QuestionCard = React.memo(({options,questionData,updateCorrect,questionNo,choice,handleNext}) => {
    const [answer, setAnswer] = useState(" ");
    const [answerStatus, setStatus] = useState(false);
    const checkanswer = () => {
        if (answer === questionData.name){
            updateCorrect();
        }
    }
    const optionButtons=document.querySelectorAll(".btn");
    const handleStatus=(answer)=>{
        optionButtons.forEach(button=>{
            button.classList.remove("btn-hove");
            button.disabled=true;
        });
        let selectedButton=document.querySelector(".display");
        if(answer===questionData.name){
            selectedButton.classList.add("correct");
            selectedButton.classList.remove("btn");
        }else{
            selectedButton.classList.add("incorrect");
            selectedButton.classList.remove("btn");
        }   
    }
    const newQuestion = () => {
        handleNext();
        checkanswer();
        setStatus(false);
        optionButtons.forEach(button=>{
            button.classList.add("btn-hove");
        });
    }
    return (
        <div className="QuestionCard">
            <h1>Country Quiz</h1>
            <div>
                {(choice===1)
                    ? (
                        <p><img className="flag-img" src={questionData.flag} alt="flag" /> <br/>is flag of which Country?</p>
                    )
                    : (
                        <p>{questionData.capital} is capital of which Country?</p>
                    )
                    }
                {options.map(val => {
                    return (
                        <div key={val}>
                            <button className="btn btn-hove" onClick={(e) => {
                                setAnswer(val);
                                setStatus(true);
                                e.target.classList.add("display");
                            }}>{val}</button>
                        </div>
                    )
                })}
            </div>
            {
                answerStatus
                    ? (<div>
                        {handleStatus(answer)}
                        <button className={questionNo<10 ?'btn2':'btn btn-hove'} onClick={newQuestion}>{questionNo<10?<span>Next</span>:<span>Check Result</span>}</button>
                    </div>)
                    : " "
            }
        </div>
    );
});

export default QuestionCard;