import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {

  const categories = ['projects', 'photography'];
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Header>
      <main>
        <Portfolio currentCategory={currentCategory}></Portfolio>
        <About></About>
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
