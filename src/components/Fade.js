import React from 'react'


export default class Fade extends React.Component {
  state = {
    opacity: 0,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacity: 1,
      })
    })
  }

  render() {
    const containerStyle = {
      opacity: this.state.opacity,
      transition: `opacity 500ms ease-in`,
    }
    return (
      <div style={containerStyle}>
        {this.props.children}
      </div>
    )
  }
}
