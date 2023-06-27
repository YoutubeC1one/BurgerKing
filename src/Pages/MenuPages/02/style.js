import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BMJUA';
    src: url('./fonts/BMJUA_ttf.ttf');
  }
`;

export const Container = styled.div`
  width: 76%;
  height: 549px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 250px;
`;

export const ShowMenu = styled.div`
  width: 130px;
  height: 40px;
  background-color: white;
  font-size: 36px;
  font-family: "BMJUA", sans-serif;
`;

export const ContainerBox = styled.div`
  width: 100%;
  height: 454px;
`;

export const ShowContentsBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

export const Contents = styled.span`
  cursor: pointer;
  font-family: "BMJUA", sans-serif;
  color: silver;
  &:hover {
    color: black;
  }
`;

export const TextArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 1030px;
  height: 40px;
`;

export const ContentBox = styled.div`
  margin: 0 20px 0 30px;
`;

export const ContentTable = styled.div`
  margin-top: 100px;
  width: 100%;
  height:80vh;
  display: flex;
  flex-wrap: wrap;
`;

export const Images = styled.img`
  width: 220px;
  height: 150px;
`;

export const Text = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-family: "BMJUA";
`;

export const Line = styled.div`
  color: red;
  padding-bottom: 2px;
  border-bottom: 3px solid red;
`;

export const Imagess = styled.img`
  width: 50px;
  height: 35px;
  margin: 0 150px 150px 0;
  position: absolute;
  z-index: 2;
`
