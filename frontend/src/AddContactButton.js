import React from 'react' ;
import Button from './Button.js';
import ContactInput from './ContactInput.js';
import axios from 'axios';

const buttonText = "find an article!";
const ArticleServiceURL = 'http://localhost:8080/articles_for_contacts';


const divStyle = {
  display: 'inline-block'
}


const articles = {
  margin: '15px',
  textDecoration: 'none'
}


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
        this.setState({articles: response.data});
    })
  }


  render() {
    return(
        <div style={divStyle}>
          <Button callback={this.findArticle} text={buttonText}/> 
          <table>
            <tbody>
              {this.state.articles.map(function(article){
                  return <tr><td><a style={articles} href={article.link}> - {article.title} </a></td></tr>;})
                } 
            </tbody>
          </table>
       </div>
     );
  }
}

export default ArticleButton;
