import React from 'react'
import Header from '../components/header/Header.tsx'
//eslint-disable-line
import { css } from "styled-components/macro";
import { HeaderNavLinksLanding, HeaderLogo } from '../common/const.ts'

const LandingPage = () => {
  return (
    <>
        <Header links={HeaderNavLinksLanding} logo={HeaderLogo} logoContent={"Les Samarretes"}/>
    </>
  )
}

export default LandingPage