import React from "react";
import * as S from "./style";

export default function index(props) {
  return (
    <S.Container>
      <S.NavText>HOME > {props.name}</S.NavText>
    </S.Container>
  );
}
