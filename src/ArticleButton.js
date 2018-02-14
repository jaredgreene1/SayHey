import React from 'react' ;
import Button from './Button.js';
import ContactInput from './ContactInput.js';
import axios from 'axios';

const buttonText = "find an article!";

const divStyle = {
  display: 'inline-block'
}

const articles = {
  margin: '5px'


}

const ArticleServiceURL = 'http://localhost:8080/articles_for_contacts';


class ArticleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {articles: []};
  };

  findArticle = () => {
    axios({
      method: 'post',
      url: ArticleServiceURL,
      data: JSON.stringify(this.props.contactInfo)
    }).then(response => {
        console.log("RESPONSE")
        console.log(response);
        console.log(response.data[0]);
        this.setState({articles: response.data});
    })
  }

  render() {
    return(
        <div style={divStyle}>
          <Button callback={this.findArticle} text={buttonText}/> 
          {this.state.articles.map(function(article){
              return <a style={articles} href={article.link}> {article.title} </a>;})
          } 
       </div>
     );
  }
}

export default ArticleButton;
