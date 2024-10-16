import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PokeDex from './PokeDex';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PokeDex />
      </main>
      <Footer />
    </div>
  );
};

export default App;