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
export const EventSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const EventType = styled.div`
  margin :0 14px;
  cursor: pointer;
`
export const TextHover = styled.div`
  color:#b6b9b8;
  &:hover{
    color:black;
  }
`
export const Underline = styled.div`
  left: 0;
  width: 100%;
  height: 2.4px;
  background-color: #df2419;
`;
export const PageSelect = styled.div`
  width:1140px;
  height:75px;
  margin-top:25px;
  display:flex;

`
export const EventB = styled.div`
  width:570px;
  height:75px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
`
export const Events = styled.div`
  width:1140px;
  margin-top:40px;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  margin-bottom:120px;
`
export const ContentBox = styled.div`
  cursor: pointer;
  
`
export const EventImage = styled.img`

`
export const EventDate = styled.div`
  margin: 10px 0 50px 0;
`