import { IoSend } from "react-icons/io5";
import { useState } from "react";



const Newsletter = () =>{


    const [error,setError] = useState(false);

    const handleChnage =(val)=>{
        if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            setError(false)
        }else{
            setError(true)
        }
    }

    return(
        <div className="bg-gray-200" id="Newsletter">
        <div className="max-w-[1640px] mx-auto py-24 px-10 ">
            <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse">
                <div className="mt-14">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700">Never misss a drop</h1>
                    <p className="mt-5 text-lg text-slate-700 mb-8">Join to our newstletter and stay up to date and be the first to know about upcoming drops and events</p>
                    <p className="font-bold mb-10"> <span className="bg-slate-700 text-white rounded-2xl py-2 px-4 font-normal">01</span> Get more dicsount</p>
                    <p className="font-bold"> <span className="bg-slate-700 text-white rounded-2xl py-2 px-4 font-normal">02</span> Get premium magazines</p>
                    <form action="" className="relative group">
                    <input type="email"  name="" id="" className="bg-slate-700 hover:placeholder:text-lg placeholder:tranision-all placeholder:duration-300 border-slate-700 focus:bg-slate-600 focus:border-slate-600 outline-none focus:ring-slate-600 focus:scale-105 transition-all duration-300 text-white rounded-3xl h-[50px] mt-8 w-full px-5 placeholder-gray-300 invalid:border-pink-500  invalid:bg-red-500" placeholder="Enter your e-mail " onChange={(e)=>handleChnage(e.target.value)}  />
            {error?<p style={{color:"red"}} className="ml-2">Enter valid Email</p>:''} 
                    <button className="absolute top-12 right-6"><IoSend className="text-slate-200 group-hover:-rotate-45 transition-all duration-300"/></button>
                    </form>
                </div>
                <div className="flex justify-center">
                    <img src="https://cdn.dribbble.com/users/1129235/screenshots/11119956/media/0ed2f1fafc01796836f58027975ef866.gif" alt="" className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full"  />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Newsletter;