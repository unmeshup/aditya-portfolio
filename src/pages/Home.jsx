import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Aditya</h2>
        <div className="prompt">
          <p>A Data Analyst with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/adityakanoje"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:adityakanoje01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
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
