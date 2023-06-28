import * as S from "./style";
import ShowMenuNav from "../../../../components/ShowMenuNav";
import { useNavigate } from "react-router-dom";
import Footer from "../../../../components/Footer";
import Up from "../../../../components/PageUp";
export default function Index() {
  const navigate = useNavigate();

  return (
    <>
    <S.Container>
      <ShowMenuNav name={"이벤트 > 상세"}/>
      <S.PageTitle>
        <S.KoreanFont style={{
          fontSize:"50px",
          marginRight:"1000px"
        }}>
          이벤트
        </S.KoreanFont>
      </S.PageTitle>
      <S.EventTitle>
        <S.TitleText>
          제주민속오일장DT점 GRAND OPEN
        </S.TitleText>
        <S.TitleDate>
          <b>05/25(목) ~</b>
        </S.TitleDate>
      </S.EventTitle>
      <S.ContentDiv>
        <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/event/normal/d0c3b96c-d61e-4353-bd92-0246b1559193.png" alt="img"/>
        
        <S.StyledLink
          href="https://play.google.com/store/apps/details?id=kr.co.burgerkinghybrid&hl=ko"
          target="_blank"
        >
          <S.AppDownloadQR>
            <S.QRText>
              <b><S.RedText>버거킹 APP</S.RedText> 다운받고<br/><S.RedText>더 많은 혜택</S.RedText>을 <br/>만나보세요!</b>
            </S.QRText>
            <S.QRImg src="https://www.burgerking.co.kr/dist/img/qr_app.ab924d7a.png" alt="png"></S.QRImg>
          </S.AppDownloadQR>
        </S.StyledLink>
      </S.ContentDiv>
      <S.GoList onClick={()=>navigate("/event/0")}>
        <S.KoreanFont>
          목록보기
        </S.KoreanFont>
        
      </S.GoList>
    </S.Container>      
    <Up />
    <Footer />
    </>
  );
}
