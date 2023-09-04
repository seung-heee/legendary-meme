import Vill from "./Vill";

const IntroVillage = () => {
    const yellowEx = '#미션지 #경품 #보호수';
    const pinkEx = '#동아리부스 #음식 #프로그램';
    const blueEx = '#외부부스 #외부협찬 #학생부스';
    const purpleEx = `#우리마을끼쟁이 #타임테이블`;
    const redEx = '#오락기기 #경품 #랭킹';
    const greenEx = '#파라솔 #휴식 #취식';

    return (
        <div className="IntroVillage text-center">
            <div className="OA text-2xl py-3">SKETCH VILLAGE 소개</div>
            <div>
                <Vill character={'yellow'} title={'스케치마을'} explain={yellowEx} direction={'left'} />
                <Vill character={'pink'} title={'동아리마을'} explain={pinkEx} direction={'right'} />
                <Vill character={'blue'} title={'이웃마을'} explain={blueEx} direction={'left'} />
                <Vill character={'purple'} title={'흥얼마을'} explain={purpleEx} direction={'right'} />
                <Vill character={'red'} title={'오락마을'} explain={redEx} direction={'left'} />
                <Vill character={'green'} title={'힐링마을'} explain={greenEx} direction={'right'} />
            </div>
        </div >
    )
}

export default IntroVillage;