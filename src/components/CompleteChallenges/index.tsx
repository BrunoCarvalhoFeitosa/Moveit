import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import * as S from './styled';

export function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <S.CompleteChallengesContainer>
      <S.CompleteChallengestTextWrapper>
        <S.CompleteChallengesDefaultText>Desafios completos</S.CompleteChallengesDefaultText>
        <S.CompleteChallengesValue>{challengesCompleted}</S.CompleteChallengesValue>
      </S.CompleteChallengestTextWrapper>
    </S.CompleteChallengesContainer>
  );
}