import styled from 'styled-components';

export default styled.button`
  border: none;
  margin-left: 1.5em;
  outline: none;
  cursor: pointer;

  letter-spacing: 0.1em;

  font-size: 1rem;

  padding: 0.1em;

  transition: 0.2s ease-out;

  border-bottom: 1.5px solid transparent;
  border-top: 1.5px solid transparent;

  &:hover {
    border-bottom: 1.5px solid black;
  }
`;
