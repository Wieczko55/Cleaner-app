
const Installing = () =>{
    return(
        <div className="py-16 max-w-[1640px] mx-auto lg:grid lg:grid-cols-2 flex flex-col-reverse ">
            <div className="xl:px-12 lg:px-8 text-center lg:text-left px-8 mt-12 lg:mt-4 md:leading-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Speed up your device</h1>
            <p className="mt-4 text-[20px]">Optimize your old device or make the new one work to its full potential. Make it work longer. Remove unnecessary junk in just a few clicks.</p>
            <ul>
                <li className="before:content-['★']"> Update the drivers for your device, we have as many as 15 million different drivers</li>
                <li className="before:content-['★']"> Increase your PC speed by up to 25%</li>
                <li className="before:content-['★']"> don't worry about updates, with our program you will download them automatically and only the ones you want</li>
                <li className="before:content-['★']"> remove registries that remain after uninstalling programs and slow down your device</li>
            </ul>
            </div>
            <div className="flex items-center justify-center">
                <img src="https://static-00.iconduck.com/assets.00/speed-icon-2048x2048-3jxhtv1e.png" alt="/"  className="w-[256px] xl:w-[400px] lg:w-[360px]"/>
            </div>
        </div>
    )
}

export default Installing;