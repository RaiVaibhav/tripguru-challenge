import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import City from './City'
import Activity from './Activity'
import './styles/index.css'

const App = props => (
  <BrowserRouter>
    <Switch>
      <Route path='/city/:city' render={
        props => <City {...props} />
      }/>
      <Route path='/activity/<activity>' render={
        props => <Activity {...props} />
      }/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));

