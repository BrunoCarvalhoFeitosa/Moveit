import styled from "styled-components"

export const ExperienceBarContainer = styled.header`
  margin: 15px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 992px;
`;

export const ExperienceBarYourXp = styled.h5`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--title);
`;

export const ExperienceBarProgress = styled.div`
  position: relative;
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 20px;
`;

export const ExperienceBarProgressPercent = styled.div`
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

export const ExperienceBarCurrentXp = styled.h5`
  position: absolute;
  top: 8px;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--title);
  transform: translateX(-50%);
`;

export const ExperienceBarFinalXp = styled.h5`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--title);
`;