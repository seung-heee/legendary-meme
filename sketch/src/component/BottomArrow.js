import Lottie from "lottie-react";
import loadingLottie from "../lottie/bottomArrow.json";

const BottomArrow = () => {
    return (
        <>
            <Lottie className='absolute inset-x-0 bottom-0 h-32' animationData={loadingLottie} />
        </>)
}

export default BottomArrow;