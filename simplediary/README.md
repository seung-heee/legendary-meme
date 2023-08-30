#### 날짜, 시간 사용
const created_date = new Date().getTime();
new Date(created_date).toLocaleString()

#### useEffect
- Dependency Array에 들어있는 값이 변경되면 콜백함수 실행
- Dependency Array에 빈 배열 전달 ->component 처음 mount될 때만 콜백함수 실행
- Dependency Array 아무것도 전달하지 않으면 컴포넌트 업데이트 되는 순간마다 콜백함수 실행