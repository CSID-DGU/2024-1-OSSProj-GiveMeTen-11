import React from 'react';
import styled from 'styled-components';
import base from '../images/LoginRegister/base.png';
import bell from '../images/LoginRegister/bell.png';
import check from '../images/LoginRegister/check.png';
import dnow from '../images/LoginRegister/dnow.png';
import face_id from '../images/LoginRegister/face-id.png';
import lock from '../images/LoginRegister/lock.png';
import logo from '../images/LoginRegister/logo.png';
import telephone from '../images/LoginRegister/telephone.png';

const Container = styled.div`
  position: relative;
  width: 1402px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #FFFFFF;
  margin: auto;
  transform: scale(0.88);
  transform-origin: top left;
`;

const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  color: black;
  position: relative;
  bottom: 256px;
  left: 70px;
`;

const Form = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  position: relative;
  margin-top: -10px;
`;

const LabelID = styled.label`
  position: relative;
  top: 52px;
  right: 385px;
  display: block;
  margin-bottom: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #555555;
`;

const LabelPassword = styled.label`
  position: relative;
  top: 52px;
  right: 360px;
  display: block;
  margin-bottom: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #555555;
`;

const LabelConfirmPassword = styled.label`
  position: relative;
  top: 52px;
  right: 330px;
  display: block;
  margin-bottom: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #555555;
`;

const LabelPhoneNumber = styled.label`
  position: relative;
  top: 52px;
  right: 338px;
  display: block;
  margin-bottom: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #555555;
`;

const Input = styled.input`
  position: relative;
  width: 328px;
  height: 40px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #F1F3F6;;
  top: 55px;
  right: 230px;
`;

const Rectangle = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 4px;
  top: 15px;
  left: 58px;
  background-color: #FD7401;
`;

const SignupButton = styled.button`
  position: relative;
  height: 40px;
  margin: 8px;
  top: 38px;
  right: 237px;
  font-size: 13px;
  font-weight: 600;
  width: 100%;
  padding: 8px;
  background-color: #FD7401;
  color: white;
  border: 1px solid #FD7401;
  border-radius: 4px;
  cursor: pointer;
`;

const Horizon = styled.hr`
  position: relative;
  border: none;
  border-top: 1px solid #ccc;
  width: 136px;
  right: ${props => props.second ? '133px' : '323px'};
  top: ${props => props.second ? '14px' : '48px'};
`;

const Text = styled.h2`
  font-size: 11px;
  white-space: nowrap;
  color: #ccc;
  position: relative;
  top: 30px;
  right: 228px;
`;

const LoginButton = styled.button`
  position: relative;
  height: 40px;
  top: 35px;
  right: 228px;
  font-size: 13px;
  font-weight: 600;
  width: 100%;
  padding: 8px;
  background-color: white;
  color: #FD7401;
  border: 1px solid #FD7401;
  border-radius: 4px;
  cursor: pointer;
`;

const Image = styled.img`
  position: relative;
  width: ${props => props.base ? '1018px' :props.bell ? '46px' :props.dnow ? '220px' :props.logo ? '160px' :'19px'};
  height: ${props => props.base ? '800px' :props.bell ? '46px' :props.dnow ? '67px' :props.logo ? '55px' :'19px'};
  right: ${props => 
    props.base ? '190.5px' : 
    props.bell ? '1544px' : 
    props.dnow ? '1536px' : 
    props.logo ? '614.5px' : 
    props.face_id ? '1702px' : 
    props.lock ? '1720px' : 
    props.check ? '1738px' : 
    props.telephone ? '1758px' : 
    'auto'};
  bottom: ${props => 
    props.bell || props.dnow ? '304px' : 
    props.logo ? '360px' : 
    props.lock ? '78px' :
    props.face_id ? '173px' : 
    'auto'};
  top: ${props => 
    props.check ? '17px' : 
    props.telephone ? '112px' : 
    'auto'};
`;

function Register() {
  return (
    <Container>
      <Title>회원이 되어 필요한 알림을 받으세요</Title>
      <Form action="#" method="post">
        <FormGroup>
          <LabelID htmlFor="username" className="label-id">ID</LabelID>
          <Input type="text" id="username" name="username" placeholder="  Enter your ID" required />
          <Rectangle className="rectangle1" />
        </FormGroup>
        <FormGroup>
          <LabelPassword htmlFor="password" className="label-password">Password</LabelPassword>
          <Input type="password" id="password" name="password" placeholder="  Enter your password" required />
          <Rectangle className="rectangle2" />
        </FormGroup>
        <FormGroup>
          <LabelConfirmPassword htmlFor="confirmpassword" className="label-confirmpassword">Confirm Password</LabelConfirmPassword>
          <Input type="password" id="confirmpassword" name="confirmpassword" placeholder="  Confirm your password" required />
          <Rectangle className="rectangle3" />
        </FormGroup>
        <FormGroup>
          <LabelPhoneNumber htmlFor="phonenumber" className="label-phonenumber">Phone Number</LabelPhoneNumber>
          <Input type="tel" id="phonenumber" name="phonenumber" placeholder="  Enter your phone number" required />
          <Rectangle className="rectangle4" />
        </FormGroup>
        <SignupButton type="submit">Signup</SignupButton>
        <Horizon  />
        <Text>or</Text>
        <Horizon second />
        <LoginButton type="submit">Login Now</LoginButton>
      </Form>
      <Image src={base} alt="Base Image" base />
      <Image src={bell} alt="Bell Image" bell />
      <Image src={dnow} alt="Dnow Image"dnow />
      <Image src={logo} alt="Logo Image" logo />
      <Image src={face_id} alt="Face-id Image" face_id />
      <Image src={lock} alt="Lock Image" lock />
      <Image src={check} alt="Check Image" check />
      <Image src={telephone} alt="Telephone Image" telephone />
    </Container>
  );
}

export default Register;
