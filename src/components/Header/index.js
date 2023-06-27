import * as S from "./style";
import React, { useEffect, useState } from "react";
import MainIcon from "../../images/burgerIcon.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, [isOpen]);

  const handleDropdownToggle = () => {
    setIsOpen(true);
    console.log("ture");
  };

  const handleDropdownToggle1 = () => {};

  const handleDropdownToggle2 = () => {
    setIsOpen(false);
    console.log("false");
  };

  return (
    <>
      <S.Container isOpen={isOpen}>
        <S.Header>
          <S.HeaderIcon>
            <S.MainIcon
              src={MainIcon}
              alt="icon"
              onClick={() => {
                navigate("/");
              }}
            />
          </S.HeaderIcon>
          <S.Menus>
            <S.lists
              onMouseOver={handleDropdownToggle}
              onMouseover={handleDropdownToggle1}
            >
              <S.HeaderFont>메뉴소개 ▾</S.HeaderFont>
            </S.lists>
            <S.lists
              onMouseOver={handleDropdownToggle}
              onMouseover={handleDropdownToggle1}
            >
              <S.HeaderFont>매장소개 ▾</S.HeaderFont>
            </S.lists>
            <S.lists
              onMouseOver={handleDropdownToggle}
              onMouseover={handleDropdownToggle1}
            >
              <S.HeaderFont>이벤트 ▾</S.HeaderFont>
            </S.lists>
            <S.lists
              onMouseOver={handleDropdownToggle}
              onMouseover={handleDropdownToggle1}
            >
              <S.HeaderFont>브랜드스토리 ▾</S.HeaderFont>
            </S.lists>
          </S.Menus>
          <S.Buttons>
            <S.Button1>가맹점 문의</S.Button1>
            <S.Button2>딜리버리 주문</S.Button2>
          </S.Buttons>
        </S.Header>
      </S.Container>
      {isOpen && (
        <S.DropDown>
          <S.DropDownLilst onMouseLeave={handleDropdownToggle2}>
            <S.Menu isOpen={isOpen}>
              <S.MenuText
                onClick={() => {
                  navigate("sepcialSale");
                }}
              >
                스페셜&할인팩
              </S.MenuText>
              <S.MenuText onClick={() => navigate("/sepcialSale01")}>
                신제품(new)
              </S.MenuText>
              <S.MenuText onClick={() => navigate("/sepcialSale02")}>
                프리미엄
              </S.MenuText>
              <S.MenuText onClick={() => navigate("/sepcialSale03")}>
                와퍼&주니어
              </S.MenuText>
              <S.MenuText onClick={() => navigate("/sepcialSale04")}>
                치킨&슈프림버거
              </S.MenuText>
              <S.MenuText onClick={() => navigate("/sepcialSale05")}>
                올데이킹&킹모닝
              </S.MenuText>
              <S.MenuText onClick={() => navigate("/sepcialSale06")}>
                사이드
              </S.MenuText>
              <S.MenuText onClick={() => navigate("/sepcialSale07")}>
                음료&디저트
              </S.MenuText>
            </S.Menu>
            <S.Menu1 isOpen={isOpen}>
              <S.MenuText onClick={() => navigate("/findStore")}>
                매장찾기
              </S.MenuText>
            </S.Menu1>
            <S.Menu2 isOpen={isOpen}>
              <S.MenuText onClick={()=> navigate("/event/0")}>이벤트</S.MenuText>
            </S.Menu2>

            <S.Menu3 isOpen={isOpen}>
              <S.MenuText>BRAND</S.MenuText>
              <S.MenuText>WHOPPER</S.MenuText>
              <S.MenuText>COMM.</S.MenuText>
            </S.Menu3>
          </S.DropDownLilst>
        </S.DropDown>
      )}
    </>
  );
}
