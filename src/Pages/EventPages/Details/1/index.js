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
          버거킹 딜리버리 20,000원 이상 구매 시 3,000원 할인
        </S.TitleText>
        <S.TitleDate>
          <b>06/26(월) ~ 07/02(일)</b>
        </S.TitleDate>
      </S.EventTitle>
      <S.ContentDiv>
        <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/event/normal/d76ec6b2-2520-4c63-af42-7c12ac98203a.png" alt="img"/>
        <S.ContentText>
          <b>
            1. 행사 명칭 : 버거킹 딜리버리 20,000원 이상 구매 시 3,000원 할인
            <br />
            <br />
            2. 행사 기간 : 23년 6월26일(월) ~ 7월 2일(일), 7일간
            <br />
            <br />
            3. 행사 제품 : 딜리버리 전 메뉴
            <br />
            <br />
            4. 행사 시간 : 10 ~ 23시
            <br />
            <br />
            5. 유의 사항
            <br />
            *딜리버리 프로모션으로 매장 내 주문이 불가합니다.<br />
            *20,000원 이상 주문 시 할인 적용 되며, 주문 당 3,000원 할인 됩니다.<br />
            *해당 프로모션은 버거킹 APP, 홈페이지를 통해서만 진행 됩니다.<br />
            *딜리버리 가능한 매장에서 진행됩니다. (매장별 딜리버리 운영 시간 상이)
            *일부 매장은 행사에서 제외 될 수 있습니다. 다른 쿠폰과 중복 할인 적용이 불가합니다.<br /><br />

            6. 제외매장<br />
            대명비발디점, 서울역점, 오션월드점, 인천공항1점, 인천공항교통센터1점, 경기양평점, 경남대점, 경남사천점, 경남삼천포점, 경북영주가흥점, 경주보문점, 계룡엄사점, 광양LF스퀘어점, 광양중동점, 광주수완점, 광주신창점, 광주월계점, 광주첨단2지구점, 구미신평점, 김포현대아울렛점, 김해아이스퀘어점, 나주빛가람점, 대구대점, 대구율하점, 대구지산점, 대전시청점, 보령동대점, 순천신대점, 울산신정FS점, 원주기업도시점, 의정부HP점, 전주중앙점, 제천CGV점, 진주경상대점, 천안두정점, 충북혁신도시점, 포항공대점, 한동대점, 호남대점
          </b>
        </S.ContentText>
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
