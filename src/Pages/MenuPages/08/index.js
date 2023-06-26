import * as S from "./style";
import ShowMenuNav from "../../../components/ShowMenuNav";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Up from "../../../components/PageUp";

export default function Index() {
  const navigate = useNavigate();
  const dummy01 = [
    {
      key: 1,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/af12eea0-f927-4276-9ea8-cfc7468809de.png",
      name: "제로슈가 에이드",
    },
    {
      key: 2,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/832c7e84-30b6-4083-9ed1-66cb4d7113b3.png",
      name: "망고 선데",
    },
    {
      key: 3,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/c22422a5-f29b-4c04-8574-a5a786f5c78f.png",
      name: "컵망고 아이스크림",
    },
    {
      key: 4,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/5390e233-3434-456f-85d5-a763bd3371f4.png",
      name: "코카콜라",
    },
    {
      key: 5,
      image:
        "	https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/fe2c4ddd-0fd8-49a2-8385-6c9705572fc8.png",
      name: "스프라이트",
    },
    {
      key: 4,
      image:
        "	https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/167a0fac-9178-422e-bf54-f1c019ab95f2.png",
      name: "스프라이트 제로",
    },
    {
      key: 6,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/e7c077c0-840b-4a11-a402-9b8eb2bc6341.png",
      name: "아이스초코",
    },
    {
      key: 7,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/8a3cabbf-2afe-4f86-a840-753367dd850d.png",
      name: "코카콜라 제로",
    },
    {
      key: 8,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/17196824-943c-4010-b7a5-78fd45163c29.png",
      name: "리얼 독퍼",
    },
    {
      key: 9,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/7dca9863-8def-47fe-9e17-4f85adade5c3.png",
      name: "미닛메이드 오렌지",
    },
    {
      key: 10,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/b323bc77-c874-43de-a26f-0e16593a1310.png",
      name: "순수 미네랄 워터",
    },
  ];
  const MenuPage01 = () => {
    return (
      <S.ContentTable>
        {dummy01.map((ele) => (
          <S.ContentBox key={ele.key}>
            <S.Images src={ele.image} alt="img" />
            <S.Text>{ele.name}</S.Text>
          </S.ContentBox>
        ))}
      </S.ContentTable>
    );
  };

  return (
    <>
      <ShowMenuNav />
      <S.Container>
        <S.ContainerBox>
          <S.ShowContentsBox>
            <S.ShowMenu>메뉴소개</S.ShowMenu>
            <S.TextArea>
              <S.Contents onClick={() => navigate("/sepcialSale")}>
                스페셜&할인팩
              </S.Contents>
              <S.Contents onClick={() => navigate("/sepcialSale01")}>
                신제품(new)
              </S.Contents>
              <S.Contents onClick={() => navigate("/sepcialSale02")}>
                프리미엄
              </S.Contents>
              <S.Contents onClick={() => navigate("/sepcialSale03")}>
                와퍼&주니어
              </S.Contents>
              <S.Contents onClick={() => navigate("/sepcialSale04")}>
                치킨&슈프림버거
              </S.Contents>
              <S.Contents onClick={() => navigate("/sepcialSale05")}>
                올데이킹&킹모닝
              </S.Contents>
              <S.Contents onClick={() => navigate("/sepcialSale06")}>
                사이드
              </S.Contents>
              <S.Contents onClick={() => navigate("/sepcialSale07")}>
                <S.Line>음료&디저트</S.Line>
              </S.Contents>
            </S.TextArea>
          </S.ShowContentsBox>
          <MenuPage01 />
        </S.ContainerBox>
      </S.Container>
      <Up />
      <Footer />
    </>
  );
}
