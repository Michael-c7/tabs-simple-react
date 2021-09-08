import React from 'react'

const TabContent = (props) => {
  const {company,data,dates,duties,id,order, title} = props;
  console.log(duties)
    return (
      <li className="info-item">
      <header className="info__header">
        <h2 className="heading">{title}</h2>
        <h3 className="name">{company}</h3>
        <h4 className="date">{dates}</h4>
      </header>
      <ul className="info__roles">
        {duties.map((duty, index) => {
         return (
            <li className="role" key={index}>{duty}</li>
            )
        })}
      </ul>
    </li>
    )
}

export default TabContent;

