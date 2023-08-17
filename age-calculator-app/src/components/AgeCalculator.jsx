import ArrowIcon from '../assets/icon-arrow.svg'

const AgeCalculator = () => {
  return (
    <div className="flex flex-col p-4 w-screen gap-10 m-5 bg-white rounded-md rounded-br-[100px]">
        <div className="w-full flex justify-around gap-3">
            <div className="flex flex-col">
                <label className="uppercase text-smokeygrey" htmlFor="day">Day</label>
                <input
                    id="day" 
                    type="number"
                    className="max-w-[100px] p-2 border-2 border-lightgrey text-offblack rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    placeholder="DD" 
                />
            </div>
            <div className="flex flex-col">
                <label className="uppercase text-smokeygrey" htmlFor="month">Month</label>
                <input
                    id="month" 
                    type="number"
                    className="max-w-[100px] border-2 border-lightgrey text-offblack p-2 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    placeholder="MM" 
                />
            </div>
            <div className="flex flex-col">
                <label className="uppercase text-smokeygrey" htmlFor="year">Year</label>
                <input
                    id="year" 
                    type="number"
                    className="max-w-[100px] border-2 border-lightgrey text-offblack p-2 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    placeholder="YYYY" 
                />
            </div>
        </div>
        <div className="flex items-center relative">
            <hr className="border-1 w-full border-lightgrey" />
            <img className="absolute m-auto left-[145px] md:static bg-purple rounded-full p-2" width="45px" src={ArrowIcon} alt="arrow pointing down"/>
        </div>
        <h1 className="text-6xl lowercase">38 years</h1>
        <h1 className="text-6xl lowercase">3 months</h1>
        <h1 className="text-6xl lowercase">38 days</h1>
    </div>
  )
}

export default AgeCalculator