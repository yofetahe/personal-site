import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import './components/index_page.css';

import Home from './components/index';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Blogs from './components/Blogs';
import PageNotFound from './components/PageNotFound';

import Footer from './components/Footer';
import Menu from './components/Index_menu';


function App() {
  return (
    <BrowserRouter>
      <div className="Container">      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Technologies" component={Technologies} />
          <Route exact path="/ContactMe" component={ContactMe} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Blogs" component={Blogs} />
          <Route component={PageNotFound} />
        </Switch>      
      </div>
      <div className="Footer">
        <Footer />
      </div>
      <div className="MenuContent">
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
