import { MdOutlinePhoneIphone } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { IoIosPricetags } from "react-icons/io";
import { IoSpeedometer, IoHappy } from "react-icons/io5";
const Box = () =>{
    return(
        <div className="bg-gray-100 w-full" id="About">
            <div className="max-w-[1640px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 px-8 py-14 gap-10 text-center">
                <div className="flex flex-col items-center">
                    <MdOutlinePhoneIphone  size={65} className="text-blue-400"/>
                    <h1 className="mt-3 font-semibold text-lg">Avilable with IOS and Android</h1>
                    <p className="mt-2">Our application is also avilable on mobile devices, you can easily keep your phone clean. Avilable with appstore and google play.</p>

                </div>
                <div className="flex flex-col items-center">
                    <GiPadlock   size={65} className="text-blue-400"/>
                    <h1 className="mt-3 font-semibold text-lg">Clean and protect</h1>
                    <p className="mt-2">Our software can also detect unwanted programs or other junk software on your computer, just one click to delete thing that are slowing your PC down, avoid it by using impact cleaner.</p>
                </div>
                <div className="flex flex-col items-center">
                    <IoSpeedometer size={65} className="text-blue-400"/>
                    <h1 className="mt-3 font-semibold text-lg">Fast and fiurious</h1>
                    <p className="mt-2">Impact Cleaner is really fast, you can set automatycly scanning to let the cleaner do it's routine job which is scanning junk things. the ability to manage programs in the background will certainly make it easier for you to manage your PC.</p>
                    <a href="#" className="underline text-blue-500">Make your pc faster</a>
                </div>
                <div className="flex flex-col items-center">
                    <IoHappy  size={65} className="text-blue-400"/>
                    <h1 className="mt-3 font-semibold text-lg">Easy and clear interface</h1>
                    <p className="mt-2">We focus on a simple interface so that every user can enjoy our program without much effort and problems. User experience is one of the most important things for us.</p>
                </div>
            </div>
        </div>
    )
}
export default Box;