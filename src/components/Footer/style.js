import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BMJUA';
    src: url('./fonts/BMJUA_ttf.ttf');
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 680px;
  background-color: #34170a;
`;

export const TopContainer = styled.div`
  width: 1144px;
  height: 385px;
  margin: 0 auto;
  border-bottom: 1px solid silver;
  display: flex;
  align-items: center;
`;

export const MenuDiv = styled.div`
  width: 230px;
  height: 300px;
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;
  color: white;
`;

export const Subtitle = styled.div`
  cursor: pointer;
  width: 330px;
  height: 260px;
`;
export const Titles = styled.div`
  color: #bba391;
  margin-top: 16px;
  margin-bottom: 15px;
  font-weight: 500;
  font-family: "BMJUA", sans-serif;
`;

export const HeaderFont = styled.div`
  font-family: "BMJUA", sans-serif;
  font-size: 24px;
`;

export const BottomContainer = styled.div`
  width: 1144px;
  height: 290px;
  margin: 0 auto;
`;

export const BottomDiv = styled.div`
  width: 1144px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;
export const BottomTitle = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "BMJUA", sans-serif;
  color: white;
  font-size: 25px;
  padding-top: 10px;
`;
export const BottomTitle2 = styled.div`
  font-family: "BMJUA", sans-serif;
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  color: #bba391;
  margin-top: 10px;
`;
export const BottomDiv2 = styled.div`
  width: 1144px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  font-family: "BMJUA", sans-serif;
`;
export const TextBox = styled.div`
  color: #6f5b4c;
`;
export const Recruit = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
export const Yak = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 15px;
  border: 1px solid #bba391;
  width: 110px;
  height: 30px;
  margin-left: 3px;
`;
export const Insta = styled.div``;
export const Saupja = styled.span`
  color: #bba391;
`;

export const TextBoxs = styled.div`
  color: #6f5b4c;
  margin: 0 5px 0 5px;
`;
export const FaceBook = styled.img`
  width: 40px;
  height: 40px;
`;
export const Instagram = styled.img`
  width: 40px;
  height: 40px;
`;
