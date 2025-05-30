import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const RefreshButton = styled.button`
  padding: 12px 22px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #005bbb, #0078d4);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 4px 12px rgba(0, 120, 212, 0.4);
  transition: all 0.3s ease;
  font-family: 'Ubuntu', sans-serif;

  &:hover:not(:disabled) {
    box-shadow: 0 6px 18px rgba(0, 120, 212, 0.7);
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    animation: ${bounce} 0.3s ease forwards;
  }

  &:disabled {
    background: #b0b0b0;
    box-shadow: none;
    cursor: not-allowed;
    color: #eee;
  }
`;
