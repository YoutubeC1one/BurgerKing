import styled from 'styled-components'
import Slider from 'react-slick'

export const Container = styled.div`
  width: 100%;
  background-color: yellowgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MainSlider = styled.div`
  width:1440px;
  height: 480px;
  background-color:lightblue;
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
  padding :0 148px;
  display:flex;
  align-items: center;
  justify-content: center;
  
`;
export const SnsItem = styled.div`
  background-color:blue;
  display:flex;
  align-items: center;
  justify-content: center;
`;
export const SnsList= styled.div`
  width:1144px;
  height:100%;
  background-color:red;
  display:flex;
  align-items: center;
  justify-content: center;
`;