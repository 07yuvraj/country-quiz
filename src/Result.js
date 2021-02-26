import React from 'react';
import './App.css';
import victoryImage from './undraw_winners_ao2o 2.svg'

export default function Result({correctAns,setCorrect,setQuestion_no}){
    const handleStart=()=>{
        setCorrect(0);
        setQuestion_no(1);
    }
    return (
        <div className="result">
            <img src={victoryImage} alt="winners"/>
            <h1>Your Score: {correctAns}</h1>
            <button className="btn btn-hove" onClick={handleStart}>Restart Test</button>
        </div>
    );
}