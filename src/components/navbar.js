import React from 'react'
import axios from 'axios'

export default class Navbar extends React.Component {
  state = {cityName: ''}

  handleSubmit = event => {
    event.preventDefault()
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
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="enter city name"
          value={this.state.cityName}
          onChange={event => this.setState({cityName: event.target.value})}
        />
        <button onClick={this.handleSubmit}>go to city</button>
      </form>
    )
  }
}
