import React from 'react'
import Banner from './Main Page/Banner'
import SectionOne from './Main Page/SectionOne'
import SectionTwo from './Main Page/SectionTwo'
import SectionThree from './Main Page/SectionThree'
import SectionFour from './Main Page/SectionFour'
import SectionFive from './Main Page/SectionFive'

const Landing = () => {
  return (
    <section id='Home Page'>
      <Banner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </section>
  )
}

export default Landing;
