import React from 'react'
import Header from '../components/header/Header.tsx'
import BackgroundAsImageWithCenteredContent from '../components/hero/BackgroundAsImageWithCenteredContent.tsx'
import FiveColumnWithInputForm from '../components/footer/FiveColumnWithInputFOrm.tsx'
import SimpleFiveColumn from '../components/footer/SimpleFiveColumn.tsx'

const HomePage = () => {
  return (
    <>
        <Header/>
        <BackgroundAsImageWithCenteredContent/>
        <SimpleFiveColumn/>
    </>
  )
}

export default HomePage