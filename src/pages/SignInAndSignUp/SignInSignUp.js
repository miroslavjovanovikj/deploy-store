import React from 'react';
import '../../styles/SignInSignUp/SignInSignUp.css';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import {Container,Row,Col} from 'react-bootstrap';
const SignInSignUp = () =>{
  return(
    <div className="SignInSignUp">
      <Container>
        <Row>
          <Col md={6} lg={6} sm={12} xs={12}>
              <SignUp/>
          </Col>
          <Col md={6} sm={12} lg={6} xs={12}>
            <SignIn />
          </Col>

        </Row>
      </Container>
    </div>
  )
}
export default SignInSignUp;
