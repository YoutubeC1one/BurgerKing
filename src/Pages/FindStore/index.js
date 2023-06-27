import React, { useEffect } from "react";
import * as S from "./style";
import ShowStoreNav from "../../components/ShowStoreNav";

const { kakao } = window;

export default function Index() {
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
        ps.keywordSearch("부산버거킹", placesSearchCB);

        function placesSearchCB(data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            var bounds = new kakao.maps.LatLngBounds();

            for (var i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(
                new kakao.maps.LatLng(data[i].y, data[i].x)
              );
            }

            map.setBounds(bounds);
          }
        }

        function displayMarker(place) {
          var marker = new kakao.maps.Marker({
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
      });
    };
  }, []);

  return (
    <>
      <ShowStoreNav />
      <S.Container>
        <div id="map" style={{ width: "100%", height: 520 }}></div>
      </S.Container>
    </>
  );
}
