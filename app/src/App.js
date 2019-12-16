import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    axios.get('https://jacob-webapi-challenge.herokuapp.com/projects')
      .then(res => {
        setProjects(res.data.projects)
      })
      .catch(error => {
        console.log('error',error)
      })
  }, [])
  console.log(projects)
  return (
    <div>
     {
       projects.map(project => (
         <h1>{project.id}</h1>
       ))
     } 
    </div>
  );
}

export default App;
