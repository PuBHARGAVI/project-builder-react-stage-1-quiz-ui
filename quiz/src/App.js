import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import { Component } from 'react';
function App() {
  return (
    <div className="App">
      <ResultComponent/>
    </div>
  );
}

export default App;
