import React, { Fragment } from 'react';
// import Header from '../components/Header';
import SkillBar from './SkillBar';
import { skills_data } from '../assets/data/skills_data';
import GitHubIcon from '@mui/icons-material/GitHub';
import './About.css';

const About = () => {
  return (
    <Fragment>
      <div className="main">
        {/* <div className="main-header">
          <Header />
        </div> */}
        <div className="about-container">
          <div className='about-me'>
            <div className="about-title">
              <h1>Takuya Yokota</h1>
              <p>Full Stack Developer</p>
            </div>
            <h2>About Me</h2>
            <p>My name is Takuya. I'm a web developer. I love learning and using new technologies to make people's lives
              easier by solving problems that they face. I mainly use React, Express and SQL or NoSQL database.</p>
            <div className="about-github">
              <a href="https://www.github.com/takyokota" target='_blank'>
                <GitHubIcon style={{ fontSize: '3.5rem' }} />
              </a>
            </div>
          </div>
          <div className='about-skills'>
            <h2>Skills</h2>
            <ul>
              {skills_data.map((data, index) => (
                <li key={index} style={{ listStyleType: 'none' }}>
                  <SkillBar skill={data.skill} level={data.level} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;