import React, { useState } from 'react';
import Header from './Header';
import './App.css';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The only impossible journey is the one you never begin. - Tony Robbins"
];

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(randomIndex);
  };

  const incrementQuote = () => {
    setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
  };

  return (
    <div className="container">
      <Header />
      <main>
        <div className="quote-container" style={{ borderColor: colors[currentQuote] }}>
          <p>{quotes[currentQuote]}</p>
          <button onClick={getRandomQuote} style={{ backgroundColor: colors[currentQuote] }}>Random Quote</button>
          <button onClick={incrementQuote} style={{ backgroundColor: colors[currentQuote] }}>Next Quote</button>
        </div>
      </main>
    </div>
  );
}

export default App;