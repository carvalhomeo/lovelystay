import styled from "styled-components";
import { shade } from "polished";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 25px;
  background: none;
  color white;
  border: solid 1px #ac47cc;
  
  &:hover {
       background: ${shade(0.2, "#ac47cc")};
    }

  &:disabled {
    cursor: auto;
    background: ${shade(0.6, "#ac47cc")};
  }
`;
