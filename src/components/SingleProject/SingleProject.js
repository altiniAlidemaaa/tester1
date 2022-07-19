import React, { useState } from 'react'
import './SingleProjects.scss';
import up from '../../images/up.jpg';
import down from '../../images/down.jpg';
function SingleProject(props) {
    const[showDetails,setShowDetails] = useState(false);


  return (
    <div className='single-project'>
      <div className='single-project-data' onClick={(e) => {
        setShowDetails(!showDetails);
      }}>
          <h4>Emri:</h4>
          <span>{props.dat.name}</span>
          <img src={showDetails ? down : up} 
       className='image'
       />
      </div>
      
      {showDetails &&
      <div>
       <div className='single-project-data'>
          <h4>Skills:</h4>
          <span>{props.dat.skills}</span>
      </div>
        </div>
      }
       
    </div>
  )
}

export default SingleProject