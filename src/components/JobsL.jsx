import React from 'react'
import { useState, useEffect } from 'react';
import JobL from './JobL'


import Spinner from './Spinner';


function JobListings({isHome = false}) {

    const [jobs,setJobs] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
      const fetchJobs = async () =>{
        const apiUrl = isHome? '/api/jobs?_limit=3' : '/api/jobs'
        try{
          
          const response = await fetch(apiUrl);
          const data = await response.json();
         
            setJobs(data);
         
          
         
          
        }
        catch{
            console.log('Error Fetching data', error )
        }
        finally{
          setLoading(false)
        }
        
      }
        fetchJobs()
    
    }, [])

    //const jobListings = isHome? jobs.slice(0,3) : jobs ;
  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
       { isHome? 'Recent Jobs' : 'Browse Jobs'}
      </h2>
     
        { loading? (<>
        <Spinner loading={loading}></Spinner>
        </>) : ( <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            jobs.map(job => {
                return (
                  <JobL key={job.id} job={job}></JobL>
                    
                )
            })
        }
        </div>
        )}
 

        
  
       
      
    </div>
  </section>
  )
}

export default JobListings
