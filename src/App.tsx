import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import One from './components/One'; 
import Two from './components/Two'; 
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Top from './components/Top';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="top-banner">
        <Top />
      </div>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/one' component={One} />
          <Route path='/two' component={Two} />
          <Route path='/three' component={Three} />
          <Route path='/four' component={Four} />
          <Route path='/five' component={Five} />
          <Route path='/six' component={Six} />
        </Switch>
      </div>
    </Router>
  );
}

const home = () => (
  <div>
    <h1>Please Choose A Report To Generate From the Menu Above</h1>
  </div>
)
  
export default App;
