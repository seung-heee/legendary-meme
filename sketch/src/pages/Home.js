import Nav from "../component/Nav";
import CloudLottie from "../component/CloudLottie";
import BottomArrow from "../component/BottomArrow";

const Home = () => {
    return (
        <div className='Home min-h-screen'>
            <div className="Main min-h-screen flex flex-col">
                <Nav />
                <CloudLottie />
                <div className="flex flex-col items-center justify-center flex-1">
                    <div className="text-xl green font-bold">2023 동아리페스티벌</div>
                    <div><img src={process.env.PUBLIC_URL + `assets/Logo.png`} alt="" /></div>
                    <div className='mb-6 text-base green font-bold'>2023.09.19 성결대학교 운동장</div>
                </div>
                <BottomArrow />
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home;