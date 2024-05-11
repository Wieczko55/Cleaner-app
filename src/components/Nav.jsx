import { GiVacuumCleaner } from "react-icons/gi";

const Nav = () =>{
    return(
        <div id="home" className="absolute z-10 w-full px-8">
            <div className="w-full py-6 text-black grid lg:grid-cols-3 grid-cols-2 capitalize font-semibold">
                <div className="flex">
                    <a href="#" className="hover:text-blue-200 transition-all duration-150">Business type</a>
                    <a href="#" className="ml-6 hidden sm:block hover:text-blue-200 transition-all duration-150">Product</a>
                    <a href="#" className="ml-6 hidden sm:block hover:text-blue-200 transition-all duration-150">Your place</a>
                </div>
                <div className="hidden lg:flex justify-center items-center"><p className="hidden lg:block italic mr-3">Just professional clean</p> <GiVacuumCleaner size={35}/></div>
                <div className="flex justify-end">
                    <a href="#" className="mr-6 hover:text-blue-200 transition-all duration-150">Support</a>
                    <a href="#" className="mr-0 sm:mr-6 hover:text-blue-200 transition-all duration-150">Shop</a>
                    <a href="#" className="hidden sm:block hover:text-blue-200 transition-all duration-150">Dashboard</a>
                </div>
            </div>
        </div>
    )
}

export default Nav;