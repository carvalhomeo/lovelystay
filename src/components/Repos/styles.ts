import styled from "styled-components";

export const PlaceHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 20px;
  height: 90vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 80%;
  padding: 20px;
  height: 90vh;
`;

export const Header = styled.div`
  color: #ac47cc;
  font-weight: 700;
  height: 10%;
`;

export const Content = styled.div`
  height: 80%;
  overflow: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #ac47cc;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5e1e73;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 10%;
`;
