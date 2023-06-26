import * as S from "./style";
import ShowMenuNav from "../../../components/ShowMenuNav";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const dummy01 = [
    {
      key: 1,
      image:
        "	https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/27ba8426-b1a7-4823-9565-4e87eb6c1d5a.png",
      name: "롱치킨 버거",
    },
    {
      key: 2,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/6ac60d65-757e-46a6-ab1f-fd8b49cd79f6.png",
      name: "비프 슈프림 버거",
    },
    {
      key: 3,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/aac7a61b-40fd-4b3b-b6d9-1775eee2e6fe.png",
      name: "통새우슈림프버거",
    },
    {
      key: 4,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/bf105d1f-eee3-4a95-b94a-73ec3e1f7c53.png",
      name: "바비큐 치킨 버거",
    },
    {
      key: 5,
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/f337fb53-34c3-4d33-b45b-780c32832104.png",
      name: "치킨 버거",
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
                <S.Line>치킨&슈프림버거</S.Line>
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
