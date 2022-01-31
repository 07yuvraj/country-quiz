import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionCard from './QuestionCard';
import Result from './Result';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function App() {
  const [next, setNext] = useState(false);
  const [questionData, setData] = useState([]);
  const [options, setOption] = useState([]);
  const [questionNo, setQuestion_no] = useState(1);
  const [correctAns, setCorrect] = useState(0);
  const [choice, setChoice] = useState(1);
  useEffect(() => {
    let val, rand;
    axios.get("https://restcountries.com/v2/all")
      .then(res => {
        val = res.data;
        rand = Math.floor(Math.random() * 250 + 1);
        setData(val[rand]);
        let newOption = [];
        newOption.push(val[rand].name);
        while (newOption.length < 4) {
          let x = Math.floor(Math.random() * 250 + 1);
          if (newOption.indexOf(val[x].name) === -1)
            newOption.push(val[x].name);
        }
        setOption(shuffle(newOption));
        let randomChoice = Math.floor(Math.random() * 2 + 1);
        setChoice(randomChoice);
      })
  }, [next, questionNo]);
  const handleNext = () => {
    setNext(!next);
    setQuestion_no(questionNo + 1);
  }
  const updateCorrect = () => {
    setCorrect(correctAns + 1);
  }
  return (
    <div className="App">
      {questionNo < 11
        ? (
          <QuestionCard
            options={options}
            questionData={questionData}
            updateCorrect={updateCorrect}
            handleNext={handleNext}
            choice={choice}
            questionNo={questionNo}
          />)
        : (
          <Result
            correctAns={correctAns}
            setQuestion_no={setQuestion_no}
            setCorrect={setCorrect}
          />)
      }
      <footer>
        <h2>With ❤️ : Yuvi</h2>
      </footer>
    </div>
  );
}

export default App;
