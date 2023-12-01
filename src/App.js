import React from 'react';
import './App.css';

import { Article, Brand, CTA, Feature, Navbar } from './component';
import { Header, Possibility, Blog, Footer, WhatGPT3, Features } from './containers';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
