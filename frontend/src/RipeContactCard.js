import React from 'react';
import axios from 'axios';

import ArticleDisplay from './ArticleDisplay' 


const ArticleServiceURL = 'http://localhost:8080/articles_for_contacts';   
  

const articleDiv = {
  width: "auto",
  padding: "20px",
  boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, .2)',
  height: "auto",
  display: 'flex',
  flexDirection: 'row',
  marginTop: '-5',
  overflowX: 'scroll',
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
    this.state = {articles: []};
  };

  componentDidMount() {
    this.loadArticles()
  }

  loadArticles = () => {                                                    
    axios({                                                                
      method: 'post',                                                      
      url: ArticleServiceURL,                                              
      data: JSON.stringify(this.props.contactInfo)                         
    }).then(response => {                                                  
        this.setState({articles: response.data});                          
    })                                                                     
  }       



  render() {
    return (
      <div style={outerDiv}>
          <p style={name}> {this.props.contactInfo['name']} </p>
        <div className="articles-container" style={articleDiv}>
					{this.state.articles.map(article => {
						return <ArticleDisplay article={article} />;
						})	
					}
        </div>
     </div>
    );
  }
}

export default RipeContactCard;
