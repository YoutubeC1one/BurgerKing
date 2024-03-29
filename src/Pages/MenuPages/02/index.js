import * as S from "./style";
import ShowMenuNav from "../../../components/ShowMenuNav";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Up from "../../../components/PageUp";

export default function Index() {
  const navigate = useNavigate();
  const dummy02 = [
    {
      key: 1,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/4478b151-233b-46f7-a046-388c45242477.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      name: "헬로 이나리우스 와퍼",
    },
    {
      key: 2,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/8fb37942-5278-46ce-a88c-cf28ef6445b6.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      name: "헬로 릴리트 와퍼",
    },
    {
      key: 3,
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/0ad69efd-b7ca-4403-a750-3947bf31de7f.png",
      name: "치킨킹BLT",
    },
    {
      key: 4,
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/e78a0c27-9efe-440b-b3a5-9aff046b0f06.png",
      name: "치킨킹",
    },
    {
      key: 5,
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/e084d117-3fb8-4a30-a5cf-fec281c1f4b5.png",
      name: "더블 비프 불고기 버거",
    },
    {
      key: 6,
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/9b87c1c1-1f87-43c9-a7f1-fdd47a6aef87.png",
      name: "BLT오믈렛 킹모닝",
    },
    {
      key: 7,
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/5a8acce7-4f35-40a9-a2f6-ceb1d2bc8571.png",
      name: "오믈렛 킹모닝",
    },
  ];

  const MenuPage01 = () => {
    return (
      <S.ContentTable>
        {dummy02.map((ele) => (
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
                스페셜&할인팩
              </S.Contents>
              <S.Contents onClick={() => navigate("/sepcialSale01")}>
                <S.Line>신제품(new)</S.Line>
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
