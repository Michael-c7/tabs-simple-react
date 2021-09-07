import React, {useState, useEffect} from 'react'
import TabContent from "./TabContent"

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [currentTab, setCurrentTab] = useState("");


  return (
    <div className="container">
      <h1>Experience</h1>

      <div className="btn-container">
        <button className="btn btn-selected">name 1</button>
        <button className="btn">name 2</button>
        <button className="btn">name 3</button>
      </div>

      
      <TabContent/>
    </div>
  )
}

export default App
