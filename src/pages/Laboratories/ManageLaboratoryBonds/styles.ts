import styled from 'styled-components';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { shade } from 'polished';

const primaryColor = '#081a51';

export const Container = styled.div`
  height: 100%;
  padding: 0.1rem;
  margin-top: 2rem;
  font-weight: 100;
`;

export const Accept = styled(FiThumbsUp)`
  color: ${primaryColor};
  cursor: pointer;
  margin: auto 0.4rem auto 0.4rem;
`;

export const Decline = styled(FiThumbsDown)`
  color: #008080;
  cursor: pointer;
  margin: auto 0.4rem auto 0.4rem;
`;

export const Table = styled.table`
  width: 90%;
  border-collapse: separate;
  border-spacing: 0 1em;
  margin: auto;

  td {
    padding: 2px 10px 2px 10px;
    background-color: #e2e2e2;
    color: #000;
  }
`;

export const TextId = styled.td`
  font-size: 0.7rem;
  text-align: left;
  max-width: 50px;
  width: auto;
  min-width: 70px;
`;

export const TextName = styled.td`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
`;

export const TextNumber = styled.td`
  font-size: 0.8rem;
  text-align: end;
`;

export const Buttons = styled.td`
  max-width: 30px;
  width: auto;
  min-width: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 30%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  a {
    color: #081a51;
    align-self: flex-start;
    margin-left: 40px;
  }

  a:hover {
    color: ${shade(0.2, '#081a51')};
  }
`;
