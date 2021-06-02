import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opacity = this.props.opacity;
    return (
      <div className="color-box" style={{opacity}}>
        {opacity >= .2 ? (<ColorBox opacity={opacity - .1} />) : null}
      </div>
    )
  }

}

