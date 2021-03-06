import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/landing/landing';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';






function App() {

  return (
    <div>
      <BrowserRouter> 
        <Route exact path = "/" component = {Landing} />
        <Route path = "/resume" component = {Resume} />
        <Route path = "/projects" component = {Projects} />

      </BrowserRouter>
      


      

    </div>
  );
}

export default App;
