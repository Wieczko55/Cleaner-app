import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () =>{
    return(
    <div className="bg-gray-600">
        <div className="max-w-[1640px] mx-auto pt-16 pb-6 md:px-8 px-0 lg:grid lg:grid-cols-3 lg:gap-x-10 border-b border-white flex flex-col">
            <div className="flex flex-col lg:px-0 px-10 mb-12">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">Impact Cleaner</h1>
                <p className="text-lg text-white mt-4">Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.</p>
                <div className="flex justify-between lg:mt-5 mt-10 text-blue-400 md:w-[95%] md:mx-auto lg:mx-0">
                <FaFacebookSquare size={40} className="hover:scale-125 tranistion-all duration-200"/> <FaSquareXTwitter  size={40} className="hover:scale-125 tranistion-all duration-200" /> <FaGithubSquare size={40} className="hover:scale-125 tranistion-all duration-200" /> <FaLinkedin size={40} className="hover:scale-125 tranistion-all duration-200" /> <IoLogoTiktok size={40} className="hover:scale-125 tranistion-all duration-200" /> <FaInstagramSquare  size={40} className="hover:scale-125 tranistion-all duration-200"/>
                </div>
            </div>
            <div className="col-span-2 lg:ml-14 flex flex-wrap justify-between text-white px-12">
                <div className="mb-8 group">
                    <h1 className="text-lg font-semibold text-indigo-400 group-hover:scale-105 transition-all duration-200 group-hover:text-green-400">Product</h1>
                    <ul className="*:mt-4">
                        <li className="hover:text-red-300 transition-all duration-100">Pro version</li>
                        <li className="hover:text-red-300 transition-all duration-100">Free version</li>
                        <li className="hover:text-red-300 transition-all duration-100">Cleaning tools</li>
                        <li className="hover:text-red-300 transition-all duration-100">Shop</li>
                        <li className="hover:text-red-300 transition-all duration-100">Order</li>
                    </ul>
                </div>
                <div className="group">
                <h1 className="text-lg font-semibold  text-indigo-400 group-hover:scale-105 transition-all duration-200 group-hover:text-green-400">Support</h1>
                    <ul className="*:mt-4">
                        <li className="hover:text-red-300 transition-all duration-100">Help & support</li>
                        <li className="hover:text-red-300 transition-all duration-100">Our Blog</li>
                        <li className="hover:text-red-300 transition-all duration-100">FAQ</li>
                        <li className="hover:text-red-300 transition-all duration-100">Our forum</li>
                        <li className="hover:text-red-300 transition-all duration-100">Contact</li>
                    </ul>
                </div>
                <div className="group">
                <h1 className="text-lg font-semibold text-indigo-400 group-hover:scale-105 transition-all duration-200 group-hover:text-green-400">Company</h1>
                    <ul className="*:mt-4">
                        <li className="hover:text-red-300 transition-all duration-100">About impact cleaner</li>
                        <li className="hover:text-red-300 transition-all duration-100">Work</li>
                        <li className="hover:text-red-300 transition-all duration-100">Inwestors</li>
                        <li className="hover:text-red-300 transition-all duration-100">Informations</li>
                        <li className="hover:text-red-300 transition-all duration-100">Co-op</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-4 pb-4 text-blue-300 font-semibold text-lg">
            <p className="text-center px-4 md:px-0">2024 Impact Cleaner. All Rights Reserved &copy;</p>
        </div>
    </div>
    )
}


export default Footer;