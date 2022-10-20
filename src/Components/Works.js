import React from 'react'
import { codeProject, graphicsProject } from '../pages/Data'
import './Work.css';
import { IoCalendarSharp } from "react-icons/io5";
// import Pulse from 'react-reveal/Pulse';
// import Fade from 'react-reveal/Fade';

const Works = () => {
  return (
    <div className='work'>
      <div className='work-title'>
        {/* <Pulse> */}
          <h3>My Projects.</h3>
        {/* </Pulse> */}
      </div>

      <div className='project-name'>
        <h5>Graphics Projects</h5>
      </div>

      <div className='graphic-project'>
        {graphicsProject.map((work)=>{
            const{id, image, name, time} = work;
            return(
                <div className='work-map-project' key={id}>
                  {/* <Fade right> */}
                    <div className='image-div'>
                        <a href={image} target='_blank' ><img src={image} alt={name} className='image' title='Click Me' /></a>
                    </div>
                    <div className='work-name-time'>
                        <h4>{name}</h4>
                        <small><span><IoCalendarSharp/></span>{time}</small>
                    </div>
                  {/* </Fade> */}
                </div>
            );
        })}
      </div>

      <div className='project-name'>
        <h5>Web Development Projects</h5>
      </div>

        <div className='graphic-project' >
            {codeProject.map((work)=>{
                const {id, image, name, desc}= work;
                return(
                    <div  className='work-map-project' key={id}>
                      {/* <Fade right> */}
                        <div className='image-div'>
                            <a href={image} target='_blank' ><img src={image} alt={name} className='image' title='Click Me' /></a>
                        </div>
                        <div className='work-name-time'>
                            <h4>{name}</h4>
                            <small>{desc}</small>
                        </div>
                      {/* </Fade> */}
                    </div>
                );
            })}
        </div>

        <div className='warning'>
            <small>Please note that project list above isn't exhaustive, as some projects have been omitted for purpose of keeping the list short and focused.</small>
        </div>

    </div>
  )
}

export default Works
