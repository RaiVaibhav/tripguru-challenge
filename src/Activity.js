import React from 'react'
import axios from 'axios'

export default class Activity extends React.Component {
  state = {}

  componentDidMount() {
    const activityId = this.props.match.params.activity
    const activityUrl = `http://tour.api.thetripguru.com/tours/${activityId}`
    axios.get(activityUrl).then(response => {
      this.setState({
        activityBlob: response.data,
      })
    })
  }

  render() {
    if (!this.state.activityBlob) return <div />
    return (
      <div>
        <ActivityExpanded
          imgSrc={this.state.activityBlob.data.attributes.media.banners[0].src}
          title={this.state.activityBlob.data.attributes.title}
          description={this.state.activityBlob.data.attributes.description}
        />
      </div>
    )
  }
}

const ActivityExpanded = ({imgSrc, description, title}) => (
  <div>
    <img
      src={`https://res.cloudinary.com/thetripguru/image/upload/h_160,q_90,w_500/${imgSrc}.jpg`}
      alt="activity preview"
    />
    <p> {title} </p>
    <p> {description} </p>
  </div>
)
