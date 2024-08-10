import React, { useEffect, useState } from 'react'
import './CountriesPage.css'
import axios from 'axios'
import CountriesCards from './CountriesCards/CountriesCards'
import { useNavigate } from 'react-router-dom'

function CountriesPage() {
  const [cData,setCData]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    axios.get('https://restcountries.com/v3.1/all').then((res)=>{
      setCData(res.data) 
    })
    .catch((err)=>{
      navigate('/Notfound')
    })
  }
  return (
    <div className='CountriesBox my-2' style={{backgroundColor: 'rgb(116, 219, 253)'}}>
       { cData.map((country,index)=><CountriesCards country={country} key={index} />)}
    </div>
  )
}

export default CountriesPage