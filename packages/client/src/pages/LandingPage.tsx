import React from 'react'
import HeaderComponent from '../components/header/Header.tsx'
//eslint-disable-line
import { css } from "styled-components/macro";
import { HeaderNavLinksLanding, HeaderLogo } from '../common/const.ts'

const LandingPage = () => {
  return (
    <>
        <HeaderComponent links={HeaderNavLinksLanding} logo={HeaderLogo} logoContent={"Les Samarretes"}/>
    </>
  )
}

export default LandingPage