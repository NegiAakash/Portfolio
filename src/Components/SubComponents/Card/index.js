import React from "react";
import {
  CardButton,
  CardContainer,
  CardContent,
  CardImage,
  CardTitle,
  TechIconsContainer,
} from "./Card.styles";
import { ReactComponent as ReactIcon } from "../../../assets/react.svg";
import { ReactComponent as SpringIcon } from "../../../assets/spring.svg";
import { ReactComponent as MemoryIcon } from "../../../assets/memory.svg";
import { ReactComponent as MongoIcon } from "../../../assets/mongo.svg";
import { ReactComponent as DjangoIcon } from "../../../assets/django.svg";
import { ReactComponent as ExpressIcon } from "../../../assets/express.svg";

import image from "../../../assets/image.jpg";

function Card({ data }) {
  const [isDesc, setIsDesc] = React.useState(false);

  return (
    <CardContainer>
      <CardImage src={image} alt="Card" />
      <CardTitle>{data.name}</CardTitle>
      <CardContent>{data.description}</CardContent>
      <div className="body">
        <TechIconsContainer>
          {data.tech.map((tech) => (
            <div>
              {tech === "react" && (
                <ReactIcon className="icon" title="React JS" />
              )}
              {tech === "spring boot" && (
                <SpringIcon className="icon" title="Spring boot" />
              )}
              {tech === "MongoDB" && (
                <MongoIcon className="icon" title="Mongo db" />
              )}
              {tech === "Django" && (
                <DjangoIcon className="icon" title="Django" />
              )}
              {tech === "Express" && (
                <ExpressIcon className="icon" title="Express JS" />
              )}
              {tech === "in memory database" && (
                <MemoryIcon className="icon" title="In Memory DB" />
              )}
            </div>
          ))}
        </TechIconsContainer>
        <CardButton>
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </CardButton>
      </div>
    </CardContainer>
  );
}

export default Card;
