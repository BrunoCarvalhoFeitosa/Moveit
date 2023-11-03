import styled from "styled-components"

export const CountdownContainer = styled.div``;

export const CountdownContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  color: var(--title);
`;

export const CountdownContainerMinutes = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;
`;

export const CountdownContainerMinutesSpan = styled.span`
  flex: 1;

  &:first-of-type {
    border-right: 1px solid var(--border-separator)
  }

  &:last-of-type {
    border-left: 1px solid var(--border-separator)
  }
`;

export const CountdownContainerSeparator = styled.span`
  font-size: 6.25rem;
  margin: 0 0.5rem;
`;

export const CountdownContainerSeconds = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;
`;

export const CountdownContainerSecondsSpan = styled.span`
  flex: 1;

  &:first-of-type {
    border-right: 1px solid var(--border-separator);
  }

  &:last-of-type {
    border-left: 1px solid var(--border-separator);
  }
`;

export const CountdownContainerFinishedButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-bottom: 3px solid var(--green);
  border-radius: 5px;
  background: var(--white);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--title);
  cursor: not-allowed;
  &::after {
    content: '';
    display: block;
    background: url('/assets/icons/complete.png') no-repeat;
    background-size: 100% 100%;
    width: 32px;
    height: 32px;
  }
`;

export const CountdownContainerResetButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-bottom: 3px solid var(--red);
  border-radius: 5px;
  background: var(--white);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--title);
  transition: background 0.2s;

  &:hover {
    background: var(--red);
    color: var(--white);
  }
`;

export const CountdownContainerStartButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 5px;
  background: var(--blue);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--white);
  transition: background 0.2s;

  &:hover {
    background: var(--blue-dark);
  }
`;
