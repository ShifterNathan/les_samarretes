import React from 'react'
import HeaderComponent, { LogoLink } from '../components/header/Header.tsx'
import logo from '../logo.jpg'

const logoLink = (
  <LogoLink href="/">
    <img src={logo} alt="logo" />
    Les Samarretes
  </LogoLink>
);


const LandingPage = () => {
  return (
    <>
        <HeaderComponent logoLink={logoLink} />
    </>
  )
}

export default LandingPage