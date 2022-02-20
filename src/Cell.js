import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    };
  }

  handleClick = () => {
    this.setState({
      color: this.props.selectedColor,
    });
  };

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )
  
  render() {
    return (
      <div
        onClick={callback}
        key={idx}
        className="color-swatch"
        style={{ backgroundColor: str }}
      />
    );
  }
  
}