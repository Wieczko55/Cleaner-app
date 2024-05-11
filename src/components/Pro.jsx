const Pro = () =>{
    return(
        <div>
            <div className="max-h-[500px] relative" id="Pro">

                <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/70 flex flex-col justify-center items-center">
                <h1 className="px-4 text-2xl sm:text-4xl md:text-5xl lg:6xl font-bold lg:mt-20">Impact Cleaner Free</h1>
                <p className="sm:mt-4 mt-2 sm:text-lg">quick and easy software uninstallation</p>
                <div className="flex gap-x-4 mt-4">
                    <button className="w-[165px] sm:w-[200px] h-[50px] border rounded-full bg-blue-900 border-blue-900 hover:scale-110 transition-all duration-300 hover:text-white hover:bg-blue-950 hover:border-blue-950">Free download</button>
                    <button className="w-[165px] sm:w-[200px] h-[50px] border rounded-full bg-red-800 border-red-800 hover:scale-110 transition-all duration-300 hover:text-white hover:bg-red-900 hover:border-red-900 animate-bounce hover:animate-none">Buy Pro</button>
                </div>
                <p className="mt-3">Version 12.0.1 | 25.2 MB</p>
                <p className="mt-2">Support Win11/Win10/Win8/Win7/Vista/Xp</p>
            </div>
            <img className="w-full max-h-[500px] object-cover" src="https://images3.alphacoders.com/133/thumb-1920-1338701.png" alt="/" />
            </div>
        </div>
    )
}

export default Pro;