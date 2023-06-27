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
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/7a7ae692-9ab1-4fed-bf64-c070c599fbc6.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      name: "DIABLO IV 스페셜 세트",
    },
    {
      key: 2,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/9a611b5a-80cb-460c-a71b-7a2624720e1e.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      name: "HELLO DIABLO IV 팩1",
    },
    {
      key: 3,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/3de60d82-d1e8-461b-8438-1083a811df30.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      name: "HELLO DIABLO IV 팩2",
    },
    {
      key: 4,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/1d96a9c7-3296-4267-8d9b-bf8cc8999d26.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      name: "HELLO DIABLO IV 팩3",
    },
  ];

  const MenuPage01 = () => {
    return (
      <S.ContentTable>
        {dummy01.map((ele) => (
          <S.ContentBox key={ele.key}>
            <S.Imagess src={ele.imgae2} alt="img" />
            <S.Images src={ele.image} alt="img" />
            <S.Text>{ele.name}</S.Text>
          </S.ContentBox>
        ))}
      </S.ContentTable>
    );
  };

  return (
    <>
      <ShowMenuNav name={"메뉴소개"} />
      <S.Container>
        <S.ContainerBox>
          <S.ShowContentsBox>
            <S.ShowMenu>메뉴소개</S.ShowMenu>
            <S.TextArea>
              <S.Contents onClick={() => navigate("/sepcialSale")}>
                <S.Line>스페셜&할인팩</S.Line>
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
