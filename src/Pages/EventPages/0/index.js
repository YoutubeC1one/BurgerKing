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
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/336a777e-5ba4-48d9-ae3a-43ed9d400b89.png",
      date:"2023.06.26~2023.07.02"
    },
    {
      key:2,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/a4d65cf5-aeea-4623-ab2a-0b88a73bdf49.png",
      date:"2023.06.26~2023.07.02"
    },
    {
      key:3,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/d148a673-5db9-4b9a-9c8c-df0ab731d09d.png",
      date:"2023.06.05~2023.09.17"
    },
    {
      key:4,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/423f13ef-26de-4585-ae52-98b09ed87f9f.png",
      date:"2023.06.05~"
    },
    {
      key:5,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/ed636cfd-e183-49e8-84fd-6b002f83da5f.jpg",
      date:"2023.05.22~"
    },
    {
      key:6,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/c6658f62-68f0-45a4-9860-bf07727d9249.png",
      date:"2023.05.02~"
    },
    {
      key:7,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/df2efeeb-f1f4-4435-8387-45e984b399a2.png",
      date:"2023.01.09~"
    },
    {
      key:8,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/892e7872-1b8a-475b-a3ad-80589a2ae527.png",
      date:"2022.11.21~"
    },
    {
      key:9,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/04410c8c-24a6-49db-97af-670044d210fe.png",
      date:"2020.07.10~"
    }

  ]
  return (
    <>
    <S.Container>
      <ShowMenuNav name={"이벤트 > 진행중"}/>
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
          <S.EventType>
            <S.KoreanFont style={{
              fontSize:"20px",
              color:"#df2419",  
            }}>
              진행중
              <S.Underline />
            </S.KoreanFont>

          </S.EventType>
          <S.EventType onClick={()=>navigate("/event/1")}>
            <S.KoreanFont style={{
              fontSize:"20px"
            }}>
              <S.TextHover>
                종료
              </S.TextHover>
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
            <S.EventImage 
              src={e.image} 
              alt="img" 
              onClick={()=>navigate(`/eventdetail/${e.key}`)}
            />
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
