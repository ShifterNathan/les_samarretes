import React from 'react'
import HeaderComponent from '../components/header/Header.tsx'
import logo from '../logo.jpg'
import { LogoLink } from '../components/header/const/const.ts';
//eslint-disable-line
import { css } from "styled-components/macro";

const roundedHeaderButton = false

const logoLink = (
  <LogoLink href="/">
    <img src={logo} alt="logo" />
    Les Samarretes
  </LogoLink>
);

const links = [
  {
    content: "About",
    type: "Nav",
    href: "/about",
    classname: "",
  },
  {
    content: "About",
    type: "Nav",
    href: "/about",
    classname: "",
  },
  {
    content: "About",
    type: "Nav",
    href: "/about",
    classname: "",
  },
  {
    content: "About",
    type: "Nav",
    href: "/about",
    classname: "",
  },
  {
    content: "Login",
    type: "Nav",
    href: "/login",
    classname: "lg:ml-12!",
  },
  {
    content: "Sign Up",
    type: "Primary",
    href: "/signup",
    classname: "",
  },
]

const LandingPage = () => {
  return (
    <>
        <HeaderComponent logoLink={logoLink} links={links} roundedHeaderButton={roundedHeaderButton}/>
    </>
  )
}

export default LandingPage