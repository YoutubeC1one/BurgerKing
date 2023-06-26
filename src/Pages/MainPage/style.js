import styled from 'styled-components'
import Slider from 'react-slick'

export const Container = styled.div`
  width: 100%;
  background-color: #f2ebe6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MainSlider = styled.div`
  width: 1440px;
  height: 480px;
  background-color:lightblue;
  margin-top: 120px;
`;

export const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  z-index: 3;
`;

export const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 3;
`;

export const StyledSlider = styled(Slider)`
  .slick-prev::before,
  .slick-next::before{
    opacity: 0;
    display:none;
  }
`;

export const MainSnsDiv = styled.div`
  width: 1440px;
  height:160px;
  background-color:#683a2f;
  display:flex;
  align-items: center;
  justify-content: center;
  
`;
export const SnsItem = styled.div`
  background-color:#683a2f;
  display:flex;
  align-items: center;
  justify-content: center;
  margin:80px;
  color:white;
  
`;
export  const RoundedFont = styled.div`
  @font-face {
    font-family: 'MPLUSRounded';
    src: url('/fonts/MPLUSRounded1c-Bold.ttf') format('truetype');
    /* 다운로드한 폰트 파일의 경로를 지정합니다. */
    /* 경로는 public 디렉토리를 기준으로 설정됩니다. */
    /* 다운로드한 폰트 파일의 확장자와 포맷에 따라서 format 속성을 적절히 설정해야합니다. */
  }
  font-size:20px;
  font-family: 'MPLUSRounded', sans-serif;
  /* 폰트 패밀리를 CustomFont로 설정하고, 폰트가 로드되지 않을 경우 sans-serif 폰트를 대체로 사용합니다. */
`;
export const SnsList= styled.div`
  width:1144px;
  height:100%;
  background-color:#683a2f;
  display:flex;
  align-items: center;
  justify-content: center;
`;
export const SnsItem_ = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  margin-bottom:30px;
  margin-left:10px;
`;
export const SnsItemButton = styled.div`
  background-color:white;
  color:black;
  padding:6px 8px;
  border-radius:4px;
  display:flex;
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
export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover { 
    text-decoration: none;
    color: inherit;
  }
`;
export const MainDeliveryGuide = styled.div`
  width:1440px;
  height:480px;
`
export const MainSearchShop = styled.div`
  width:1440px;
  height:600px;
  background-color:white;
  color:black;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`
export const MainSearchButton = styled.div`
  width:140px;
  height:50px;  
  border-radius:100px; 
  background-color:#d82200;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center; 
  margin-top:30px;
`
export const MainSearchList = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center; 
  margin-top:50px;
`
export const MainSearchItem = styled.div`
  display:flex;
  justify-content:center;
  align-items:center; 
  flex-direction:column;
  text-align:center;
  font-weight: 1000;
`
export const MainBurgerKingPhone = styled.div`
  width:1440px;
  height:200px;
  background-image:url('https://www.burgerking.co.kr/dist/img/bg_home_cs.40b21d3f.png');
`