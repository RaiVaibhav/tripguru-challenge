import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import City from './City'
import Activity from './Activity'
import {Navbar} from './components'
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
        <div>
          <Navbar {...childrenProps} />
          <Route
            path="/city/:city"
            render={props => <City {...props} {...childrenProps} />}
          />
          <Route
            path="/activity/<activity>"
            render={props => <Activity {...props} {...childrenProps} />}
          />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
