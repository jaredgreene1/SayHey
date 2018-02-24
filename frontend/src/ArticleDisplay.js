import React from 'react';

const dummyImage = 'https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/d/domestic-dog/domestic-dog.adapt.885.1.jpg'


const hover = {
  width: "100%",
  padding: "20px",
  boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, .2)'
}


const unhover = {
  width: "100%",
  padding: "20px",
  boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, .6)'
}

const image = {
  maxHeight: "164px",
  maxWidth: "164px",
  height: 'auto',
  width: 'auto',
    
}


const name = {
  color: "#333",
}

const outerDiv = {
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  paddingRight: '15px',
}


class ArticleDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovered: false, expanded: false};
  };

  onHover = () => this.setState({hovered: true});
  onUnhover = () => this.setState({hovered: false});
  getStyle = () => this.state.hovered ? hover: unhover;
 


  render() {
    return (
      <div style={outerDiv}>
        <img src={dummyImage} style={image} />         
        <p> dog dog dog </p>
     </div>
    );
  }
}

export default ArticleDisplay;
