import React from 'react'
import Header from '../../components/header/header'
import Footer from "../../components/Footer/Footer"
import PeoplesAbout from '../../components/Page_one/PeoplesAbout/PeoplesAbout'

import style from "./Abouts.module.css"
import What from '../../components/PageAbout/Whatt/What'
import Productive from '../../components/PageAbout/Productive/Productive'

const Abouts = () => {
  return (
    <div className={style.divAll}>
      <Header />
      <What />
      <PeoplesAbout />
      <Productive />
      <Footer />
    </div>
  )
}

export default Abouts