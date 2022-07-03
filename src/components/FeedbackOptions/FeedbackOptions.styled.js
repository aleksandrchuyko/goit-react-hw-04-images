import styled from 'styled-components';

export const FeedbackButton = styled.button`
  cursor: pointer;
  ::first-letter {
    text-transform: capitalize;
  }
`;

export const ButtonsBar = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 15px;
`;

export const ButtonsBarItem = styled.li`
  list-style: none;
`;
