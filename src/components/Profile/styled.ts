import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileImage = styled.div`
  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  } 
`;
export const ProfileWrapper = styled.div`
  margin-left: 1.5rem;
`;

export const ProfileName = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--title);
`;

export const ProfileLevel = styled.p`
  display: flex;
  align-items: baseline;
`;

export const ProfileLevelImage = styled.div`
  margin-right: 0.5rem;
`;

export const ProfileLevelText = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
`;
