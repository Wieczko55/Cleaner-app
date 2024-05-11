import { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import { FaArrowUp } from "react-icons/fa";
const FloatingButton = () =>{

    const [bg, setBg] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            return window.scrollY > 530 ? setBg(true) : setBg(false)
        });
    });

    return(
        <Link to="home" activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className={`${bg ? 'bg-blue-600 h-20' : 'bg-gray-700 h-24'} hover:cursor-pointer text-center bottom-10 right-10 w-[80px] h-[80px] rounded-full text-white z-10 translation-all duration-500 flex items-center justify-center ${bg? 'fixed' : 'relative'}`}><FaArrowUp size={30} /></Link> 
    )
}

export default FloatingButton;