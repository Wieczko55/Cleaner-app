import React from "react";
import Nav from "./Nav";
import monitor from "../assets/cleanmypc-1000x1000.png"

const Div = () =>{


    return(
        <div className="w-screen">
             <img src="https://e1.pxfuel.com/desktop-wallpaper/820/914/desktop-wallpaper-light-gray-high-definition-fullscreen-1440-light-grey.jpg" alt="/" className="absolute w-full h-[500px] object-cover"/>
            <div className=" max-w-[1640px] h-[500px] relative mx-auto">
            <Nav />
                <div className="absolute w-full h-full text-white justify-center items-center lg:grid lg:grid-cols-2 flex flex-col text-center lg:text-left">
                    <div className="flex flex-col lg:items-start items-center p-10">
                         <p className="text-black font-bold text-xl md:text-2xl lg:text-2xl text-center">Impact Cleaner</p>
                         <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">The best PC cleaner <br/><span>Uninstaller & upgrader.</span></h1>
                         <button className="w-[260px] h-[55px] bg-blue-300 rounded-xl mt-3 text-black font-semibold hover:text-white hover:bg-blue-700 transition-all duration-200 hover:scale-105">Download Now</button>
                         <p className="font-semibold mt-3 underline">Learn about Impact for android devices.</p>
                    </div>
                    <img src={monitor} alt="/" className="max-w-[500px] max-h-[530px] relative top-16 left-19 hidden lg:block"/>
                </div>
               
            </div>
        </div>
    )
}

export default Div;