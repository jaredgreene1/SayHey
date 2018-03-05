import React from 'react';

const dummyImage = 'https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/d/domestic-dog/domestic-dog.adapt.885.1.jpg'


const hover = {
  width: "100%",
  padding: "20px",
  boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, .2)'
}


const image = {
  height: "82px",
  width: 'auto',
    
}


const name = {
  color: "#333",
}

const outerDiv = {
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  width: 'auto',
  paddingRight: '15px',
}

const title = {
  width: 'width',
  textDecoration: 'none',
  fontSize: 'small',
}


class ArticleDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: dummyImage};
  };


  componentWillMount(){
    console.log("GOT SOME PROPS!");
    console.log(this.props);
    if(this.props.article['media_content'] !== undefined)
      this.setState({image: this.props.article['media_content'][0]['url']});
    this.setState({link: this.props.article['link'], title: this.props.article['title']});
  }


  render() {
    return (
      <div style={outerDiv}>
        <img 
          src= {this.state.image} 
          style={image} 
        />         
        <a href={this.state.link} style={title}> {this.state.title} </a>
     </div>
    );
  }
}

export default ArticleDisplay;
