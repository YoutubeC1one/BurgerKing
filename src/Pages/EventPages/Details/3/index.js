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
        <S.TitleText>23년 6월 버거킹, DIABLO IV Collaboration
        </S.TitleText>
        <S.TitleDate>
          <b>06/05(월) ~ 09/17(일)</b>
        </S.TitleDate>
      </S.EventTitle>
      <S.ContentDiv>
        <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/event/normal/d1e76483-4a22-4b8d-b43f-8f3a6e56b4ae.png" alt="img"/>
        <S.ContentText>
          <b>
            1. 제품명 : 헬로 이나리우스 와퍼, 헬로 릴리트 와퍼<br /><br />

            2. 판매기간 : 23년 6월 5일(월) ~ 23년 9월 17일(일)<br /><br />

            3. 유의 사항<br />
            *본 제품은 실제 이미지와 다를 수 있습니다.<br />
            *본 제품은 밀, 대두, 우유, 돼지고기, 토마토, 쇠고기, 난류를 포함하고 있습니다.<br /> 
            *일부 매장은 행사에서 제외될 수 있습니다.<br /><br />

            4. 제외매장<br />
            대명비발디점, 대전현대아울렛점, 오션월드점, 인천공항1점, 인천공항교통센터1점

            <br /><br /><br />
            [포토카드 이벤트 안내]<br /><br />

            *포토카드는 매장 주문에 한하여 메뉴 구매당 한 장씩 제공 됩니다.<br />
              (딜리버리 및 킹오더 주문시 제공되지 않습니다.)<br />
            *포토카드는 매장별 선착순으로 배포되며, 조기 소진 될 수 있습니다.<br />
            *해당 카드로 얻을 수 있는 아이템은 '강령술사' 전용 아이템 입니다.<br /><br />

            배포 일정<br /><br />

            1. 1차 : 6/5~소진시까지<br />
            2. 2차 : 6/19~소진시까지<br />
            3. 3차 : 7/3~소진시까지<br /><br />

            코드 사용 기한 : ~ 23년 8월 9일(수)<br /><br />

            포토카드 내 아이템 사용은 블리자드 고객지원으로 문의 부탁 드립니다.
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
