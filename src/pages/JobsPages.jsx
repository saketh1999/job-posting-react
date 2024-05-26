import React from 'react'
import JobListings from '../components/JobsL'
const JobsPages = () => {
  return (
    <section className='bg-blue-50 px4 py-6'>
         <JobListings isHome={false}></JobListings>
    </section>
   
  )
}

export default JobsPages
