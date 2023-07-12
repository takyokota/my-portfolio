import React, { createContext, useState } from "react";

export const ProjectContext = createContext(null);

export const ProjectContextProvider = ({ children }) => {
  const [project, setProject] = useState(0);
  const [opacity, setOpacity] = useState(0);
  // console.log(project);
  // console.log(opacity);

  return (
    <ProjectContext.Provider value={{ project, setProject, opacity, setOpacity }}>
      {children}
    </ProjectContext.Provider>
  );
};