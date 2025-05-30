import styled from 'styled-components';

export const PROFILE_SIZE = {
  height: 290,
  width: 290,
} as const;

export default styled.div`
  height: ${PROFILE_SIZE.height}px;
  width: ${PROFILE_SIZE.width}px;
  background: linear-gradient(135deg, #ececec, #c9c9c9);
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
`;
