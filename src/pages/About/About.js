import React from 'react';
import './About.scss';
import primarySchool from '../../images/primarySchool.jpg';
import highSchool from '../../images/highSchool.jpg';
import faculty from '../../images/faculty.jpg';
function About() {
  return (
     

    <div className='about'>
      <h1>About me</h1>
    <div className='primary-school'>
       <h2>Shkolla fillore:"Halil Alidema"</h2>
       <h2>Vitet e shkollimit:2003-2012</h2>
       <img src={primarySchool} className='primary' />
    </div>

    <div className='high-school'> 
    <h2>Shkolla mesme:"Kongresi Manastirit:</h2>
      <h2>Vitet e shkollimit:2012-2015</h2>
      <img src={highSchool} className='high' />  
    </div>
    <div className='faculty'>
    <h2>Fakulteti:UBT</h2>
     <h2>Vitet e shkollimit:2015-2018</h2>
     <img src={faculty} className='image' />
    </div>
     
    </div>
       
  
     
  )
}

export default About