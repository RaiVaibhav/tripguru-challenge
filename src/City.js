import React from 'react'
import axios from 'axios'
import {Grid, Column} from 'react-foundation'
import {ActivityCard, Slide} from './components'

export default class City extends React.Component {
  fetchCityBlob = async () => {
    const cityName = this.props.match.params.city
    const locationUrl = `http://tour.api.thetripguru.com/tours?filter[location.url]=${cityName}`
    let response = await axios.get(locationUrl)
    if (response.status === 200) {
      this.props.setData({
        cityName: cityName,
        cityBlob: response.data,
      })
    } else {
      console.log('probably city name is not valid')
    }
  }

  componentDidMount() {
    this.fetchCityBlob()
  }

  handleActivityClick = (event, activityId) => {
    this.props.history.push(`/activity/${activityId}`)
  }

  render() {
    return (
      <Grid>
        <Column small={2} />
        <Column small={8}>
          <center>
            <h2>Activities in {this.props.cityName}</h2>
          </center>
          <Grid>
            {this.props.cityBlob &&
              this.props.cityBlob.data.map((activity, index) => (
                <Column small={6} key={index}>
                  <Slide>
                    <ActivityCard
                      imgSrc={activity.attributes.media.banner.url}
                      index={index + 1}
                      title={activity.attributes.title}
                      onClick={event =>
                        this.handleActivityClick(event, activity.id)
                      }
                    />
                  </Slide>
                </Column>
              ))}
          </Grid>
        </Column>
        <Column small={2} />
      </Grid>
    )
  }
}
