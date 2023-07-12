import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Header from '../components/Header';
import ProjectDetail from '../components/ProjectDetail';
import ProjectList from '../components/ProjectList';
import './style.css';
import { ProjectContext } from '../context/ProjectContext';
import { project_data } from '../assets/data/project_data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import About from '../components/About';
// import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const { project, setOpacity } = useContext(ProjectContext);
  const [data, setData] = useState({});
  const [pos, setPos] = useState(0);

  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 300 },
      items: 1,
    }
  };

  useScrollPosition(({ prevPos, currPos }) => {
    // console.log(currPos.y);
    setPos(currPos.y);
  });

  // To show the matched project detail
  useEffect(() => {
    const matched = project_data.filter(item => item.id === project);
    setData(matched[0]);
    setOpacity(1);
  }, [project]);

  return (
    <Fragment>
      <div className="main-container">
        <div className="main-header">
          <div className="detail-desktop">
            <Header />
          </div>
        </div>
        <div className="project-container" id="project">
          <div className="main-project-detail">
            <ProjectDetail data={data} />
          </div>
          <div className="main-project-detail-portrait">
            <Carousel
              responsive={responsive}
              swipeable={true}
              draggable={true}
              infinite={true}
              partialVisible={false}
            >
              {project_data.map(item => (
                <div key={item.id}>
                  <ProjectDetail data={item} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="main-project-list">
            <ProjectList />
          </div>
        </div>
        <div className="about-container" id='about'>
          {Math.abs(pos) >= 300 && <About />}
        </div>
        {/* <div className="contact-container" id='contact'>
          <Contact />
        </div> */}
        <div className="footer-container" id="contact">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;