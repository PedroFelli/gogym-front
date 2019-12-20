import styled from 'styled-components';

export const Content = styled.div`
  table {
    width: 100%;
  }

  th {
    text-align: left;
    padding-top: 10px;
  }

  td {
    padding-top: 14px;
  }

  .dados {
    color: #666666;
    line-height: 20px;
  }

  .botoes {
    display: flex;
    flex-direction: row;

    button {
      font-size: 15px;
      border: none;
      background: none;
    }

    .editar {
      padding-right: 10px;
      color: #4d85ee;
    }

    .apagar {
      color: #de3b3b;
    }
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bolder;
`;

export default Content;
