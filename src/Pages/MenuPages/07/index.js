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
      imgae2: 
        "https://www.burgerking.co.kr/dist/img/ico_flag_best02.e30b860c.png",
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/105d9b3d-8071-4bf9-b9ab-be2411112ab4.png",
      name: "해쉬 브라운",
    },
    {
      key: 2,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/c58aef0b-2b0b-47d7-a290-9b458fea5ae4.png",
      name: "너겟킹 8 조각",
    },
    {
      key: 3,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/3ffee06e-f801-4634-b051-aecff73dea86.png",
      name: "너겟킹",
    },
    {
      key: 4,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/f418df37-f098-4953-814c-57feeced60ce.png",
      name: "21 치즈스틱",
    },
    {
      key: 5,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/5b792f47-ad65-41af-947b-d8546e4a0f15.png",
      name: "어니언링",
    },
    {
      key: 6,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/b1d53e19-6310-4750-923e-1e6d67b6c294.png",
      name: "바삭킹",
    },
    {
      key: 7,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/7be1c4a5-61dc-491f-bd57-de8f3a2736e8.png",
      name: "바삭킹 8조각 + 소스",
    },
    {
      key: 8,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/adc8ff01-9f6d-4526-b55e-ec1407d1976e.png",
      name: "쉐이킹 프라이",
    },
    {
      key: 9,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/61777378-5054-4dd0-8b6f-00d10ae7c77c.png",
      name: "크리미 모찌볼",
    },
    {
      key: 10,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/b416cd7e-ef97-42ab-b487-3e2660d635de.png",
      name: "프렌치 프라이",
    },
    {
      key: 11,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/c3a17d8e-b448-4041-9556-bd95796c2ab3.png",
      name: "사이드 소스",
    },
    {
      key: 12,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/dec424b6-b072-4cd9-9eb9-b7427af8a539.png",
      name: "콘셀러드",
    },
  ];

  const MenuPage01 = () => {
    return (
      <S.ContentTable>
        {dummy01.map((ele) => (
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
                <S.Line>사이드</S.Line>
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
