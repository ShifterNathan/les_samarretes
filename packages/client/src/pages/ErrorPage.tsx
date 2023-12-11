import React from 'react';
import { Button, Container, ContentContainer, Description, Heading, Text } from '../components/error/const/const';
import HeaderComponent from '../components/header/Header';
import { HeaderNavLinks, HeaderLogo } from '../common/const';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      <HeaderComponent links={HeaderNavLinks} logo={HeaderLogo} logoContent={"Les Samarretes"}/>
      <Container>
      <ContentContainer>
        <Heading>404</Heading>
        <Text>Oops! Page not found.</Text>
        <Description>We can't seem to find the page you're looking for.</Description>
        <Button onClick={handleGoHome}>Go Home</Button>
      </ContentContainer>
    </Container>
    </>
  );
};



export default ErrorPage;
