import React from 'react'
import { FaHtml5, FaCss3, FaJsSquare, FaPhp, FaReact, FaLaravel, FaGithub, FaBootstrap} from "react-icons/fa";
import { DiPhotoshop, DiMysql } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import './Skills.css';
// import Slide from 'react-reveal/Slide';

const Skills = () => {
  return (
    <div className='skills'>
     {/* <Slide right> */}
      <div className='skills-heading'>
        <h3>My Skills</h3>
        <p>These are the main tools and technologies I currently work with.</p>
      </div>

      <div className='row'>

        <div className='col-lg-3 col-md-4 col-sm-6'>
            <FaHtml5 className='icon' />
            <h5>HTML5</h5>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <FaCss3 className='icon' />
            <h5>CSS3</h5>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <FaJsSquare className='icon' />
            <h5>JAVASCRIPT</h5>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <FaReact className='icon' />
            <h5>REACT</h5>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <FaPhp className='icon' />
            <h5>PHP</h5>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <FaLaravel className='icon' />
            <h5>LARAVEL</h5>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <FaGithub className='icon' />
            <h5>GITHUB</h5>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <FaBootstrap className='icon' />
            <h5>BOOTSTRAP</h5>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <DiPhotoshop className='icon' />
            <h5>PHOTOSHOP</h5>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <DiMysql className='icon' />
            <h5>MYSQL</h5>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <SiRedux className='icon' />
            <h5>REDUX</h5>
        </div>
        

        
      </div>
    {/* </Slide> */}

    </div>
  )
}

export default Skills
