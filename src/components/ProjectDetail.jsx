import React, { useContext } from 'react';
import './ProjectDetail.css';
import { ProjectContext } from '../context/ProjectContext';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectDetail = (props) => {
  const { project, opacity } = useContext(ProjectContext);
  const { data } = props;

  // To open a new link in new tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');

    if (newWindow) newWindow.opener = null;
  };

  return (
    <div key={project} className='detail-container' style={{ opacity: opacity }}>
      <div className='project-detail'>
        <h3>{data.title}</h3>
        <p className='project-info'>{data.description}</p>
        <div>
          <ul>
            {data.languages && data.languages.map((item, key) => (
              <li className='language-list' key={key}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="link-list">
          {data.website ? (
            <button className='home-button' onClick={() => openInNewTab(data.website)}>
              <div>
                <HomeIcon />
              </div>
              <span>Website</span>
            </button>
          ) : (
            <button className='home-button' onClick={() => openInNewTab(data.website)} disabled style={{ cursor: 'not-allowed' }}>
              <div>
                <HomeIcon />
              </div>
              <span>Website</span>
            </button>
          )}
          <button className='github-button' onClick={() => openInNewTab(data.github)}>
            <div>
              <GitHubIcon />
            </div>
            <span>Source Code</span>
          </button>
        </div>
      </div>
      <div className='project-gif'>
        <img src={data.gif} alt={data.title} />
        {/* <img src={`src/assets/img/${data.gif}`} alt={data.title} /> */}
      </div>
    </div>
  );
};

export default ProjectDetail;