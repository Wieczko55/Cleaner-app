import { MdCleaningServices } from "react-icons/md";
const Cleaning = () =>{
    return(
        <div className="py-20 max-w-[1640px] mx-auto lg:grid lg:grid-cols-2 flex flex-col border-b border-gray-300 mb-16">
            <div className="flex items-center justify-center">
                <img src="https://freeiconshop.com/wp-content/uploads/edd/trash-var-flat.png" alt="/"  className="xl:w-[400px] lg:w-[360px]"/>
            </div>
            <div className="xl:px-6 lg:px-5 text-center lg:text-left px-4 mt-12 lg:mt-4 md:leading-10">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Clean and light computer</h1>
                <p className="mt-4 text-[20px]">Do you feel like your computer is running slowly? maybe it's stuck? did this happen after installing some software? impact cleaner is the solution to your problems, it scans your computer for unused programs that only clutter your disk space and slow down your computer, it also allows you to efficiently manage the startup.Quick uninstall technology helps you quickly and easily remove unwanted programs from your computer; by selecting the appropriate option from the "Advanced" tab, you can also delete the registry of such a program.</p>
                
            </div>
        </div>
    )
}

export default Cleaning;