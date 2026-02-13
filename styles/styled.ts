import styled from "styled-components"

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 992px;
  padding: 2.5rem 2rem;
  height: 100vh;
`;

export const HomeContent = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 6.25rem;
  align-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const HomeLeftContent = styled.div``;

export const HomeRightContent = styled.div``;
