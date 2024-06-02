import React from 'react';
import styled from 'styled-components';
import baseImage from '../images/LoginRegister/base.png';
import bellImage from '../images/LoginRegister/bell.png';
import dnowImage from '../images/LoginRegister/dnow.png';
import logoImage from '../images/LoginRegister/logo.png';
import lockImage from '../images/LoginRegister/lock.png';
import faceIdImage from '../images/LoginRegister/face-id.png';

const Container = styled.div`
  position: relative;
  width: 1402px;
  display: flex;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
  transform: scale(0.88);
  transform-origin: top left;
`;

const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -1.5px;
  white-space: nowrap;
  color: black;
  position: relative;
  bottom: 152px;
  left: 48px;
`;

const FormGroup = styled.div`
  position: relative;
  margin-top: -10px;
  bottom: 20px;
`;

const LabelID = styled.label`
  position: relative;
  display: block;
  margin-bottom: 4px;
  top: 85px; 
  right: 410px; 
  font-size: 16px;
  color: #555555;
`;

const LabelPassword = styled.label`
  position: relative;
  display: block;
  margin-bottom: 4px;
  top: 85px; 
  right: 385px;
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
  top: 90px;
  right: 256px;
`;

const Rectangle1 = styled.div`
  position: relative;
  background-color: #fd7401;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 4px;
  top: 30px;
  left: 32px;
`;

const Rectangle2 = styled.div`
  position: relative;
  background-color: #fd7401;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 4px;
  top: 50px;
  left: 32px;
`;

const Button = styled.button`
  position: relative;
  height: 40px;
  margin: 8px;
  top: 74px;
  right: 264px;
  font-size: 13px;
  font-weight: 600;
  background-color: ${props => props.signup ? 'white' : '#fd7401'};
  color: ${props => props.signup ? '#fd7401' : 'white'};
  border: ${props => props.signup ? '1px solid #fd7401' : 'none'};
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  padding: 8px;
`;

const Horizon = styled.hr`
  position: relative;
  border: none;
  border-top: 1px solid #ccc;
  width: 136px;
  right: ${props => props.second ? '160px' : '352px'};
  top: ${props => props.second ? '54px' : '90px'};
`;

const Text = styled.h2`
  font-size: 11px;
  white-space: nowrap;
  color: #ccc;
  position: relative;
  top: 70px;
  right: 256px;
`;

const Image = styled.img`
  position: relative;
  width: ${props => props.base ? '1018px' : props.bell ? '46px' : props.dnow ? '220px' : props.logo ? '160px' : '19px'};
  height: ${props => props.base ? '800px' : props.bell ? '46px' : props.dnow ? '67px' : props.logo ? '55px' : '19px'};
  right: ${props => props.base ? '216px' : props.bell ? '1576px' : props.dnow ? '1568px' : props.logo ? '640px' : props.lock ? '1727px' : props.faceid ? '1745px' : '1721px'};
  bottom: ${props => props.bell ? '208px' : props.dnow ? '208px' : props.logo ? '360px' : props.faceid ? '70px' : 'auto'};
  top: ${props => props.lock ? '24px' : 'auto'};
`;

function Login() {
  return (
    <Container>
      <Heading>로그인 후, 동국대 알리미 서비스를 받으세요!</Heading>
      <form action="#" method="post">
        <FormGroup>
          <LabelID htmlFor="username">ID</LabelID>
          <Input type="text" id="username" name="username" placeholder="  Enter your ID" required />
        </FormGroup>
        <Rectangle1 />
        <FormGroup>
          <LabelPassword htmlFor="password">Password</LabelPassword>
          <Input type="password" id="password" name="password" placeholder="  Enter your password" required />
          <Rectangle2 />
        </FormGroup>
        <Button type="submit">Login</Button>
        <Horizon />
        <Text>or</Text>
        <Horizon second />
        <Button type="submit" signup>Signup Now</Button>
      </form>
      <Image src={baseImage} base alt="Base Image" />
      <Image src={bellImage} bell alt="Bell Image" />
      <Image src={dnowImage} dnow alt="Dnow Image" />
      <Image src={logoImage} logo alt="Logo Image" />
      <Image src={lockImage} lock alt="Lock Image" />
      <Image src={faceIdImage} faceid alt="Face-id Image" />
    </Container>
  );
}

export default Login;
