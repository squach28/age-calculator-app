const AgeCalculator = () => {
  return (
    <div className="flex flex-col p-2 w-screen">
        <div className="w-full flex justify-around">
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
                    placeholder="DD" 
                />
            </div>
            <div className="flex flex-col">
                <label className="uppercase text-smokeygrey" htmlFor="year">Year</label>
                <input
                    id="year" 
                    type="number"
                    className="max-w-[100px] border-2 border-lightgrey text-offblack p-2 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    placeholder="DD" 
                />
            </div>

        </div>

    </div>
  )
}

export default AgeCalculator