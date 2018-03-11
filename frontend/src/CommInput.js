import React from 'react';
import axios from 'axios';

const formStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "10",
  backgroundColor: "lightblue",
  borderRadius: "15px",
  maxWidth: "800"
}

const submitButtonStyle = {
  width: "100",
}

const inputStyle = {padding: "4"}
const inputBoxStyle = {borderRadius: "5px"}

const url = 'http://localhost:3001/contacts/logComm'


class CommInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comEvent: {}
    }
  }  

  handleChange = (event) => {
    console.log(event)
    console.log(event.target)
    this.state.comEvent[event.target.name] = event.target.value;
    this.setState({comEvent: this.state.comEvent});
  }


  uploadForm = (data, cb) => {                                        
    return axios({                                                                
      method: 'post',                                                      
      url: url,
      headers: {'Content-Type': 'application/json'},                       
      data: JSON.stringify(data)                                    
    }).then(cb);                                                                    
  }  


  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("THIS IS WHERE I AM")
    this.uploadForm({comEvent: this.state.comEvent, contactInfo: this.props.contactInfo}, this.props.callback)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <div style={inputStyle}>
          <label> Date: </label> 
          <input name="date"
            type="date" 
            value={this.state.comEvent['date']} 
            onChange={this.handleChange} 
            style={inputBoxStyle}/>
        </div>
        
        <input style={submitButtonStyle} type="submit" value="Submit" />
      </form>
    );
  }
}

export default CommInput;
