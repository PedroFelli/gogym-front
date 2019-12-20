import styled from 'styled-components';

export const Container = styled.div`
  font-family: Roboto;
  height: 64px;
  background: #fff;
  padding: 0 30px;
  margin: auto;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      font-size: 15px;
      color: #999999;
      text-align: left;
      margin: 5px;
    }
  }
`;
export const Profile = styled.div`
  font-size: 14px;

  a {
    color: red;
    text-align: left;
    margin: 5px;
  }
`;
