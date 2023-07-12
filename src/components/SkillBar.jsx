import React, { useEffect, useState } from 'react';
import './SkillBar.css';

const SkillBar = (props) => {
  const { skill, level } = props;
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setProgress(level);

    let start = 0;
    const end = level;
    if (start === end) return;

    let incrementTime = (1.5 / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, []);

  return (
    <div className='bar-container'>
      <p>{skill}</p>
      <div className="skill-bar">
        <div className="skills" style={{ width: `${progress}%` }}>{count}</div>
      </div>
    </div>
  );
};

export default SkillBar;