import React from 'react'
import  PackmanLoader  from 'react-spinners/PacmanLoader'

const override = {
    display : 'block',
    margin : '100px auto'
}

function Spinner({loading}) {
  return (
    <PackmanLoader
        color = '#4338ca'
        loading = {loading}
        cssOverride = {override}
        size = {40}
    >
            
    </PackmanLoader>
  )
}

export default Spinner
