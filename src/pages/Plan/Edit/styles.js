import styled from 'styled-components';

export const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    font-weight: bold;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .item {
    margin: 3px;
    display: flex;
    flex-direction: column;
  }
`;

export default Content;
