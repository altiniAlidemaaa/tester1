import React from 'react';
import './Home.scss';

export default function Home() {
  return (
    <div className='home'>
      <div className='about-me'>
        <h2>Hi,my name is Altin Alidema!</h2>
      </div>
      <div className='pershkrim'>
          <h2>I am Front-End Developer</h2>
      </div>
      <h3>My skills:</h3>
      <div className='skills'>
         
       <ul className='list'>
         <li>
          <h3>Front-End:</h3>
          <span>
            ReactJS,HTML,CSS,SCSS
          </span>
         </li>
       </ul>
      </div>
      <div className='skills'>
       <ul className='list'>
         <li>
          <h3>Programming languages:</h3>
          <span>
            Java,Javascript
          </span>
         </li>
       </ul>
      </div>
    </div>
  )
}
