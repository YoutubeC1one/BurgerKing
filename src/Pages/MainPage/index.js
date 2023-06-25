import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './style' 
import rightArrow from '../../images/rightarrow.png'
import leftArrow from '../../images/leftarrow.png'
import snsYoutube from '../../images/sns_youtube.png'
import snsF from '../../images/sns_facebookpng.png'
import snsI from '../../images/sns_insta.png'
import snsY_ from '../../images/sns_youtube__.png'
import snsF_ from '../../images/sns_facebook__.png'
import snsI_ from '../../images/sns_insta__.png'
import howToUseApp from '../../images/HowToUseApp.png'
import howToUseDelivery from '../../images/HowToUseDelivery.png'
import _24hours from '../../images/24hours.png'
import delivery from '../../images/delivery.png'
import drive from '../../images/drive.png'
import morning from '../../images/morning.png'
import king from '../../images/king.png'
import parking from '../../images/parking.png'
import phoneCall from '../../images/phoneCall.png'


export default function MainPage() {
    const images = [
        {
            key: 1,
            image: "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/3f2e012b-20c8-4548-b0cc-60157c10503f.png",
        },
        {
            key: 2,
            image: "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/5e65f5ca-3f24-4203-ad15-be281675562c.png",
        },
        {
            key: 3,
            image: "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/00264d7b-12fd-4d3b-a634-9b83b7afe2c1.png",
        },
        {
            key: 4,
            image: "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/502f4da9-2fce-4a9e-aca0-c221bdd2200d.jpg",
        },
        {
            key: 5,
            image: "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/b80086f2-3528-438b-bb89-8c8a93e3abac.png",
        },
    ];
    const findShop = [
      {
        key: 1,
        image: delivery,
        content1: "집에서 편하게",
        content2: "받을 수 있는",
        keyWord: "딜리버리"
      },
      {
        key: 2,
        image: king,
        content1: "미리 주문하고",
        content2: "픽업 가능한",
        keyWord: "킹오더"
      },
      {
        key: 3,
        image: drive,
        content1: "차안에서 빠르게",
        content2: "이용할 수 있는",
        keyWord: "드라이브 스루"
      },
      {
        
        key: 4,
        image: _24hours,
        content1: "24시간 언제든",
        content2: "함께할 수 있는",
        keyWord: "24시간"
      },
      {
        key: 5,
        image: morning,
        content1: "든든한",
        content2: "아침을 도와줄",
        keyWord: "아침메뉴"
      },
      {
        key: 6,
        image: parking,
        content1: "내 차와 함께",
        content2: "올 수 있는",
        keyWord: "주차공간"
      },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
	    autoplaySpeed : 3500,
        nextArrow: (
            <S.NextTo>
              <img src={rightArrow} />
            </S.NextTo>
        ),
        prevArrow: (
            <S.Pre>
              <img src={leftArrow} />
            </S.Pre>
        ),
        appendDots: dots => (
            <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
              {dots}
            </div>
          ),
    }
  return (
    <S.Container>
        <S.MainSlider>
            <S.StyledSlider {...settings}>
                {images.map((image) =>(<Image link={image.image}></Image>))}
            </S.StyledSlider>
        </S.MainSlider>
        <iframe width="1440" height="605" src="https://www.youtube.com/embed/4CO98aFxRbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <S.MainSnsDiv>
            <S.SnsList>
                <S.StyledLink href='https://www.youtube.com/channel/UCEKRI0fipK4LEgV98nI2CQA/featured' target='_blank'>
                    <S.SnsItem> 
                        <img src={snsYoutube} />
                        <S.SnsItem_>
                            <S.RoundedFont>
                                YOUTUBE
                            </S.RoundedFont>
                            <S.SnsItemButton>
                                <img src={snsY_} />
                                <div style={{marginLeft:'5px'}}>
                                  <S.KoreanFont style={{fontSize:'15px',fontWeight:'600'}}>
                                  구독 4.9만
                                  </S.KoreanFont>
                                </div>
                                
                            </S.SnsItemButton>
                        </S.SnsItem_>
                    </S.SnsItem>
                </S.StyledLink>
                <S.StyledLink href='https://www.facebook.com/burgerkingkorea' target='_blank'>
                    <S.SnsItem> 
                        <img src={snsF} />
                        <S.SnsItem_>
                            <S.RoundedFont>
                                FACEBOOK
                            </S.RoundedFont>
                            <S.SnsItemButton>
                                <img src={snsI_} />
                                <div style={{marginLeft:'5px'}}>
                                  <S.KoreanFont style={{fontSize:'15px',fontWeight:'600'}}>
                                  좋아요 47.8만
                                  </S.KoreanFont>
                                </div>
                            </S.SnsItemButton>
                        </S.SnsItem_>
                    </S.SnsItem>
                </S.StyledLink>
                <S.StyledLink href='https://www.instagram.com/burgerkingkorea/' target='_blank'>
                    <S.SnsItem> 
                        <img src={snsI} />
                        <S.SnsItem_>
                            <S.RoundedFont>
                                INSTAGRAM
                            </S.RoundedFont>
                            <S.SnsItemButton>
                                <img src={snsF_} />
                                <div style={{marginLeft:'5px'}}>
                                  <S.KoreanFont style={{fontSize:'15px',fontWeight:'600'}}>
                                  팔로워 74.9K
                                  </S.KoreanFont>
                                </div>
                            </S.SnsItemButton>
                        </S.SnsItem_>
                    </S.SnsItem>
                </S.StyledLink>
                
            </S.SnsList>
        </S.MainSnsDiv>
        <S.MainDeliveryGuide>
          <img src={howToUseApp} style={{backgroundColor:'#c6a185'}}></img>
          <img src={howToUseDelivery} style={{backgroundColor:'#b18872'}}></img>
        </S.MainDeliveryGuide>
        <S.MainSearchShop>
          <S.KoreanFont style={{fontSize:'55px',fontWeight:'700'}}>
            매장 찾기 
          </S.KoreanFont>
          <S.KoreanFont style={{fontSize:'24px',marginTop:'10px'}}>
            고객님 주변에 있는 버거킹을 찾아보세요!  
          </S.KoreanFont>
          <S.MainSearchButton>
            <S.KoreanFont style={{fontSize:'27px'}}>
              매장찾기
            </S.KoreanFont>
          </S.MainSearchButton>
          <S.MainSearchList>
            {findShop.map((category) =>(
              <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center' 
              }}>
                <S.MainSearchItem>
                  <img src={category.image}></img>
                    {category.content1}
                    <br></br>
                  {category.content2}
                  <S.KoreanFont style={{fontSize:'20px', color:'#d82200', marginTop:'3px'}}>
                    {category.keyWord}
                  </S.KoreanFont>
                </S.MainSearchItem>
                {category.key !== 6 && <div style={{height: '200px',backgroundColor  : '#f3f3f3',width:'1px', margin :'0px 40px'}}/>}
                
              </div>
            ))}
          </S.MainSearchList>
        </S.MainSearchShop>
        <S.MainBurgerKingPhone>
          <div style={{ display:'flex',
                        justifyContent:'center',
                        alignItems:'center'}}>
            <div>
              <S.KoreanFont style={{
                  fontSize:'36px',
                  color:'white',
                  fontWeight:'1000',
                  marginTop:'70px',
                  marginRight:'500px',
                }}>
                집에서 만나는 버거킹
              </S.KoreanFont>
              <S.KoreanFont style={{
                  fontSize:'20px',
                  marginTop:'18px',
                  color:'white',
                  marginRight:'300px',
                }}>
                딜리버리 전화주문 안내 10:00-22:00 / 연중무휴 (매장별로 상이할 수 있습니다.)
              </S.KoreanFont>
            </div>
            <img src={phoneCall}
            style={{
              marginTop:'65px'
            }}>
            </img>
            <S.KoreanFont style={{
                  fontSize:'50px',
                  marginTop:'18px',
                  color:'white',
                  fontWeight:'1000',
                  marginTop:'65px',
                  marginLeft:'20px'
                }}>
                1599-0505
              </S.KoreanFont>
          </div>
          
          
        </S.MainBurgerKingPhone>
    </S.Container>
  )
}
function Image({ link }) {
    return <img src={link}></img>;
}
