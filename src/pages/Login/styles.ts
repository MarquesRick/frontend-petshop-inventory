import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 3.1em;
  font-size: 2.5em;
  text-align: center;
  color: #f37020;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Form = styled.form`
  margin-top: 80px;
  margin-left: 30%;
  margin-right: 30%;
  align-items: center;
  align-content: center;
  height: 60px;
  p {
    align-items: center;
    align-content: flex-start;
  }

  button {
    margin-top: 2em;
  }
`;
export const ButtonAlign = styled.div`
  display: flex;
  justify-content: center;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  font-size: 20px;
  text-align: center;
`;
