import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import * as S from './styled';

export function LevelUpModal() {
  const {
    level,
    closeLevelUpModal  
  } = useContext(ChallengesContext);

  return (
    <S.LevelUpModalOverlay>
      <S.LevelUpModalContainer>
        <S.LevelUpModalContainerHeader>{level}</S.LevelUpModalContainerHeader>
        <S.LevelUpModalContainerText>
          <S.LevelUpModalContainerTextTitle>Parabéns</S.LevelUpModalContainerTextTitle>
          <S.LevelUpModalContainerTextDescription>Você alcançou um novo level.</S.LevelUpModalContainerTextDescription>
        </S.LevelUpModalContainerText>
        <S.LevelUpModalContainerClose
          type="button"
          onClick={closeLevelUpModal}
        >
          <img src="/assets/icons/close.svg" alt="Fechar modal" />
        </S.LevelUpModalContainerClose>
      </S.LevelUpModalContainer>
    </S.LevelUpModalOverlay>
  );
}