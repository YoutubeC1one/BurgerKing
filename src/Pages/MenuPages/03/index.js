import * as S from "./style";
import ShowMenuNav from "../../../components/ShowMenuNav";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Up from "../../../components/PageUp";

export default function Index() {
  const navigate = useNavigate();

  const dummy03 = [
    {
      key: 1,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/746699c8-ea24-40d6-a522-b2a92e4e42f2.png",
      name: "기네스 와퍼",
    },
    {
      key: 2,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/57a9310f-10df-4b41-a74e-92b481cf58c2.png",
      name: "기네스 콰트로 치즈와퍼",
    },
    {
      key: 3,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/0ad69efd-b7ca-4403-a750-3947bf31de7f.png",
      name: "치킨킹BLT",
    },
    {
      key: 4,
      image:
        "	https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/c264b9fe-45db-4b8f-ac47-305f43974257.png",
      name: "통새우 와퍼",
    },
    {
      key: 5,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/e084d117-3fb8-4a30-a5cf-fec281c1f4b5.png",
      name: "더블 비프 불고기 버거",
    },
  ];

  const MenuPage01 = () => {
    return (
      <S.ContentTable>
        {dummy03.map((ele) => (
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
                <S.Line>프리미엄</S.Line>
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
                음료&디저트
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
