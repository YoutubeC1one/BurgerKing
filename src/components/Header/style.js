import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: ${({ isOpen }) =>
    isOpen === true ? "" : "0.5px 1.5px 1.5px 0.7px #dfdfdf"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "BMJUA";
  position: fixed;
  z-index: 3;
`;
export const Header = styled.div`
  width: 80%;
  height: 120px;
  display: flex;
`;
export const HeaderIcon = styled.div`
  width: 12%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Menus = styled.div`
  width: 60%;
  height: 120px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Buttons = styled.div`
  width: 31%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;
export const MainIcon = styled.img`
  width: 83px;
  height: 82px;
`;
export const Button1 = styled.div`
  width: 168px;
  height: 50px;
  background-color: #502416;
  color: white;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-left: 10px;
  cursor: pointer;
`;
export const Button2 = styled.div`
  width: 168px;
  height: 50px;
  background-color: #d72300;
  color: white;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
`;
export const MainDiv = styled.div``;

export const lists = styled.div`
  width: 100%;
  height: 100px;
  font-size: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const slideDown = keyframes`
  from {
    transform: translateY(-5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 드롭다운 스타일
export const DropDown = styled.div`
  width: 100%;
  position: fixed;
  top: 120px;
  background-color: white;
  box-shadow: 0.5px 1.5px 1.5px 0.7px #dfdfdf;
  z-index: 999;
`;

export const DropDownLilst = styled.div`
  margin: 0 auto;
  width: 58%;
  height: 320px;
  display: flex;
  font-family: "BMJUA", sans-serif;
`;
export const Top = styled.div`
  width: 100%;
  height: 120px;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 170px;
  height: 320px;
  font-size: 15px;
  ${({ isOpen }) =>
    isOpen &&
    css`
      animation: ${slideDown} 0.3s ease-in-out forwards;
    `}
`;
export const Menu1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 180px;
  height: 320px;
  font-size: 15px;
  ${({ isOpen }) =>
    isOpen &&
    css`
      animation: ${slideDown} 0.3s ease-in-out forwards;
    `}
  width: 185px;
  height: 320px;
  font-size: 15px;
`;
export const Menu2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 145px;
  height: 320px;
  font-size: 15px;
  ${({ isOpen }) =>
    isOpen &&
    css`
      animation: ${slideDown} 0.3s ease-in-out forwards;
    `}
`;
export const Menu3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 130px;
  height: 320px;
  font-size: 15px;
  ${({ isOpen }) =>
    isOpen &&
    css`
      animation: ${slideDown} 0.3s ease-in-out forwards;
    `}
`;
export const MenuText = styled.div`
  margin: 0 0 15px 5px;
  font-weight: 500;
  color: #212121;
  cursor: pointer;
`;
export const HeaderFont = styled.div`
  @font-face {
    font-family: "BMJUA";
    src: url("./fonts/BMJUA_ttf.ttf");
  }
`;