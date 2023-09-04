import Lottie from "lottie-react";
import loadingLottie from "../lottie/cloud.json";

const CloudLottie = () => {
    return (
        <Lottie className='absolute top-1/3' animationData={loadingLottie} />
    )
}

export default CloudLottie;