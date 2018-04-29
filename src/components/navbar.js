import React from 'react'
import axios from 'axios'
import { Grid, Row, Column, Button, Colors } from 'react-foundation'

export default class Navbar extends React.Component {
  state = {cityName: ''}

  handleSubmit = event => {
    event.preventDefault()
    const cityName = this.state.cityName.replace(' ', '-')
    const locationUrl = `http://tour.api.thetripguru.com/tours?filter[location.url]=${cityName}&limit=15&offset=1`
    axios.get(locationUrl).then(response => {
      const responseData = response.data
      if (response.status === 200) {
        this.props.setData({
          cityName: cityName,
          cityBlob: responseData,
        })
          this.props.history.push(`/city/${this.state.cityName.replace(' ', '-')}`)
      } else {
        console.log('probably city name is not valid')
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid className="navbar">
          <Column small={3} />
          <Column small={4}>
              <input
                type="text"
                placeholder="enter city name"
                value={this.state.cityName}
                onChange={event => this.setState({cityName: event.target.value})}
              />
          </Column>
          <Column small={2}>
              <Button 
                onClick={this.handleSubmit}
                color={Colors.INFO}
              >
                  go to city
              </Button>
          </Column>
          <Column small={3} />
        </Grid>
      </form>
    )
  }
}
