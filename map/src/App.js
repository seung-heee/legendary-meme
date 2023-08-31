import './App.css';
import { useEffect } from 'react';

const { kakao } = window;

function App() {
  useEffect(() => {

    var markerPosition = new kakao.maps.LatLng(37.37955164347735, 126.92779783596329);
    var marker = {
      position: markerPosition
    };
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.379601333999055, 126.92801796001854),
      level: -1,
      marker: marker // 이미지 지도에 표시할 마커 
    };
    const map = new kakao.maps.Map(container, options);

    var polygonPath = [
      new kakao.maps.LatLng(37.37983302863325, 126.92749553487636),
      new kakao.maps.LatLng(37.37956516055783, 126.9278006457174),
      new kakao.maps.LatLng(37.37967112896975, 126.92796143897895),
      new kakao.maps.LatLng(37.37993674144244, 126.9276506849931)
    ];

    // 지도에 표시할 다각형 생성
    var polygon = new kakao.maps.Polygon({
      path: polygonPath, // 그려질 다각형의 좌표 배열입
      strokeWeight: 0, // 선의 두께
      strokeColor: '#fff', // 선의 색깔
      strokeOpacity: 0, // 선의 불투명도
      strokeStyle: 'longdash', // 선의 스타일
      fillColor: '#fff', // 채우기 색깔
      fillOpacity: 0.7 // 채우기 불투명도
    });

    // 지도에 다각형을 표시
    polygon.setMap(map);
  }, [])
  return (
    <div className="App">
      <div id="map" style={{
        width: '700px', height: '700px'
      }}></div>
    </div>
  )
}

export default App;
