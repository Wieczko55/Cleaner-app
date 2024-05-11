import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { IoSpeedometerSharp } from "react-icons/io5";
import { SiInstatus } from "react-icons/si";
import { IoStatsChart } from "react-icons/io5";
import { TbShredder } from "react-icons/tb";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useState } from "react";

const Benefits = () =>{
    
    const [expand, setExpand] = useState (true);
    return(
        <div>
        <div className="h-[350px] bg-indigo-200 flex items-center">
            <div className="max-w-[1640px] mx-auto ">
                <div className="flex flex-col items-center justify-center max-w-[1100px] mx-auto px-12 text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">What you can gain by downloading the pro version?</h1>
                    <p className="text-center mt-6 text-md md:text-lg">one of the best programs to increase the speed of your computer, we offer support for every operating system and even on mobile devices, expand and see for yourself what you can gain by downloading the pro version.</p>
                    <div className="mt-5 bg-black opacity-25 p-1">
                      <MdOutlineKeyboardDoubleArrowUp size={30} className="text-gray-100 opacity-100  transition-all duration-300 " style={{transform: expand? 'rotate(-180deg)' : 'rotate(0deg)' }} onClick={() =>{setExpand(!expand)}}/>
                    </div>
                 </div>
            </div>
        </div>
        {!expand? <div className="bg-indigo-200 pb-20" style={{visibility: expand? 'hidden' : 'visible'}} >
            <div className="lg:grid lg:grid-cols-2 flex flex-col justify-center items-center gap-14 mx-auto h-full max-w-[1340px] px-5">
                <div className="flex" style={{height: expand? '0px' : ''}}>
                    <IoSpeedometerSharp size={80}  className="mr-5"/>
                    <div className="mt-3">
                        <h1 className="text-lg sm:text-2xl font-semibold mb-5 mt-1">Significant improvement in computer performance <span className="bg-pink-900 text-white text-sm md:text-lg p-1 rounded-xl">Ulepszono</span></h1>
                        <p className="text-lg text-gray-600">the pro version offers a wide range of options that will allow you to significantly speed up your computer</p>
                    </div>
                </div>
                <div className="flex" style={{height: expand? '0px' : ''}} >
                <SiInstatus  size={80}  className="mr-5"/>
                    <div className="mt-3">
                        <h1 className="text-lg sm:text-2xl font-semibold mb-5 mt-3">Software Status <span className="bg-pink-900 text-white md:text-lg p-1 text-sm  rounded-xl">Ulepszono</span></h1>
                        <p className="text-lg text-gray-600">Manage all software permissions and more uninstallation remnants and malicious plugins will be removed.</p>
                    </div>
                </div>
                <div className="flex" style={{height: expand? '0px' : ''}}>
                <IoStatsChart size={80}  className="mr-5 "/>
                    <div className="mt-3">
                        <h1 className="text-lg sm:text-2xl font-semibold mb-5 mt-4">Monitor your computer <span className="bg-pink-900 text-white md:text-lg p-1 text-sm  rounded-xl">Ulepszono</span></h1>
                        <p className="text-lg text-gray-600">from now on, you can always have your own analytical monitor at the click of a mouse, which will keep advanced statistics on your computer usage for you.</p>
                    </div>
                </div>
                <div className="flex" style={{height: expand? '0px' : ''}}>
                    <TbShredder  size={80}  className="mr-5"/>
                    <div className="mt-3">
                        <h1 className="text-lg sm:text-2xl font-semibold mb-5 mt-3">Improved Secure File Shredder <span className="bg-pink-900 text-white md:text-lg p-1 text-sm  rounded-xl">Ulepszono</span></h1>
                        <p className="text-lg text-gray-600">Shred and permanently delete unwanted files from your computer beyond recovery. Confidential files cannot be modified or read.</p>
                    </div>
                </div>
            </div>
            
        </div> : '' } 
        </div>
        
    )
}

export default Benefits;