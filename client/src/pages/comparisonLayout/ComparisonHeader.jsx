import React, {useState} from 'react'
import { useExpenses } from '../../context/ExpensesContext'

const ComparisonHeader = () => {

    const { months, selectedMonths, setSelectedMonths } = useExpenses()
    const [firstMonth, setFirstMonth] = useState(selectedMonths.first || months[0]);
    const [secondMonth, setSecondMonth] = useState(selectedMonths.second || months[1])

    const handleFirstMonthChange = (e) => {
        const month = e.target.value
        setFirstMonth(month)
        setSelectedMonths((prev) => ({...prev, first: month}))
    }
    
    const handleSecondMonthChange = (e) => {
        const month = e.target.value
        setSecondMonth(month)
        setSelectedMonths((prev) => ({...prev, second: month}))
    }

  return (
    <div className='flex justify-evenly p-2 gap-5'>
        <select value={firstMonth} onChange={handleFirstMonthChange} className='w-1/2 text-center text-xl'>
            {months.map((month, idx) => {
                return <option key={idx} value={month}>{month}</option>
            })}
        </select>
        <p className='font-bold text-4xl'>X</p>
        <select value={secondMonth} onChange={handleSecondMonthChange} className='w-1/2 text-center text-xl'>
            {months.map((month, idx) => {
                return <option key={idx} value={month}>{month}</option>
            })}
        </select>
    </div>
  )
}

export default ComparisonHeader