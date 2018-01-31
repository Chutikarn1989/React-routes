import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'; 

import './Home.css'
class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      redirect:false
    }
    this.logout = this.logout.bind(this)
  }

  componentWillMount(){
    try {
      if(localStorage.getItem("userData")){
        console.log("yeah")
      }
      else{
        this.setState({redirect: true})
      }
      
    } catch (error) {
      
    }
    
  }

  logout(){
    localStorage.setItem("userData",'')
    localStorage.clear()
    this.setState({redirect: true})
  }

  render() {
    if(this.state.redirect){
      return(<Redirect to={'/login'} />)
    }
    return (  
        <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column bodyPart ">
          <h2>Home Page</h2>
          <button type="button" className="button" onClick={this.logout} >Logout </button>
        </div>
      </div>
    );
  }
}

export default Home
