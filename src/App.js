import React, { useState, useEffect } from 'react';
import './App.css';

 function App() {
  const [Users, fetchUsers] = useState([])
  const getData = () => {
    fetch('https://api.spacexdata.com/v4/launchpads')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h2>React Fetch API Example</h2>
      <ul>
        {Users.map((item, i) => {
          return <div>
          <img src={item.images.large} className="image" alt="my image"/>
          <h3 key={i}>{item.name}</h3>
          <h4>{item.details}</h4>
          <a href="https://api.spacexdata.com/v4/launchpads/{item.launches}">launches1</a>
          <a href="https://api.spacexdata.com/v4/launchpads/{item.launches}">launches2</a>
          <a href="https://api.spacexdata.com/v4/launchpads/{item.launches[0]}">launches3</a>
          </div>
        })}
      </ul>
    </>
  )
}

export default App;