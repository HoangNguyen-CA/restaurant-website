import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  color: black;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  letter-spacing: 0.1em;
  margin-left: 1.5em;

  font-size: 1rem;

  padding: 0.1em;

  transition: 0.2s ease-out;

  border-bottom: 1.5px solid transparent;
  border-top: 1.5px solid transparent;

  &:hover {
    border-bottom: 1.5px solid black;
  }
`;
