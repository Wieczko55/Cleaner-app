import Cleaning from "./heroComponents/Cleaning";
import Installing from "./heroComponents/Installing";
import Spy from "./heroComponents/Spy";
import Speed from "./heroComponents/Speed";
const Hero = () =>{
    return(
        <div className="bg-gray-100" id="Technology">
            <Cleaning />
            <Installing />
            <Spy />
            <Speed />
        </div>
    )
}

export default Hero;