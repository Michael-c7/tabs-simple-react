import React, {useState, useEffect} from 'react'
import TabContent from "./TabContent"

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    const response = await fetch(url)
    const responseData = await response.json()
    setData(responseData)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])



  if(isLoading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Experience</h1>

      <div className="btn-container">
        <button className="btn btn-selected" onClick={() => setCurrentTab(0)}>name 0</button>
        <button className="btn" onClick={() => setCurrentTab(1)}>name 1</button>
        <button className="btn" onClick={() => setCurrentTab(2)}>name 2</button>
      </div>
      <ul className="info-items">
        {data.map((item, index) => {
          if(currentTab === index) {
            return <TabContent key={item.id} data={data} {...item}/>
          }
            return <div key={item.id}></div>

        })}
      </ul>
    </div>
  )
}

export default App
