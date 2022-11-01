import styled from "styled-components";

export const Container = styled.form`
  // border: solid 2px yellow;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 80%;
  padding: 20px;
  height: 90vh;
`;

export const Header = styled.div`
  // border: solid 2px green;
  color: #ac47cc;
  font-weight: 700;
  height: 10%;
`;

export const Content = styled.div`
  // border: solid 2px red;
  height: 80%;
  overflow: auto;
  scroll-behavior: smooth;
`;

export const List = styled.div`
  // border: solid 2px blue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

export const Actions = styled.div`
  // border: solid 2px orange;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 10%;
`;
