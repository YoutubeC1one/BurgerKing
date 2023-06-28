import React, { useEffect, useState } from "react";
import * as S from "./style";
import ShowMenuNav from "../../components/ShowMenuNav";
import UpArrow from "../../images/arrowUp.png";
import Location from "../../images/meLocation.png";
import SearchIcon from "../../images/s.png";

const { kakao } = window;

export default function Index() {
  const [page, setPage] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [searchResultCount, setSearchResultCount] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [store, setStore] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=db30475675f4829df0478c9b3228f856";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };

        const map = new kakao.maps.Map(container, options);
        const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

        const ps = new kakao.maps.services.Places();

        function displayMarker(place) {
          const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
          });

          kakao.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(
              '<div style="padding:5px;font-size:12px;">' +
                place.place_name +
                "</div>"
            );
            infowindow.open(map, marker);
          });
        }

        function placesSearchCB(data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            const bounds = new kakao.maps.LatLngBounds();
            const markers = [];

            setSearchResultCount(data.length); // 검색 결과의 개수 업데이트
            setSearchResults(data); // 검색 결과 업데이트

            for (let i = 0; i < data.length; i++) {
              const place = data[i];
              displayMarker(place);
              bounds.extend(new kakao.maps.LatLng(place.y, place.x));
            }

            map.setBounds(bounds);
          }
        }

        if (page === 0) {
          ps.keywordSearch("부산 강서구 버거킹", placesSearchCB);
        } else if (page === 1 && locationInput !== "") {
          ps.keywordSearch(store, placesSearchCB);
        } else {
          ps.keywordSearch(
            `${selectedOption} ${selectedRegion} 버거킹`,
            placesSearchCB
          );
        }
      });
    };
  }, [page, locationInput, store, selectedOption, selectedRegion]);

  const searchLocation = () => {
    setStore(locationInput);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=db30475675f4829df0478c9b3228f856";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };

        const map = new kakao.maps.Map(container, options);
        const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

        const ps = new kakao.maps.services.Places();

        function displayMarker(place) {
          const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
          });

          kakao.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(
              '<div style="padding:5px;font-size:12px;">' +
                place.place_name +
                "</div>"
            );
            infowindow.open(map, marker);
          });
        }

        function placesSearchCB(data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            const bounds = new kakao.maps.LatLngBounds();
            const markers = [];

            setSearchResultCount(data.length); // 검색 결과의 개수 업데이트
            setSearchResults(data); // 검색 결과 업데이트

            for (let i = 0; i < data.length; i++) {
              const place = data[i];
              displayMarker(place);
              bounds.extend(new kakao.maps.LatLng(place.y, place.x));
            }

            map.setBounds(bounds);
          }
        }

        if (locationInput !== "") {
          ps.keywordSearch(locationInput, placesSearchCB);
        }
      });
    };
  }, [locationInput]);

  const search = (e) => {
    setLocationInput(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const OptionTitle = ({ title, index }) => {
    return (
      <S.Title
        onClick={() => {
          setPage(index);
        }}
        active={page === index ? true : false}
      >
        {title}
      </S.Title>
    );
  };

  return (
    <>
      <ShowMenuNav name={"매장찾기"} />
      <S.Container toggle={toggle}>
        <S.Map id="map" style={{ width: "100%", height: "75.8vh" }}></S.Map>
        <S.ModalContainer>
          <S.Option>
            <OptionTitle title="가까운 매장" index={0} />
            <OptionTitle title="매장명 검색" index={1} />
            <OptionTitle title="지역 검색" index={2} />
          </S.Option>

          <S.Option2>
            <S.MarketOption>
              매장옵션
              <S.OptionImg src={UpArrow} alt="" />
            </S.MarketOption>
          </S.Option2>

          {page === 0 && (
            <S.Option3>
              <S.OptionBoard
                onClick={() => {
                  alert("설정(설정 아이콘) > 개인정보 > 위치서비스를 켜주세요");
                }}
              >
                <S.OptionImg2 src={Location} alt="" />현 위치로 매장 검색
              </S.OptionBoard>
            </S.Option3>
          )}
          {page === 1 && (
            <S.Option3>
              <S.InputBox type="text" onChange={search} value={locationInput} />
              <S.OptionImg src={SearchIcon} alt="" onClick={searchLocation} />
            </S.Option3>
          )}
          {page === 2 && (
            <S.Option3>
              <S.Select onChange={handleOptionChange}>
                <option>특별/광역시</option>
                <option value={"서울특별시"}>서울특별시</option>
                <option value={"부산광역시"}>부산광역시</option>
                <option value={"대구광역시"}>대구광역시</option>
                <option value={"인천광역시"}>인천광역시</option>
                <option value={"광주광역시"}>광주광역시</option>
                <option value={"대전광역시"}>대전광역시</option>
                <option value={"울산광역시"}>울산광역시</option>
                <option value={"세종특별자치시"}>세종특별자치시</option>
                <option value={"경기도"}>경기도</option>
                <option value={"강원도"}>강원도</option>
                <option value={"충척북도"}>충척북도</option>
                <option value={"충청남도"}>충청남도</option>
              </S.Select>
              <S.Select onChange={handleRegionChange}>
                <option>군,구</option>
                <option value={"강남구"}>강남구</option>
                <option value={"강동구"}>강동구</option>
                <option value={"강북구"}>강북구</option>
                <option value={"강서구"}>강서구</option>
                <option value={"관악구"}>관악구</option>
                <option value={"광진구"}>광진구</option>
                <option value={"구로구"}>구로구</option>
                <option value={"금천구"}>금천구</option>
                <option value={"서대문구"}>서대문구</option>
                <option value={"서초구"}>서초구</option>
              </S.Select>
            </S.Option3>
          )}

          <S.Option4>
            <S.SearchTitle>
              <S.ColorTitle>{searchResultCount}개 </S.ColorTitle>의 검색 결과가
              있습니다.
            </S.SearchTitle>
            <div
              style={{
                overflowY: "scroll",
                height: "35vh",
                width: "90%",
                margin: "10px 0 0 10px",
              }}
            >
              {searchResults.map((result, index) => (
                <S.ShowResult key={index}>
                  <S.ShowTitle>
                    <S.SubTitle>{result.place_name}</S.SubTitle>
                  </S.ShowTitle>
                  <S.ShowContents>
                    <S.SubTitle2>
                      {result.address_name}
                      <br />
                      {result.phone}
                    </S.SubTitle2>
                  </S.ShowContents>
                  <S.ShowIcon></S.ShowIcon>
                </S.ShowResult>
              ))}
            </div>
          </S.Option4>
        </S.ModalContainer>
      </S.Container>
    </>
  );
}
