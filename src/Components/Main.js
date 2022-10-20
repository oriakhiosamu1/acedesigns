import React from 'react'
import './Main.css';
// import Pulse from 'react-reveal/Pulse';




const Main = () => {
  return (
    <div className='main'>
      <div className='row main-flex'>

        <div className='col-lg-6 col-md-6 col-sm-12'>
          {/* <Pulse> */}
            <div>
              <h1>GRAPHICS DESIGNER</h1>
              <h1>WEB DEVELOPER</h1>
            </div>
          {/* </Pulse> */}
          <div>
            <p>Hi, am Oriakhi Osamudiamen, I Specialise in creating functional and responsive websites and also on creative and unique graphical works.</p>
          </div>

        </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
            <img src='/images/profile_pic_2.png' alt='' className='img' width='50%'/>
        </div>

      </div>
    </div>
  )
}

export default Main
