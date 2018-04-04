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

const unhoverOuterDiv = {
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  width: 'auto',
  maxWidth: '500px',
  padding: '10px',
  margin: '5px',
  borderBottom: '0.2px solid rgba(165, 192, 236, 0.54)',
  boxShadow: '0 0 0 .5pt rgb(70, 130, 180)',
  borderRadius: '25px',
  justifyContent: 'center',
}


const hoverOuterDiv = {
  display: 'flex',
  flexDirection: 'column',
  height: "auto",
  width: "auto",
  maxWidth: '500px',
  padding: '10px',
  margin: '5px',
  borderBottom: '0.2px solid rgba(165, 192, 236, 0.54)',
  boxShadow: '.5px .5px 5px .5pt rgb(70, 130, 180)',
  borderRadius: '25px',
  justifyContent: 'center',
}


const contactInfoDiv = {
  display: 'flex',
  flexDirection: 'column',
  border: '10px',
  height: "auto",
  width: "auto",
  alignItems: 'center',
  cursor: 'pointer',
}
  
const badgeDiv = {
  display: 'flex',
  height: '100px',
  width: '100px',
  justifyContent: 'center',
  background: '#e0e0e069',
  borderRadius: '100%',
}

const badgeText = {
  fontSize: 80,
  alignSelf: 'center',
  color: '#908e8e',
  fontFamily: 'serif',
}

const buttonDiv = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const contactDiv = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const articleButton = {
  marginLeft: '75%',
}


export default class RipeContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      expanded: false
    };
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

  expandCard = () => this.setState(prevState => ({
    expanded: !prevState.expanded,
    showArticles: false,
    logComm: false
  }));

  onHover = () => this.setState({hovered: true});
  onUnhover = () => this.setState({hovered: false});
  onUnhover = () => this.setState({hovered: false});
  getStyle = () => this.state.hovered ? hoverOuterDiv : unhoverOuterDiv; 


  render() {
    return (
      <div name='outerDiv' onMouseOver={this.onHover} onMouseOut={this.onUnhover} style={this.getStyle()}>
        <div name='contactDiv' style={contactDiv}>
          <div name='contactInfoDiv' onClick={this.expandCard} style={contactInfoDiv}>
            <ContactBadge fName={this.props.contactInfo['firstName']} />
            <p style={name}> {this.props.contactInfo['firstName']} {this.props.contactInfo['lastName']} </p>
          </div>
            <div name='buttonDiv' style={buttonDiv} >
            { this.state.expanded && this.state.articles.length ?
              <Button style={articleButton} 
                callback={this.toggleArticles}
                text={"Articles for " + this.props.contactInfo['firstName']}
              /> : null 

            }
            { this.state.expanded ?
              <Button style={articleButton} 
                callback={this.toggleComm}
                text={"Spoke to " + this.props.contactInfo['firstName'] + '?'}
              /> : null 
            }
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
        <p style={badgeText}> {this.props.fName[0].toLowerCase()} </p>
      </div>
    )
  }
}
