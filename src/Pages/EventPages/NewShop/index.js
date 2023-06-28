import * as S from "./style";
import ShowMenuNav from "../../../components/ShowMenuNav";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const events=[
    {
      key:1,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/a22fb19c-19e3-43a0-a260-e74b3a098047.png",
      date:"2023.05.25~"
    },
    {
      key:2,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/6f0e5182-aaac-454f-973c-313c532e87c1.png",
      date:"2023.05.18~"
    },
    {
      key:3,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/32015844-76de-4196-9684-d635838aa00e.png",
      date:"2023.03.31~"
    },
    {
      key:4,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/5dc3aeca-e607-4f0a-8bb0-fac5b7827174.png",
      date:"2023.03.31~"
    },
    {
      key:5,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/312591c8-97bb-4dde-ae23-40d7cefd0a42.png",
      date:"2023.03.30~"
    },
    {
      key:6,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/78c4e189-242a-43f0-b27a-186b300f0735.png",
      date:"2023.02.23~"
    },
    {
      key:7,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/415c8560-2609-4df8-af5d-bfce85146f28.png",
      date:"2023.02.15~"
    },
    {
      key:8,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/2596eeb1-6cf8-4abf-b880-f839f18004af.png",
      date:"2023.01.18~"
    },
    {
      key:9,
      image:"https://d1cua0vf0mkpiy.cloudfront.net/images/event/banner/146aae07-e8bb-43a5-9439-d99446ae8a1f.png",
      date:"2023.01.04~"
    }
  ]
  const navigate = useNavigate();
  return (
    <S.Container>
      <ShowMenuNav/>
      <S.PageTitle>
        <S.KoreanFont style={{
          fontSize:"50px",
          marginRight:"960px"
        }}>
          신규매장
        </S.KoreanFont>
      </S.PageTitle>
      <S.PageSelect>
        <S.EventB style={{
          borderBottom:"2px solid black",
          backgroundColor:"#f2f2f2",
        }}
        onClick={()=>navigate("/event/0")}>
          <S.KoreanFont style={{
            fontSize:"30px",
            color:"#bfbfbf"
          }}>
            이벤트
          </S.KoreanFont>
        </S.EventB>
        <S.EventB style={{
          borderTop: "2px solid black",
          borderLeft: "2px solid black",
          borderRight: "2px solid black"
        }}>
          <S.KoreanFont style={{
            fontSize:"30px",
          }}>
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
  );
}
