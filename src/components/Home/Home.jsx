import React from 'react'
import './Home.css'
import htmlIcon from '../../assets/html.svg'
import cssIcon from '../../assets/css.svg'
import jsIcon from '../../assets/js.svg'
import reactIcon from '../../assets/react.svg'
import nodeIcon from '../../assets/node.svg'
import expressIcon from '../../assets/express.svg'
import mongoIcon from '../../assets/mongo.svg'
import arrowIcon from '../../assets/arrow.svg'

function Home() {
  return (
    <div className='d-flex flex-column mt-5'>
      <div className='home'>
        <h3>Roadmap to become</h3>
        <h1 className='bg-dark text-white'>MERN stack developer</h1>
      </div>
      <div className='lang-container mt-5'>
        <div className='first-div'>
          <div>
            <img src={htmlIcon} width='80px' />
            <img src={cssIcon} width='80px' />
            <img src={jsIcon} width='80px' />
          </div>
          <p className='d-flex justify-content-center'>HTML,CS & JS</p>
        </div>

        <div><img src={arrowIcon} width='80px'/></div>

        <div>
          <img src={reactIcon} width='80px'/>
          <p className='d-flex justify-content-center'>React</p>
        </div>

        <div><img src={arrowIcon} width='80px'/></div>

        <div>
          <img src={nodeIcon} width='80px'/>
          <p className='d-flex justify-content-center'>Node</p>
        </div>

        <div><img src={arrowIcon} width='80px'/></div>

        <div>
          <img src={expressIcon} width='80px'/>
          <p className='d-flex justify-content-center'>Express</p>
        </div>

        <div><img src={arrowIcon} width='80px'/></div>

        <div>
          <img src={mongoIcon} width='80px'/>
          <p className='d-flex justify-content-center'>MongoDB</p>
        </div>

        <div><img src={arrowIcon} width='80px'/></div>

        <div style={{width: '100px'}}><h5>connecting & Deploying on GIT</h5></div>
      </div>
    </div>
  )
}

export default Home