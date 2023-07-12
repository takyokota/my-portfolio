import React, { useContext } from 'react';
import { project_data } from '../assets/data/project_data';
import { ProjectContext } from '../context/ProjectContext';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProjectList.css';

const ProjectList = () => {
  const { project, setProject, setOpacity } = useContext(ProjectContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
    }
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
      >
        {project_data.map(item => (
          <div className='slider' key={item.id}>
            <h4>{item.title}</h4>
            <img
              src={`../assets/img/${item.img}`}
              alt={item.title}
              onClick={() => {
                setProject(item.id);
                // To prevent from showing nothing when clicked current project
                item.id === project ? setOpacity(1) : setOpacity(0);
              }}
              style={item.id === project ? { border: '0.2rem solid white' } : null}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectList;