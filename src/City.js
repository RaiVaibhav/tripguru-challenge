import React from 'react'


export default class City extends React.Component {

  render() {
    return (
      <h1>Hello {this.props.match.params.city}</h1>
    )
  }
}
