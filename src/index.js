import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import City from './City'
import Activity from './Activity'
import './styles/index.css'

class App extends React.Component {
  state = {}

  setData = data => this.setState({...data})

  render() {
    const childrenProps = {
      setData: this.setData,
      ...this.state,
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/city/:city"
            render={props => <City {...props} {...childrenProps} />}
          />
          <Route
            path="/activity/<activity>"
            render={props => <Activity {...props} {...childrenProps} />}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
