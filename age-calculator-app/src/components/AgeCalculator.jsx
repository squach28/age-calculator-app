const AgeCalculator = () => {
  return (
    <div className="w-screen flex flex-col">
        <div className="flex">
            <div className="flex flex-col">
                <label className="uppercase" htmlFor="day">Day</label>
                <input id="day" className="border-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" />
            </div>
            <div>
                <label className="uppercase" htmlFor="month">Month</label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="">Year</label>
                <input type="number" />
            </div>
        </div>
    </div>
  )
}

export default AgeCalculator