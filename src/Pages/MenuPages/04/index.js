import * as S from "./style";
import ShowMenuNav from "../../../components/ShowMenuNav";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const dummy04 = [
    {
      key: 1,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/4478b151-233b-46f7-a046-388c45242477.png",
      name: "더블 비트 불고기 버거 세트",
    },
    {
      key: 2,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/8fb37942-5278-46ce-a88c-cf28ef6445b6.png",
      name: "BLT오믈렛킹",
    },
    {
      key: 3,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/0ad69efd-b7ca-4403-a750-3947bf31de7f.png",
      name: "오믈렛킹모닝",
    },
    {
      key: 4,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/e78a0c27-9efe-440b-b3a5-9aff046b0f06.png",
      name: "롱치킨버거",
    },
    {
      key: 5,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/e084d117-3fb8-4a30-a5cf-fec281c1f4b5.png",
      name: "통새우 와퍼 버거",
    },
    {
      key: 6,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/9b87c1c1-1f87-43c9-a7f1-fdd47a6aef87.png",
      name: "더블 오리지널 치즈버거 세트",
    },
    {
      key: 7,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/e1b6ba7d-e095-4bc7-9453-ec42e818b248.png",
      name: "비프 불고기 버거",
    },
    {
      key: 8,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/5a8acce7-4f35-40a9-a2f6-ceb1d2bc8571.png",
      name: "콰트로 치즈 와퍼 주니어 세트",
    },
    {
      key: 9,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/3d27b6f3-d9a3-42f1-82f7-04034fef7873.png",
      name: "불고기 와퍼 주니어",
    },
    {
      key: 10,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/cb401519-b104-450c-831e-1ada89d08734.png",
      name: "치즈 와퍼 주니어",
    },
  ];

  const MenuPage01 = () => {
    return (
      <S.ContentTable>
        {dummy04.map((ele) => (
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
                <S.Line>와퍼&주니어</S.Line>
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
    </>
  );
}
