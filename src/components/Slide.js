import React from 'react'


export default class Fade extends React.Component {
  state = {
    left: -2000,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        left: 0
      })
    })
  }

  render() {
    const containerStyle = {
      left: `${this.state.left}px`,
      transition: `left ${Math.random()*2}s ease-in-out`,
      position: 'relative',
    }
    return (
      <div style={containerStyle}>
        {this.props.children}
      </div>
    )
  }
}
