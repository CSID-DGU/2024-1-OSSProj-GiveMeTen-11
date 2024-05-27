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
  width: 1753px;
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
`;

const Heading = styled.h1`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -1.5px;
  white-space: nowrap;
  color: black;
  position: relative;
  bottom: 190px;
  left: 60px;
  font-family: 'Poppins', sans-serif;
`;

const FormGroup = styled.div`
  position: relative;
  margin-top: 10px;
`;

const Label = styled.label`
  position: relative;
  display: block;
  margin-bottom: 5px;
  top: 90px;
  right: 320px;
`;

const Input = styled.input`
  position: relative;
  width: 410px;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #f1f3f6;
  top: 100px;
  right: 320px;
`;

const Rectangle1 = styled.div`
  position: relative;
  background-color: #fd7401;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 5px;
  top: 50px;
  left: 40px;
`;

const Rectangle2 = styled.div`
  position: relative;
  background-color: #fd7401;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 5px;
  top: 45px;
  left: 40px;
`;

const Button = styled.button`
  position: relative;
  height: 50px;
  margin: 30px;
  top: 50px;
  right: 350px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${props => props.signup ? 'white' : '#fd7401'};
  color: ${props => props.signup ? '#fd7401' : 'white'};
  border: ${props => props.signup ? '1px solid #fd7401' : 'none'};
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  padding: 10px;
`;

const Horizon = styled.hr`
  position: relative;
  border: none;
  border-top: 2px solid #ccc;
  width: 170px;
  right: ${props => props.second ? '200px' : '440px'};
  top: ${props => props.second ? '20px' : '66px'};
`;

const SubHeading = styled.h2`
  font-size: 14px;
  white-space: nowrap;
  color: #ccc;
  position: relative;
  top: 42px;
  right: 120px;
`;

const Image = styled.img`
  position: relative;
  width: ${props => props.base ? '1273px' : props.bell ? '58px' : props.dnow ? '265px' : props.logo ? '200px' : '24px'};
  height: ${props => props.base ? '1000px' : props.bell ? '58px' : props.dnow ? '81px' : props.logo ? '69px' : '24px'};
  right: ${props => props.base ? '270px' : props.bell ? '1970px' : props.dnow ? '1960px' : props.logo ? '840px' : props.faceid ? '2174px' : '2151px'};
  bottom: ${props => props.bell ? '260px' : props.dnow ? '260px' : props.logo ? '450px' : props.faceid ? '82px' : 'auto'};
  top: ${props => props.lock ? '40px' : 'auto'};
`;

function Login() {
  return (
    <Container>
      <Heading>로그인 후, 동국대 알리미 서비스를 받으세요!</Heading>
      <form action="#" method="post">
        <FormGroup>
          <Label htmlFor="username">ID</Label>
          <Input type="text" id="username" name="username" placeholder="Enter your ID" required />
        </FormGroup>
        <Rectangle1 />
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" placeholder="Enter your password" required />
          <Rectangle2 />
        </FormGroup>
        <Button type="submit">Login</Button>
        <Horizon />
        <SubHeading>or</SubHeading>
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