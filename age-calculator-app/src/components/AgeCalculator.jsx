import { useReducer, useState } from 'react'
import ArrowIcon from '../assets/icon-arrow.svg'
import { errorReducer } from '../reducers/ErrorReducer'

const AgeCalculator = () => {
    const initialErrors = { day: false, month: false, year: false}
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [result, setResult] = useState({day: '--', month: '--', year: '--'})
    const [errors, dispatch] = useReducer(errorReducer, initialErrors)

    const handleDayChange = (e) => {
        const day = e.target.value
        if(day.toString().length > 2) {
            return 
        }
        setDay(e.target.value)
    }

    const handleMonthChange = (e) => {
        const month = e.target.value
        if(month.toString().length > 2) {
            return 
        }
        setMonth(e.target.value)
    }

    const handleYearChange = (e) => {
        const year = e.target.value
        if(year.toString().length > 4) {
            return 
        }
        setYear(e.target.value)
    }

    const validateDate = (year, month, day) => {
        const today = new Date()
        if(year > today.getFullYear()) {
            dispatch({
                type: 'TOGGLE_YEAR_ERROR',
                payload: true
            })
            return false
        } else {
            dispatch({
                type: 'TOGGLE_YEAR_ERROR',
                payload: false
            })
        }

        if(month > 12) {
            dispatch({
                type: 'TOGGLE_MONTH_ERROR',
                payload: true
            })
            return false 
        } else {
            dispatch({
                type: 'TOGGLE_MONTH_ERROR',
                payload: false
            })
        }

        if(day > 31) {
            dispatch({
                type: 'TOGGLE_DAY_ERROR',
                payload: true
            })
            return false 
        } else {
            dispatch({
                type: 'TOGGLE_DAY_ERROR',
                payload: true
            })
        }
        return true 
    }

    const handleCalculateClick = () => {
        if(validateDate(year, month ,day)) {
            const calculation = calculateAge(year, month, day)

            setResult({
                year: calculation.year,
                month: calculation.month,
                day: calculation.day
            })
        }
        


    }

    const calculateAge = (year, month, day) => {
        const today = new Date()
        const result = {
            year: today.getFullYear() - year,
            month: today.getMonth() + 1 - month,
            day: today.getDate() - day
        }

        if(result.day < 0) {
            result.day += 30
            result.month -= 1
        }

        if(result.month < 0) {
            result.month += 12
            result.year -= 1
        }

        return result
    }

    return (
        <div className="flex flex-col p-4 md:p-8 w-screen gap-10 m-5 bg-white rounded-lg rounded-br-[100px] md:max-w-lg">
            <div className="w-full flex md:justify-start justify-around gap-3">
                <div className="flex flex-col gap-1">
                    <label className={`uppercase text-sm ${errors.day ? 'text-lightred' : 'text-smokeygrey'}`}htmlFor="day">Day</label>
                    <input
                        id="day" 
                        type="number"
                        className="max-w-[100px] p-2 border border-lightgrey text-offblack rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                        placeholder="DD" 
                        onChange={handleDayChange}
                        value={day}
                    />
                    {errors.day ? <p className="text-[0.6rem] text-lightred italic">Must be a valid day</p> : null }
                </div>
                <div className="flex flex-col gap-1">
                    <label className="uppercase text-smokeygrey text-sm" htmlFor="month">Month</label>
                    <input
                        id="month" 
                        type="number"
                        className="max-w-[100px] border border-lightgrey text-offblack p-2 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                        placeholder="MM" 
                        onChange={handleMonthChange}
                        value={month}
                    />
                    {errors.month ? <p className="text-xs text-lightred">Must be a valid day</p> : null }
                </div>
                <div className="flex flex-col gap-1">
                    <label className="uppercase text-smokeygrey text-sm" htmlFor="year">Year</label>
                    <input
                        id="year" 
                        type="number"
                        className="max-w-[100px] border border-lightgrey text-offblack p-2 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                        placeholder="YYYY" 
                        onChange={handleYearChange}
                        value={year}
                    />
                    {errors.year ? <p className="text-xs text-lightred">Must be a valid day</p> : null }
                </div>
            </div>
            <div className="flex items-center relative">
                <hr className="border-1 w-full border-lightgrey" />
                <img 
                    className="absolute m-auto left-[135px] md:static bg-purple rounded-full p-3 cursor-pointer" 
                    width="50px" 
                    src={ArrowIcon} 
                    alt="arrow pointing down" 
                    onClick={handleCalculateClick} />
            </div>
            <h1 className="text-5xl md:text-6xl lowercase italic font-bold"><span className="text-purple">{result.year}</span> years</h1>
            <h1 className="text-5xl md:text-6xl lowercase italic font-bold"><span className="text-purple">{result.month}</span> months</h1>
            <h1 className="text-5xl md:text-6xl lowercase italic font-bold"><span className="text-purple">{result.day}</span> days</h1>
        </div>
    )
}

export default AgeCalculator