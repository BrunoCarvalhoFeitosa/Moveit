import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import * as S from './styled';

export function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }
  
  return (
    <S.ChallengeBoxContainer>
      { activeChallenge ? (
        <S.ChallengeBoxContainerActive>
          <S.ChallengeBoxContainerActiveHeader>Ganhe {activeChallenge.amount}xp</S.ChallengeBoxContainerActiveHeader>
          <S.ChallengeBoxContainerActiveMain>
            <S.ChallengeBoxContainerActiveMainImage>
              <img src={`/assets/icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
            </S.ChallengeBoxContainerActiveMainImage>
            <S.ChallengeBoxContainerActiveMainTitle>Novo Desafio</S.ChallengeBoxContainerActiveMainTitle>
            <S.ChallengeBoxContainerActiveMainDescription>{activeChallenge.description}</S.ChallengeBoxContainerActiveMainDescription>
          </S.ChallengeBoxContainerActiveMain>
          <S.ChallengeBoxContainerActiveFooter>
            <S.ChallengeBoxContainerActiveFooterButtonFailed
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </S.ChallengeBoxContainerActiveFooterButtonFailed>
            <S.ChallengeBoxContainerActiveFooterButtonCompleted
              type="button"
              onClick={handleChallengeSucceded}
            >
              Completei
            </S.ChallengeBoxContainerActiveFooterButtonCompleted>
          </S.ChallengeBoxContainerActiveFooter>
        </S.ChallengeBoxContainerActive>
      ) : (
        <S.ChallengeBoxContainerNotActive>
          <S.ChallengeBoxContainerTitle>Finalize um ciclo para receber desafios.</S.ChallengeBoxContainerTitle> 
          <S.ChallengeBoxContainerImage>
            <img src="assets/icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </S.ChallengeBoxContainerImage>
        </S.ChallengeBoxContainerNotActive>
      )}
    </S.ChallengeBoxContainer>
  )
}