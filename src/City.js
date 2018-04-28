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

  render() {
    return (
      <div>
        <h1>Hello {this.props.cityName}</h1>
        <div>
          {this.props.cityBlob &&
            this.props.cityBlob.data.map(activity => (
              <div>
                <img
                  src={`https://res.cloudinary.com/thetripguru/image/upload/h_160,q_90,w_500/${
                    activity.attributes.media.banners[0].src
                  }.jpg`}
                />
                <p>{activity.attributes.title}</p>
              </div>
            ))}
        </div>
      </div>
    )
  }
}
