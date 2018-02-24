import React from 'react';
import ArticleDisplay from './ArticleDisplay' 

const articleDiv = {
  width: "auto",
  padding: "20px",
  boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, .2)',
  height: "auto",
  display: 'flex',
  flexDirection: 'row',
  marginTop: '-5',
}


const name = {
  color: "#333",
}

const outerDiv = {
  display: 'flex',
  flexDirection: 'column',
  height: "auto",
  width: "auto",
  marginBottom: '35px',
}


class RipeContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };



  render() {
    return (
      <div style={outerDiv}>
          <p style={name}> {this.props.name} </p>
        <div className="articles-container" style={articleDiv}>
          <ArticleDisplay />
          <ArticleDisplay />
          <ArticleDisplay />
        </div>
     </div>
    );
  }
}

export default RipeContactCard;
