import React from "react";
import { projects } from "../../data/projects";
import Card from "../SubComponents/Card";
import { ProjectsContainer } from "./Projects.styles";

function Projects() {
  // const [repos, setRepos] = useState([]);

  return (
    <ProjectsContainer>
      <h1>Some of the projects I've worked on</h1>

      <div className="cardContainer">
        {projects.map((repo) => (
          <Card data={repo} key={repo.name} />
        ))}
      </div>
    </ProjectsContainer>
  );
}

export default Projects;
