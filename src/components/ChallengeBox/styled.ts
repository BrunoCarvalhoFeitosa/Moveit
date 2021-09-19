import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
  height: 100%;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ChallengeBoxContainerActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChallengeBoxContainerActiveHeader = styled.header`
  color: var(--blue);
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid var(--gray-line);
`;

export const ChallengeBoxContainerActiveMain = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ChallengeBoxContainerActiveMainImage = styled.div`
  img {
    height: auto;
  }
`;

export const ChallengeBoxContainerActiveMainTitle = styled.strong`
  margin: 1.5rem 0 1rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--title);
`;

export const ChallengeBoxContainerActiveMainDescription = styled.p`
  line-height: 1.5;
`;

export const ChallengeBoxContainerActiveFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const ChallengeBoxContainerActiveFooterButtonFailed = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background: var(--red);
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ChallengeBoxContainerActiveFooterButtonCompleted = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background: var(--green);
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ChallengeBoxContainerNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChallengeBoxContainerTitle = styled.strong`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`;

export const ChallengeBoxContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  line-height: 1.4;
  max-width: 70%;

  img {
    margin-bottom: 1rem;
  }
`;
