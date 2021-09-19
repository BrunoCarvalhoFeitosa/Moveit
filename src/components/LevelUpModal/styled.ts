import styled from 'styled-components';

export const LevelUpModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(242, 243, 245, 0.8);
`;
export const LevelUpModalContainer = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  position: relative;
  text-align: center;
`;

export const LevelUpModalContainerHeader = styled.header`
  font-size: 8.75rem;
  font-weight: 600;
  color: var(--blue);
  background: url('/assets/icons/levelup.svg') no-repeat;
  background-size: contain;
`;
export const LevelUpModalContainerText = styled.div``;

export const LevelUpModalContainerTextTitle = styled.h4`
  font-size: 2.25rem;
  color: var(--title);
`;
export const LevelUpModalContainerTextDescription = styled.p`
  margin-top: 0.25rem;
  font-size: 1.25rem;
  color: var(--text);
`;
export const LevelUpModalContainerClose = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: 0;
`;