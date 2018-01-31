import React, { Component } from 'react';
// import { } from '../../services/PostData'
import {Redirect} from 'react-router-dom'

import './Login.css'
class Login extends Component {

  constructor(props){
    super(props)
    this.state ={
      username:'',
      password:'',
      redirect:false
    }
    this.login = this.login.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  login(){
     // these is sample data in the other hand you have to use authen from api backend
      const fn ={
        userData:{
          username:"admin",
          password:"1234",
          email:"anelhaman@hotmail"
        }}
      const rt ={
        userData:{
          username:"rachen",
          token:"34n3rlkjn34krm34kmrkljoksrnt34564564kl34lk534lk",
          email:"anelhaman@hotmail",
          fullname:"rachen pengsang"
        }}
      const err = {
        error:{
          code:"login failed" 
        }}

      if(this.state.username && this.state.password){  // ทำ validate 
        if(this.state.username === fn.userData.username && this.state.password === fn.userData.password){ // call api then replace here
          try {
            localStorage.setItem("userData",rt)
          this.setState({redirect:true})  
          } catch (error) {
            
          }
          
        }else{
          console.log(err)
        }
      }
      
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})
    // console.log(this.state)
  }

  render() {

    if(this.state.redirect){
      return(<Redirect to={'/home'} />)
    }
    try {
      if(localStorage.getItem("userData")){
        return(<Redirect to={'/home'} />)
      }  
    } catch (error) {
      
    }
    

    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column bodyPart ">
          <h2>Login Page</h2>
          <label>Username</label>
          <input type="text"name="username" placeholder="username" onChange={this.onChange} />
          <label>Password</label>
          <input type="password" name="password" placeholder="password" onChange={this.onChange} />
          <input type="submit" value="Login" className="button" onClick={this.login} />
          <a href="/signup">Register</a>
        </div>
      </div>
          
    );
  }
}

export default Login
