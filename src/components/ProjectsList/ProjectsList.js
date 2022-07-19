import React, { useEffect, useState } from 'react';
import { data } from '../../mocks/dummyData';
import SingleProject from '../SingleProject/SingleProject';
import './ProjectsList.scss';
function ProjectsList() {
    const[projects,setProjects] = useState([]);

    useEffect(()=> {
        setProjects(data)
    },[projects]);
  return (
    <div>
        <ul>
            {projects.map(project => (
                <SingleProject dat = {project} />
            ))}
        </ul>
    </div>
  )
}

export default ProjectsList