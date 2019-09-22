import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/header';
import Landing from './components/landing/landing';
import Contact from './components/contact/contact';
import About from './components/aboutme';
import Projects from './components/projects/projects';
import Resume from './components/resume';






function App() {

  return (
    <div>
      <BrowserRouter> 
        <Header />
        <Route exact path = "/" component = {Landing} />
        <Route path = "/about" component = {About} />
        <Route path = "/contact" component = {Contact} />
        <Route path = "/projects" component = {Projects} />
        <Route path = "/resume" component = {Resume} />

      </BrowserRouter>
      


      

    </div>
  );
}

export default App;
