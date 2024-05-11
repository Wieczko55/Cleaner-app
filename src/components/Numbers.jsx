import CountUp from 'react-countup';

const Numbers = () =>{
    return(
        <div className="bg-gray-400" id="Numbers">
            <div className="max-w-[1640px] mx-auto text-white py-12">
                <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl">Impact Cleaner in numbers</h1>
                <div className="flex mt-8 gap-y-8 gap-x-16 items-center justify-center flex-wrap px-4">
                    <div>
                        <h1 className="text-center text-xl sm:text-2xl font-semibold text-black"><CountUp end={35} delay={3} duration={5} />+</h1> 
                        <p>mln GB cleaning space every month</p>
                    </div>
                    <div>
                    <h1 className="text-center text-xl sm:text-2xl font-semibold text-black"><CountUp end={1}  delay={3} duration={5} />.5+</h1> 
                        <p>Bilion downloads </p>
                    </div>
                    <div>
                    <h1 className="text-center text-xl sm:text-2xl font-semibold text-black"><CountUp end={50} delay={3} duration={5} />+</h1> 
                        <p>mln GB cleaning space every month</p>
                    </div>
                    <div>
                    <h1 className="text-center text-xl sm:text-2xl font-semibold text-black"><CountUp end={60} delay={3} duration={5} />+</h1> 
                        <p>Languages avilable</p>
                    </div>
                    <div>
                    <h1 className="text-center text-xl sm:text-2xl font-semibold text-black"><CountUp end={5} delay={3} duration={5} />+</h1> 
                        <p>milions of instalation average per week</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Numbers;