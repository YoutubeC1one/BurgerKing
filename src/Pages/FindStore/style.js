import styled, { css, keyframes } from "styled-components";

export const HeaderFont = styled.div`
  @font-face {
    font-family: "BMJUA";
    src: url("./fonts/BMJUA_ttf.ttf");
  }
`;

export const Map = styled.div`
  position: absolute;
`;

export const Container = styled.div`
  width: 100%;
  height: 74vh;
  /* position: absolute; */
  ${({ toggle }) =>
    toggle &&
    css`
      margin-left: 480px;
      transition: margin-left 0.5s ease-in-out; /* 트랜지션 속성 추가 */
    `}
`;

export const ModalContainer = styled.div`
  margin-left: auto;
  width: 506px;
  height: 75.6vh;
  position: relative;
  z-index: 3;
`;
export const Option = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
`;
// ... 이전 코드 생략 ...

export const Title = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.3%;
  height: 10vh;
  background-color: white;
  color: ${({ active }) => (active ? "red" : "silver")};
  border-bottom: 1px solid silver;
  border-bottom: 3px solid ${({ active }) => (active ? "red" : "none")};
  font-family: "BMJUA";
  font-size: 22px;
  box-sizing: border-box;
  &:hover {
    color: ${({ active }) => (active ? "red" : "#343a40")};
  }
`;

export const MarketOption = styled.div`
  font-family: "BMJUA";
  font-size: 22px;
  margin-left: 35px;
  display: flex;
  cursor: pointer;
`;
export const OptionImg = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  cursor: pointer;
`;
export const Option2 = styled.div`
  width: 100%;
  height: 10vh;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid silver;
`;

export const Option3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12vh;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid silver;
`;

export const OptionBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 8vh;
  border: 1px solid silver;
  font-family: "BMJUA";
  font-size: 22px;
  cursor: pointer;
`;
export const OptionImg2 = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  cursor: pointer;
`;
export const Option4 = styled.div`
  width: 100%;
  background-color: #ffe5cc;
  height: 43.7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const SearchTitle = styled.div`
  width: 100%;
  height: 5vh;
  margin-top: 20px;
  padding-bottom: 15px;
  font-size: 23px;
  font-family: "BMJUA";
`;
export const ColorTitle = styled.span`
  margin-left: 35px;
  color: red;
  font-size: 28px;
  font-family: "BMJUA";
`;
export const ShowResult = styled.div`
  width: 96%;
  height: 25vh;
  background-color: white;
  margin-bottom: 20px;
`;
export const ShowTitle = styled.div`
  width: 100%;
  height: 7vh;
  font-size: 22px;
  font-family: "BMJUA";
`;
export const ShowContents = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: 20px;
  font-family: "BMJUA";
`;
export const ShowIcon = styled.div`
  width: 100%;
  height: 10vh;
  font-family: "BMJUA";
`;
export const SubTitle = styled.div`
  margin-left: 30px;
  padding-top: 25px;
  font-size: 22px;
`;
export const SubTitle2 = styled.div`
  margin-left: 30px;
  padding-top: 12px;
  font-size: 18px;
  font-weight: 300;
  color: silver;
`;
export const InputBox = styled.input`
  border: none;
  height: 8vh;
  width: 350px;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
  }
  font-family: "BMJUA";
  font-size: 25px;
  padding-left: 10px;
`;
export const Select = styled.select`
  width: 200px;
  height: 50px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: none;
  border: none;
  outline: none;
  font-size: 23px;
  font-family: "BMJUA";
`;

export const Options = styled.option`
  font-size: 15px;
`;
export const ToggleBtn = styled.div`
  position: absolute;
  width: 20px;
  height: 50px;
  background-color: gray;
  z-index: 3;
  margin-top: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;
