import styled, { css, keyframes } from "styled-components";

export const HeaderFont = styled.div`
  @font-face {
    font-family: "BMJUA";
    src: url("./fonts/BMJUA_ttf.ttf");
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  padding-top: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NavText = styled.div`
  color: white;
  font-size: 19px;
  margin-left: 190px;
  font-family: "BMJUA";
`;
