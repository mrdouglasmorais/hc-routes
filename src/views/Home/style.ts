import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80%;
  margin:0 auto;
`

export const Card = styled.div`
  background-color: red;
  text-align: center;
  padding: 12px;
  color: white;
  border-radius: 12px;

  button {
    background-color: blue;
    color: white;
    transition: 0.3s;
    border-radius: 5px;

    &:hover{
      background-color: green;
      color: yellow;
    }
  }
`