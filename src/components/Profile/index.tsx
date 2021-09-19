import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import * as S from './styled';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  
  return (
    <S.ProfileContainer>
      <S.ProfileImage>
        <img src="https://avatars.githubusercontent.com/u/46093815" alt="Bruno Carvalho Feitosa" />
      </S.ProfileImage>
      <S.ProfileWrapper>
        <S.ProfileName>Bruno Carvalho Feitosa</S.ProfileName>
        <S.ProfileLevel>
          <S.ProfileLevelImage>
            <img src="/assets/icons/level.svg" alt="Level" />
          </S.ProfileLevelImage>
          <S.ProfileLevelText>Level {level}</S.ProfileLevelText>
        </S.ProfileLevel>
      </S.ProfileWrapper>
    </S.ProfileContainer>
  );
}