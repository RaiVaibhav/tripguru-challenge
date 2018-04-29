import React from 'react'
import axios from 'axios'
import { Grid, Column } from 'react-foundation'
import {ActivityExpanded} from './components'

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
      <Grid>
        <Column small={2} />
        <Column small={8}>
          <ActivityExpanded
            imgSrc={this.state.activityBlob.data.attributes.media.banners[0].src}
            title={this.state.activityBlob.data.attributes.title}
            description={this.state.activityBlob.data.attributes.description}
          />
        </Column>
        <Column small={2} />
      </Grid>
    )
  }
}

