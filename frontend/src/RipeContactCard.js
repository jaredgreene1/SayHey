import React from 'react';
import axios from 'axios';

import ArticleDisplay from './ArticleDisplay' 
import CommInput from './CommInput'
import { Button } from './Buttons'

const ArticleServiceURL = 'http://localhost:3002/articles_for_contacts';   
  

const articleDiv = {
  width: "auto",
  padding: "20px",
  boxShadow: 'rgb(30, 30, 30, 0.32) -1px -2px 6px -2px',
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
  marginBottom: '15px',
  borderBottom: '0.2px solid rgba(165, 192, 236, 0.54)',
}

const contactInfoDiv = {
  display: 'flex',
  flexDirection: 'row',
  height: "auto",
  width: "auto",
  alignItems: 'center',
}
  
const badgeDiv = {
    display: 'flex',
    height: '40px',
    width: '40px',
    justifyContent: 'center',
    background: '#e0e0e069',
    borderRadius: '100%',
    marginRight: '20px',
}

const badgeText = {
  fontSize: '30',
  alignSelf: 'center',
  color: '#908e8e',
  font: 'icon',
  
}

const buttonDiv = {
  display: 'flex',
  alignItems: 'center',
  minWidth: '300px',
  justifyContent: 'space-between'
}

const contactDiv = {
  display: 'flex',
  justifyContent: 'space-between',
}

const articleButton = {
  marginLeft: '75%',
}


export default class RipeContactCard extends React.Component {
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

  toggleArticles = () => this.setState(prevState => ({
    showArticles: !prevState.showArticles,
    logComm: false
  }));

  toggleComm = () => this.setState(prevState => ({
    logComm: !prevState.logComm,
    showArticles: false
  }));


  render() {
    return (
      <div name='outerDiv' style={outerDiv}>
        <div name='contactDiv' style={contactDiv}>
          <div name='contactInfoDiv' style={contactInfoDiv}>
            <ContactBadge fName={this.props.contactInfo['firstName']} />
            <p style={name}> {this.props.contactInfo['firstName']} {this.props.contactInfo['lastName']} </p>
          </div>
          <div style={buttonDiv}>

            <Button style={articleButton} callback={this.toggleArticles}
              text={"Content for " + this.props.contactInfo['firstName']}
            />

            <Button style={articleButton} callback={this.toggleComm}
              text={"Spoke to " + this.props.contactInfo['firstName'] + '?'}
            />

          </div>
        </div>
      { this.state.showArticles ? 
        <div className="articles-container" style={articleDiv}>
          {this.state.articles.map(article => {
            return <ArticleDisplay article={article} />;})	
          }
        </div> : null
      }

      { this.state.logComm ? <CommInput contactInfo={this.props.contactInfo} /> : null }

     </div>
    );
  }
}


class ContactBadge extends React.Component {
  constructor(props) {
    super(props);
  }
  
  

  render() {
    return ( 
      <div style={badgeDiv}>
        <p style={badgeText}> {this.props.fName[0]} </p>
      </div>
    )
  }
}
