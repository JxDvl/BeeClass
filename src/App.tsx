import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LevelTest from './components/LevelTest';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App font-inter bg-white">
      <Header />
      <main>
        <Hero />
        <LevelTest />
      </main>
      <Footer />
    </div>
  );
}

export default App;
