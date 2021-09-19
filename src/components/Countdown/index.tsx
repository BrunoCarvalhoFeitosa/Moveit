import {
  useState,
  useEffect,
  useContext
} from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import * as S from './styled';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <S.CountdownContainer>
      <S.CountdownContainerWrapper>
        <S.CountdownContainerMinutes>
          <S.CountdownContainerMinutesSpan>{minuteLeft}</S.CountdownContainerMinutesSpan>
          <S.CountdownContainerMinutesSpan>{minuteRight}</S.CountdownContainerMinutesSpan>
        </S.CountdownContainerMinutes>
        <S.CountdownContainerSeparator>:</S.CountdownContainerSeparator>
        <S.CountdownContainerSeconds>
          <S.CountdownContainerSecondsSpan>{secondLeft}</S.CountdownContainerSecondsSpan>
          <S.CountdownContainerSecondsSpan>{secondRight}</S.CountdownContainerSecondsSpan>
        </S.CountdownContainerSeconds>
      </S.CountdownContainerWrapper>

      { hasFinished ? (
        <S.CountdownContainerFinishedButton
          disabled
        >
          Ciclo encerrado
        </S.CountdownContainerFinishedButton>
      ) : (
        <>
          { isActive ? (
            <S.CountdownContainerResetButton
              type="button"
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </S.CountdownContainerResetButton>
          ) : (
            <S.CountdownContainerStartButton
              type="button"
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </S.CountdownContainerStartButton>
          )}
        </>
      )}
    </S.CountdownContainer>
  );
}