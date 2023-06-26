import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 30px 10px 1450px;
  opacity: 0;
  transition: opacity 0.3s;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
      animation: ${fadeIn} 0.5s ease-in-out;
    `}
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;
