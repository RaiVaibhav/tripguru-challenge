import React from 'react'
import axios from 'axios'
import { Grid, Column } from 'react-foundation'
import {ActivityExpanded, Fade} from './components'

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
          <Fade>
            <ActivityExpanded
              imgSrc={this.state.activityBlob.data.attributes.media.banner.url}
              title={this.state.activityBlob.data.attributes.title}
              description={this.state.activityBlob.data.attributes.description}
            />
          </Fade>
        </Column>
        <Column small={2} />
      </Grid>
    )
  }
}

