import ReactTypingEffect from 'react-typing-effect';

const Header = () =>{
    return(
        <div className="bg-gray-700 text-white">
            <div className="mx-auto max-w-[1640px] py-12 flex flex-col items-center justify-center px-3">
                <h1 className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl">don't let your computer be cluttered any further.</h1>
                <p className='text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-3'>change it and download Impact cleaner.</p>
                <p className='text-center text-lg sm:text-3xl md:text-34xl lg:text-5xl mt-3 font-semibold'>Download today and&nbsp;
                <ReactTypingEffect speed={150} typingDelay={800} eraseDelay={1800} eraseSpeed={80} className='text-blue-400'
                    text={[" Speed up ur PC.", " free up disk space.", " uninstall programs easier."]}
                />
                </p>
                <button className='shadow-lg shadow-gray-400 border w-[200px] h-[50px] rounded-2xl mt-4 bg-white text-black font-bold text-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-150 hover:shadow-blue-400'><p>Try it now!</p></button>
            </div>
        </div>
    )
}

export default Header;