import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const PageTitle = styled.div`
  width:1140px;
  height:40px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const KoreanFont = styled.div`
  @font-face {
	font-family: "BMJUA";
	src: url('./fonts/BMJUA_ttf.ttf');
  }
  font-family:'BMJUA';
`
export const EventTitle = styled.div`
  width:1144px;
  height:130px;
  background-color:#fafafa;
  border-top: 2px solid black;
  border-bottom: 2px solid #f2f2f2;
  margin-top:30px;
`
export const TitleText = styled.div`
  margin-left:20px;
  margin-top:30px;
  font-size:28px;
  font-weight:550;
`
export const TitleDate = styled.div`
  margin-left:20px;
  margin-top:20px;
  color: #838e94;
  font-size:20px;
`
export const ContentDiv = styled.div`
  width:1144px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  padding-top:30px;
  border-bottom: 2px solid black;
  margin-bottom:30px;
`
export const ContentText = styled.div`
  width: 720px;
  margin-top:20px;
  font-size:24px;
  margin-bottom:45px;

`
export const AppDownloadQR = styled.div`
  width:500px;
  height:160px;
  background-color:#fafafa;
  display:flex;
  justify-content:space-between;
  margin-bottom:100px;
`
export const QRText = styled.div`
  margin:35px 45px;
  font-size:22px;
`
export const QRImg = styled.img`
  width:120px;
  height:120px; 
  margin-top:20px;
  margin-right:20px;
`
export const RedText = styled.span`
  color:#dc290f;
`
export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
export const GoList = styled.div`
  width:256px;
  height:68px;
  border-radius:10px;
  background-color:#522215;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  font-size:24px;
  margin-bottom:120px;
  cursor: pointer;
`