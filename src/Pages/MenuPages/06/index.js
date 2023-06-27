import * as S from "./style";
import ShowMenuNav from "../../../components/ShowMenuNav";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Up from "../../../components/PageUp";

export default function Index() {
  const navigate = useNavigate();

  const dummy04 = [
    {
      key: 1,
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_best02.e30b860c.png",
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/4478b151-233b-46f7-a046-388c45242477.png",
      name: "더블 비트 불고기 버거 세트",
    },
    {
      key: 2,
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_best02.e30b860c.png",
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/8fb37942-5278-46ce-a88c-cf28ef6445b6.png",
      name: "BLT오믈렛킹",
    },
    {
      key: 3,
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_best02.e30b860c.png",
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/0ad69efd-b7ca-4403-a750-3947bf31de7f.png",
      name: "오믈렛킹모닝",
    },
    {
      key: 4,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/2a0a047e-70d9-4d1d-8bfa-a3ba46ab2269.png",
      name: "롱치킨 버거 세트",
    },
    {
      key: 5,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/f283f8fc-41dd-427b-9cce-f1676d853ee0.png",
      name: "더블 오리지널 치즈버거 세트",
    },
    {
      key: 6,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/9499da8c-c4f1-4ace-8cf5-ed903d8aaba2.png",
      name: "통새우 와퍼 주니어 세트",
    },
    {
      key: 7,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/c0eca4ff-e149-4bbc-b32e-ecc04bc71d36.png",
      name: "콰트로 치즈 와퍼 주니어 세트",
    },
  ];

  const MenuPage01 = () => {
    return (
      <S.ContentTable>
        {dummy04.map((ele) => (
          <S.ContentBox key={ele.key}>
            <S.Imagess src={ele.imgae2} />
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
                <S.Line>올데이킹&킹모닝</S.Line>
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
