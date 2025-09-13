import { useState, useEffect } from "react";
import * as S from "../styles/MyProjectStyle";
import randomCatImg from "../assets/random_cat.png";
import ieumImg from "../assets/ie_um.png";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectData = [
      {
        id: 1,
        image: randomCatImg,
        title: "random cat",
        description: "랜덤으로 고양이를 보여주는 웹사이트",
        tags: ["React", "Vercel"],
      },
      {
        id: 2,
        image: ieumImg,
        title: "ie_um",
        description: "지역의 자원을 AI를 통해 추천해주는 웹사이트",
        tags: ["React", "Vercel"],
      },
    ];
    setProjects(projectData);
  }, []);

  return (
    <S.ProjectWrap>
      <h2 style={{ color: "white" }}>Projects</h2>
      <S.ProjectGrid>
        {projects.map((project) => (
          <S.ProjectCard key={project.id}>
            <S.ProjectImage src={project.image} />
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectDesc>{project.description}</S.ProjectDesc>
            <S.ProjectTags>
              {project.tags.map((tag, index) => (
                <S.Tag key={index}>{tag}</S.Tag>
              ))}
            </S.ProjectTags>
          </S.ProjectCard>
        ))}
      </S.ProjectGrid>
    </S.ProjectWrap>
  );
}
