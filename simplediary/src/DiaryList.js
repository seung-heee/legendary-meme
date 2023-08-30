import Diaryitem from "./Diaryitem";
import './App.css';

const DiaryList = ({ diaryList, onDelete }) => {
    console.log(diaryList);
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>

            <div>
                {diaryList.map((item, idx) => // idx로 unique key 설정O, but 수정시 헷갈림 주의
                    // Each child in a list should have a unique "key" prop, 각 객체 고유한 키 설정하기
                    <Diaryitem onDelete={onDelete} key={item.id} {...item} />
                )}
            </div>
        </div >
    )
};

// undefined으로 넘어올 수 있는 props의 기본값 설정
DiaryList.defaultProps = {
    diaryList: []
}

export default DiaryList;