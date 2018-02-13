import React from 'react';


const button = {
  borderRadius: '10px',
  margin: '2',
  border: '0',
  padding: '7px',
  background: '#ebeeff'
}


class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button style={button} onClick={this.props.callback}> {this.props.text} </button>
    );
  }
}

export default Button;
