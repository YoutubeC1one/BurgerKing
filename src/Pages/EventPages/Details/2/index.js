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
          SUMMER WAVES 5000
        </S.TitleText>
        <S.TitleDate>
          <b>06/26(월) ~ 07/02(일)</b>
        </S.TitleDate>
      </S.EventTitle>
      <S.ContentDiv>
        <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/event/normal/d0bdde7e-abf2-4e82-b187-cedb8fabadc8.png" alt="img"/>
        <S.ContentText>
          <b>
            1. 행사명 : SUMMER WAVES 5000<br/><br/>

            2. 제품 : 갈릭불고기와퍼, 치즈와퍼<br/><br/>

            3. 행사 기간 : 23년 6월 26일(월) ~ 23년 7월 2일(일), 7일간<br/><br/>

            4. 행사 시간 : 매장 운영시간에 따라 상이 합니다.<br/><br/>

            5. 유의 사항<br/>
            *본 제품은 실제 이미지와 다를 수 있습니다.<br/>
            *1인 5개까지만 판매<br/>
            *매장별로 조기 종료될 수 있습니다.<br/>
            *다른 할인 및 쿠폰과 중복 혜택 불가<br/>
            *해당 프로모션은 제휴 포인트 적립 불가<br/>
            *딜리버리 주문 불가 및 예약 주문 불가<br/>
            *일부 매장은 행사에서 제외될 수 있습니다.<br/>
            *단체 주문에서는 제외됩니다<br/><br/>

            6. 제외매장<br/>
            대명비발디점, 오션월드점, 인천공항1점, 인천공항교통센터1점, 경기양평점, 경남대점, 경남사천점, 경남삼천포점, 경북도청점, 경북영주가흥점, 경주보문점, 계룡엄사점, 광양LF스퀘어점, 광양중동점, 광주경안점, 광주상무점, 광주수완점, 광주신창점, 광주월계점, 광주첨단2지구점, 광주하남점, 구미인의점, 김천교동DT점, 김포현대아울렛점, 나주빛가람점, 당진읍내점, 대구대점, 대구지산점, 대구칠곡3지구점, 대구테크노폴리스점, 대전관평점, 대전문지점, 대전현대아울렛점, 목포하당점, 보령동대점, 부산안락DT점, 서산호수공원점, 세종반곡점, 순천법원점, 순천신대점, 안동중앙점, 여수웅천점, 오산궐동점, 울산신정FS점, 원광대점, 원주기업도시점, 원주무실점, 의정부HP점, 익산영등점, 인제대점, 정읍중앙점, 제천CGV점, 진주경상대점, 진주혁신도시점, 청주동남점, 청주오송점, 충남대병원DT점, 충남도청점, 충북진천점, 태안터미널점, 한동대점, 해운대비치점, 해운대우동점, 호남대점
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
