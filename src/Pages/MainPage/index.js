import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './style' 
import rightArrow from '../../images/rightarrow.png'
import leftArrow from '../../images/leftarrow.png'
import snsYoutube from '../../images/sns_youtube.png'
import snsF from '../../images/sns_facebookpng.png'
import snsI from '../../images/sns_insta.png'

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
                <S.SnsItem> 
                    <img src={snsYoutube} />
                    <S.SnsItem_>
                        <S.RoundedFont>
                            YOUTUBE
                        </S.RoundedFont>
                        <S.SnsItemButton>
                            구독
                        </S.SnsItemButton>
                    </S.SnsItem_>
                </S.SnsItem>
                <S.SnsItem> 
                    <img src={snsF} />
                    <S.SnsItem_>
                        <S.RoundedFont>
                            FACEBOOK
                        </S.RoundedFont>
                        <S.SnsItemButton>
                            좋아요
                        </S.SnsItemButton>
                    </S.SnsItem_>
                </S.SnsItem>
                <S.SnsItem> 
                    <img src={snsI} />
                    <S.SnsItem_>
                        <S.RoundedFont>
                            INSTAGRAM
                        </S.RoundedFont>
                        <S.SnsItemButton>
                            팔로워
                        </S.SnsItemButton>
                    </S.SnsItem_>
                </S.SnsItem>
            </S.SnsList>
        </S.MainSnsDiv>
    </S.Container>
  )
}
function Image({ link }) {
    return <img src={link}></img>;
}
