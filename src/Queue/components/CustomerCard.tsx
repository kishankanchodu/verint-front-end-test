import styled from 'styled-components';

export default styled.div`
  border: 1px solid lightgray;
  border-radius: 0.2em;
  width: 290px;
  height: 370px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgb(0 0 0 / 0.2);
  }
`;
