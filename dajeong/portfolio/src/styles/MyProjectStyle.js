import styled from "styled-components";

export const ProjectWrap = styled.div`
    height: 100vh;
    padding: 20px;
    text-align: center;
    background-color: #6f6666ff;
`

export const ProjectGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

export const ProjectCard = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    min-height: 300px;
    display: flex;
    flex-direction: column;
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
`;

export const ProjectTitle = styled.h3`
    font-size: 20px;
`;

export const ProjectDesc = styled.p`
    color: #555;
`;

export const ProjectTags = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export const Tag = styled.span`
    background: #e5f0ff;
    color: #0070f3;
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
`;