import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import One from './components/One'; 
import Two from './components/Two'; 
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/difference-of-perspective' component={One} />
          <Route path='/operations' component={Two} />
          <Route path='/data-content-owner' component={Three} />
          <Route path='/node' component={Four} />
          <Route path='/concepts-and-qualifiers' component={Five} />
          <Route path='/statistics' component={Six} />
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
