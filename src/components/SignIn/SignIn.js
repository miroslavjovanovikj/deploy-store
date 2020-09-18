import React,{Component} from 'react';
import '../../styles/sign-in/SignIn.css'
import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {signInWithGoogle} from '../../firebase/firebase-utils';
import {Container,Row,Col} from 'react-bootstrap';
class SignIn extends Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:''
    }
    this.handleSubmit= this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    this.setState({email:'',password:''})
  }
  handleChange(e){
    const {value,name} = e.target;
    this.setState({[name]:value})
  }
  render(){
    return(
      <div className="SignIn">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="email"
              handleChange={this.handleChange}
              value={this.state.email}
            />
            <FormInput
              type="password"
              name="password"
              label="password"
              handleChange={this.handleChange}
              value={this.state.password}
            />
          <div className="buttons">
            <Col md={6} sm={6} lg={6}>  <CustomButton type="submit" >Sign In</CustomButton></Col>
            <Col md={6} sm={6} lg={6}><CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton></Col>


          </div>
        </form>
      </div>
    )
  }
}
export default SignIn;
