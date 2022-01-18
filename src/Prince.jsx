import React from 'react'
import {Doughnut } from 'react-chartjs-2'

const Prince = () => {
  
    const data = {
        labels : ["red","green","blue"],
        datasets :[{
            data: [5,10,15]
        }]
    }
     
    return (
        <>
     <Doughnut data={data} />

            
        </>
    )
}

export default Prince