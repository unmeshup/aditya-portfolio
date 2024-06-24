import React from "react";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Aditya</h2>
        <div className="prompt">
          <p>A Data Analyst with a passion for learning and creating.</p>
         
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Data Analysis</h2>
            <span>
              Proficient in analyzing large datasets, conducting statistical
              analysis and deriving actionable insight.
            </span>
          </li>
          <li className="item">
            <h2>Data Visualization</h2>
            <span>
              Experience in creating interactive dashboard using tools like
              Power BI and Tableau.
            </span>
          </li>
          <li className="item">
            <h2>Programming Languages & Tools.</h2>
            <span>Python, SQL, MS Excel, Power BI, Tableau.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
