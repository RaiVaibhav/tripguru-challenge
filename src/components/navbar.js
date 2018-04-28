import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Navbar extends React.Component {
  state = {cityName: ''}

  handleSubmit = event => {
    const cityName = this.state.cityName.replace(' ', '-')
    console.log('requesting the location', cityName)
    const locationUrl = `http://tour.api.thetripguru.com/tours?filter[location.url]=${cityName}&limit=15&offset=1`
    axios.get(locationUrl).then(response => {
      const responseData = response.data
      if (response.status === 200) {
        this.props.setData({
          cityName: cityName,
          cityBlob: responseData,
        })
      } else {
        console.log('probably city name is not valid')
      }
    })
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="enter city name"
          value={this.state.cityName}
          onChange={event => this.setState({cityName: event.target.value})}
        />
        <button onClick={this.handleSubmit}>
          <Link to={`/city/${this.state.cityName.replace(' ', '-')}`}>
            go to city
          </Link>
        </button>
      </form>
    )
  }
}
