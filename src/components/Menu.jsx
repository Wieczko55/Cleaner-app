import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from 'react-scroll';
const Menu = () =>{

    const [bg, setBg] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            return window.scrollY > 530 ? setBg(true) : setBg(false)
        });
    });

    return(
        <div className={`${bg ? 'bg-gray-800 h-20' : 'bg-gray-700 h-24'}flex items-center top-0 w-full text-white z-10 translation-all duration-1000 ${bg? 'fixed' : 'relative'}`}>
            <div className="py-4 max-w-[1640px] mx-auto grid grid-cols-3 px-6 sm:px-8 ">
                <div className="flex gap-12 lg:col-span-2 items-center">
                    <a href="#" className="hover:text-blue-300 duration-150 transition-all">Home</a>
                    <a href="#" className="hidden lg:block hover:text-blue-300 duration-150 transition-all">About</a>
                    <a href="#" className="hidden lg:block hover:text-blue-300 duration-150 transition-all">Product</a>
                    <a href="#" className="hidden lg:block hover:text-blue-300 duration-150 transition-all">Pricing</a>
                    <a href="#" className="hidden lg:block hover:text-blue-300 duration-150 transition-all">Technology</a>
                    <a href="#" className="hidden lg:block hover:text-blue-300 duration-150 transition-all">Testimonials</a>
                    <a href="#" className="hidden lg:block hover:text-blue-300 duration-150 transition-all">Newstletter</a>
                </div>
                <div className="items-center flex justify-end *:ml-3 sm*:ml-6 col-span-2 lg:col-span-1">
                    <a href="#" className="hover:text-blue-300 duration-150 transition-all">Work</a>
                    <button className="text-white border p-2 rounded-xl hover:bg-white hover:text-black duration-250 transition-all font-semibold">Get Started</button>
                   {toggle? <IoClose size={30} onClick={() => toggle === true ? setToggle(false) : setToggle(true)} className="cursor-pointer" /> : <IoMdMenu size={30} onClick={() => toggle === true ? setToggle(false) : setToggle(true)} className="cursor-pointer lg:pointer-events-none lg:hidden"/> }
                </div>
            </div>
            <div className={`${ !toggle ? "hidden" : "flex" } visible lg:hidden p-6 bg-black-gradient absolute top-20 right-0 transition-all duration-300 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="*:mt-1 list-none flex flex-col justify-end items-center flex-1 text-white">
                <Link to="About" activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>Testimonials</Link>
                <Link to="Numbers" activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>About</Link>
                <Link to="Technology" activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>Product</Link>
                <Link to="Pro" activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>Pricing</Link>
                <Link to="Testimonials" activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>Technology</Link>   
                <Link to="Newsletter" activeClass='active' spy={true} smooth={true} duration={500} offset={-70}>Newsletter</Link>             
                </ul>
          </div>
        </div>
    )
}

export default Menu;