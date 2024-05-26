import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import JobsPages from './pages/JobsPages'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
const App = () => {
  //Add new Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  //Delete Job
  const deleteJob = async (id) => 
    {
      const res = await fetch(`/api/jobs/${id}`,{
        method:'DELETE',
        
      });
      return;
    }


  //
  const updateJob = async (id)=>
    {
      const res = await fetch(`/api/jobs/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(job)
      });
      return;
    }
  const myrouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout></MainLayout>}>
        <Route index element = {<HomePage></HomePage>}></Route>
        <Route path='/jobs' element = {<JobsPages></JobsPages>}></Route>
        <Route path='/add-job' element = {<AddJobPage addJobSubmit={addJob}></AddJobPage>}></Route>
        <Route path='/edit-job/:id' element = {<EditJobPage updateJobSubmit = {updateJob} deleteJob={deleteJob}></EditJobPage>} loader={jobLoader} ></Route>
        <Route path='/jobs/:id' element = {<JobPage deleteJob={deleteJob}></JobPage>} loader={jobLoader} ></Route>
        <Route path='*' element = {<NotFoundPage></NotFoundPage>}></Route>
      </Route>
    )
  )
  
  return (
   <>
     <RouterProvider router={myrouter}></RouterProvider>
   </>
  )
}

export default App
