import React from 'react' ;
import Button from './Button.js';
import ContactInput from './ContactInput.js';

const buttonText = "find an article!";

const divStyle = {
  display: 'inline-block'
}



class ArticleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  findArticle = () => {
    //Use callback to RSS service to find an article
    this.setState({articles: ["Sample article 1", "sample article 2"]});
  }

  render() {
    return(
			<div style={divStyle}>
				<Button callback={this.findArticle} text={buttonText}/> 
				{this.state.articles ?
					<div>                                                          
            <p> {this.state.articles[0]} </p>
					</div> : null                                                  
				} 
			</div>
    );
  }
}

export default ArticleButton;
