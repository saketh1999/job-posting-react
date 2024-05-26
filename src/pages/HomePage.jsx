import React from 'react'

import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobsL from '../components/JobsL'
import ViewAllJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <div>
    <Hero title = " Become a React Dev " subtitle = " Find React Jobs " ></Hero>
    <HomeCards></HomeCards>
    <JobsL isHome={true}></JobsL>
    <ViewAllJobs></ViewAllJobs>
    {/* <script src="js/main.js"></script> */}
    </div>
  )
}

export default HomePage
