import React from 'react'
import ReactDom from "react-dom";
import "./index.css"
import App from "./App";



// have to have this to render
ReactDom.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById("root")
)





{/*
FINAL HTML

<div className="container">
      <h1>Experience</h1>

      <div className="btn-container">
        <button className="btn btn-selected">name 1</button>
        <button className="btn">name 2</button>
        <button className="btn">name 3</button>
      </div>

      <ul className="info-items">
        <li className="info-item no-display">
          <header className="info__header">
            <h2 className="heading">Full Stack Web Developer</h2>
            <h3 className="name">name 1</h3>
            <h4 className="date">December 2015 - Present</h4>
          </header>
          <ul className="info__roles">
            <li className="role">asdasd ipsum, dolor sit amet consectetur adipisicing elit. Natus, neque necessitatibus. Qui sit, illum dicta non magnam odit consectetur recusandae maiores quas optio alias harum.</li>
            <li className="role">46hasd ipsum, dolor sit amet consectetur adipisicing elit. Natus, neque necessitatibus. Qui sit, illum dicta non magnam odit consectetur recusandae maiores quas optio alias harum.</li>
            <li className="role">Xorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, neque necessitatibus. Qui sit, illum dicta non magnam odit consectetur recusandae maiores quas optio alias harum.</li>
          </ul>
        </li>
      </ul>
    </div>

*/}