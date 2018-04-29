import React from 'react'
import axios from 'axios'
import {cityList} from '../config'
import {Grid, Column, Button, Colors} from 'react-foundation'

export default class Navbar extends React.Component {
  state = {
    cityName: '',
    cityErrored: false,
  }

  handleSubmit = (event, city = null) => {
    event.preventDefault()
    if (this.state.cityErrored) this.setState({cityErrored: false})
    const cityName = city || this.state.cityName.replace(' ', '-')
    this.setState({cityName: cityName})
    const locationUrl = `http://tour.api.thetripguru.com/tours?filter[location.url]=${cityName}`
    axios.get(locationUrl).then(response => {
      const responseData = response.data
      if (response.status === 200) {
        this.props.setData({
          cityName: cityName,
          cityBlob: responseData,
        })
        this.props.history.push(
          `/city/${this.state.cityName.replace(' ', '-')}`,
        )
      } else {
        console.log('probably city name is not valid')
        this.setState({cityErrored: true})
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid className="navbar">
          <Column small={3} />
          <Column small={6}>
            {this.state.cityErrored ? (
              <span style={{color: 'red'}}>Unsupported city name!!</span>
            ) : (
              ''
            )}
          </Column>
          <Column small={3} />
          <Column small={3} />
          <Column small={4}>
            <input
              type="text"
              placeholder="enter city name"
              value={this.state.cityName}
              onChange={event =>
                this.setState({
                  cityName: event.target.value,
                  cityErrored: false,
                })
              }
            />
          </Column>
          <Column small={2}>
            <Button onClick={this.handleSubmit} color={Colors.PRIMARY}>
              go to city
            </Button>
          </Column>
          <Column small={3} />
          <Column small={2} />
          <Column small={8}>
            {cityList
              .sort()
              .map(city => (
                <Chip
                  name={city}
                  key={city}
                  onClick={event => this.handleSubmit(event, city)}
                />
              ))}
          </Column>
          <Column small={2} />
        </Grid>
      </form>
    )
  }
}

const Chip = ({name, onClick}) => (
  <span className="chip" onClick={onClick}>
    {name}
  </span>
)
