import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 8px 0 rgba(0,120,212, 0);
  }
  50% {
    box-shadow: 0 0 8px 4px rgba(0,120,212, 0.6);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 12px;
  border: 1.8px solid #ddd;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  color: #333;

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }

  &:focus {
    border-color: #0078d4;
    animation: ${glow} 1.5s ease-in-out infinite;
  }
`;
