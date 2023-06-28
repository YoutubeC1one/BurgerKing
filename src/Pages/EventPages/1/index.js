import * as S from "./style";
import ShowMenuNav from "../../../components/ShowMenuNav";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Up from "../../../components/PageUp";
export default function Index() {
  const navigate = useNavigate();

  const events = [
    {
      key:1,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/83a1ccde-19d0-40a1-baae-1a33768ebd5c.png",
      date:"2023.04.24~2023.06.04"
    },
    {
      key:2,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/7924dfd4-c31b-4ec5-bca4-199154d9f178.png",
      date:"2023.03.13~2023.06.04"
    },
    {
      key:3,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/e19266b8-ff84-480f-b8ac-59a2ea81c0ad.png",
      date:"2022.11.28~2023.03.12"
    },
    {
      key:4,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/67e31022-1a48-4621-b418-0bdb1ea5a009.png",
      date:"2022.08.08~2023.03.30"
    },
    {
      key:5,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/ef1aafc2-86f5-4d36-976e-06efdc21c125.png",
      date:"2022.04.04~2023.04.11"
    },
  ]
  return (
    <>
    <S.Container>
      <ShowMenuNav name={"이벤트 > 종료"}/>
      <S.PageTitle>
        <S.KoreanFont style={{
          fontSize:"50px",
          marginRight:"820px"
        }}>
          이벤트
        </S.KoreanFont>
        <S.EventSelect>
          <S.EventType onClick={()=>navigate("/event/all")}>
            <S.KoreanFont style={{
              fontSize:"20px",
            }}>
              <S.TextHover>
                전체
              </S.TextHover>
             
            </S.KoreanFont>
          </S.EventType>
          <S.EventType onClick={()=>navigate("/event/0")}>
            <S.KoreanFont style={{
              fontSize:"20px",  
            }}>
              <S.TextHover>
                진행중
              </S.TextHover>
            </S.KoreanFont>
          </S.EventType>
          <S.EventType>
            <S.KoreanFont style={{
              fontSize:"20px",
              color:"#df2419",
            }}>
              종료
              <S.Underline />
            </S.KoreanFont>
          </S.EventType>
        </S.EventSelect>
      </S.PageTitle>
      <S.PageSelect>
        <S.EventB style={{
          borderTop: "2px solid black",
          borderLeft: "2px solid black",
          borderRight: "2px solid black"
        }}>
          <S.KoreanFont style={{
            fontSize:"30px",
          }}>
            이벤트
          </S.KoreanFont>
        </S.EventB>
        <S.EventB style={{
          borderBottom:"2px solid black",
          backgroundColor:"#f2f2f2",
          
        }} onClick={()=>navigate("/newshop")}>
          <S.KoreanFont style={{
            fontSize:"30px",
            color:"#bfbfbf"
          }}
          >
            신규매장
          </S.KoreanFont>
        </S.EventB>
      </S.PageSelect>
      <S.Events>
        {events.map((e) => (
          <S.ContentBox key={e.key}>
            <S.EventImage src={e.image} alt="img" />
            <S.EventDate>
              <S.KoreanFont style={{
                fontSize:"26px",
                fontWeight:"800"
              }}>
                {e.date}
              </S.KoreanFont>
              
            </S.EventDate>
          </S.ContentBox>
        ))}
      </S.Events>
    </S.Container>
    <Up />
    <Footer />
    </>
  );
}
