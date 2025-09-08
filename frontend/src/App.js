import React from 'react';

import {  FindUs, Footer, Gallery, Header, Intro,  SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <hr className="section-divider" />
    <Header />
    <hr className="section-divider" />

    <SpecialMenu />
 

    <Intro />
       <hr className="section-divider" />

    <Gallery />
         <hr className="section-divider" />
    <FindUs />
            <hr className="section-divider" />
     
    <Footer />  
  </div>
);

export default App;
