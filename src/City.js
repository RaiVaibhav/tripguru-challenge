import React from 'react'
import axios from 'axios'

export default class City extends React.Component {
  fetchCityBlob = async () => {
    const cityName = this.props.match.params.city
    const locationUrl = `http://tour.api.thetripguru.com/tours?filter[location.url]=${cityName}&limit=15&offset=1`
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
      <div>
        <h1>Hello {this.props.cityName}</h1>
        <p>
          {this.props.cityBlob && JSON.stringify(this.props.cityBlob.data[0].id)}
        </p>
        <div>
          {this.props.cityBlob &&
            this.props.cityBlob.data.map((activity, index) => (
              <ActivityCard
                imgSrc={activity.attributes.media.banners[0].src}
                index={index}
                title={activity.attributes.title}
                onClick={event => this.handleActivityClick(event, activity.id)}
              />
            ))}
        </div>
      </div>
    )
  }
}

const ActivityCard = props => {
  const {imgSrc, index, title, ...otherProps} = props
  return (
    <div {...otherProps}>
      <img
        src={`https://res.cloudinary.com/thetripguru/image/upload/h_160,q_90,w_500/${imgSrc}.jpg`}
      />
      <p>
        {index}: {title}
      </p>
    </div>
  )
}
