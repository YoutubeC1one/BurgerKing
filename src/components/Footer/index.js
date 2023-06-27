import React from "react";
import * as S from "./style";
import snsF from "../../images/sns_facebookpng.png";
import snsI from "../../images/sns_insta.png";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.TopContainer>
        <S.MenuDiv>
          <S.Title>
            <S.HeaderFont>메뉴</S.HeaderFont>
          </S.Title>
          <S.Subtitle>
            <S.Titles onClick={() => navigate("/sepcialSale")}>
              스페셜&할인팩
            </S.Titles>
            <S.Titles onClick={() => navigate("/sepcialSale01")}>
              신제품(NEW)
            </S.Titles>
            <S.Titles onClick={() => navigate("/sepcialSale02")}>
              프리미엄
            </S.Titles>
            <S.Titles onClick={() => navigate("/sepcialSale03")}>
              와퍼&주니어
            </S.Titles>
            <S.Titles onClick={() => navigate("/sepcialSale04")}>
              치킨&슈프림버거
            </S.Titles>
            <S.Titles onClick={() => navigate("/sepcialSale05")}>
              올데이킹&킹모닝
            </S.Titles>
            <S.Titles onClick={() => navigate("/sepcialSale06")}>
              사이드
            </S.Titles>
            <S.Titles onClick={() => navigate("/sepcialSale07")}>
              음료&디저트
            </S.Titles>
          </S.Subtitle>
        </S.MenuDiv>
        <S.MenuDiv>
          <S.Title>
            <S.HeaderFont>매장</S.HeaderFont>
          </S.Title>
          <S.Subtitle>
            <S.Titles>매장찾기</S.Titles>
          </S.Subtitle>
        </S.MenuDiv>
        <S.MenuDiv>
          <S.Title>
            <S.HeaderFont>이벤트</S.HeaderFont>
            <S.Subtitle>
              <S.Titles onClick={()=> navigate("/event/0")}>이벤트</S.Titles>
            </S.Subtitle>
          </S.Title>
        </S.MenuDiv>
        <S.MenuDiv>
          <S.Title>
            <S.HeaderFont>브랜드 스토리</S.HeaderFont>
            <S.Subtitle>
              <S.Titles>BRAND</S.Titles>
              <S.Titles>WHOPPER</S.Titles>
              <S.Titles>COMM.</S.Titles>
            </S.Subtitle>
          </S.Title>
        </S.MenuDiv>
        <S.MenuDiv>
          <S.Title>
            <S.HeaderFont>고객센터</S.HeaderFont>
          </S.Title>
          <S.Subtitle>
            <S.Titles>공지사항</S.Titles>
            <S.Titles>버거킹앱이용안내</S.Titles>
            <S.Titles>FAQ</S.Titles>
            <S.Titles>문의</S.Titles>
            <S.Titles>가맹점모집</S.Titles>
            <S.Titles>인재채용</S.Titles>
          </S.Subtitle>
        </S.MenuDiv>
      </S.TopContainer>
      <S.BottomContainer>
        <S.BottomDiv>
          <S.BottomTitle>BURGER KING</S.BottomTitle>
          <S.BottomTitle2>
            이용약관<S.TextBoxs> | </S.TextBoxs>개인정보처리방침
            <S.TextBoxs> | </S.TextBoxs>법적고지
          </S.BottomTitle2>
        </S.BottomDiv>
        <S.BottomDiv2>
          <S.TextBox>
            서울 종로구 삼봉로 71 G 타워 4F,5F 주식회사 비케이알 | 전화주문
            1599-0505
            <br />
            <S.Saupja>사업자 등록번호 101-86-76277 |</S.Saupja> (주)BKR 대표이사
            이동형
            <br />
            Copyright 2019 BKR Co., Ltd. All right Reserved
            <br />
          </S.TextBox>
          <S.Recruit>
            <S.Yak>인재채용</S.Yak>
            <S.Yak>가맹점모집</S.Yak>
          </S.Recruit>
        </S.BottomDiv2>
        <S.Insta>
          <a href="https://www.facebook.com/burgerkingkorea">
            <S.FaceBook src={snsI} />
          </a>
          <a href="https://www.facebook.com/burgerkingkorea">
            <S.Instagram src={snsF} />
          </a>
        </S.Insta>
      </S.BottomContainer>
    </S.Container>
  );
}
