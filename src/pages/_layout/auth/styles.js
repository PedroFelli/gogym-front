import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4c63;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  .boxform {
    box-shadow: 7px 6px 12px -8px rgba(77, 77, 77, 1);
    border-radius: 5px;
    margin-top: 50%;
    width: 100%;
    background: #fff;
    padding: 10px;
  }

  img {
    width: 125px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    p {
      font-weight: bold;
      font-size: 14px;
      color: #444444;
      text-align: left;
    }

    input {
      font-size: 16px;
      color: #999999;
      text-align: left;
      background: rgba(0, 0, 0, 0.01);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: black;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4c63;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#ee4c63')};
      }
    }
  }
`;
