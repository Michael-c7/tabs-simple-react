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
        {data.map((item, index) => {
          const {company, id} = item;

          if(currentTab === index) {
            <button key={id} className="btn btn-selected" onClick={() => setCurrentTab(index)}>{company}</button>
          }
          return(
            <button key={id} className="btn" onClick={() => setCurrentTab(index)}>{company}</button>
          )
        })}
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
