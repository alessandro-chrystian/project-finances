import React from 'react'
import { useExpenses } from '../../context/ExpensesContext'

const AllResultsCompared = () => {

    const {expenses, selectedMonths} = useExpenses()

    const getTotalByMonth = (month) => {
        return expenses.filter(expense => expense.month === month).reduce((acc, curr) => acc + parseFloat(curr.indValue), 0)
    }

    const month1Total = getTotalByMonth(selectedMonths.first)
    const month2Total = getTotalByMonth(selectedMonths.second)

    const balance = month1Total - month2Total

    const betterMonth = month1Total > month2Total ? selectedMonths.first : selectedMonths.second
    const betterMonthProfit = Math.abs(balance)

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 py-4 text-2xl justify-items-center border-b-2 border-border-dark'>
        <h2 className='text-5xl'>Todas as categorias</h2>
        <div className='text-center'>
          <h3>Despesa TOTAL Mês 1</h3>
          <p>R$ {month1Total.toFixed(2)}</p>
        </div>
        <div className='text-center'>
          <h3>Despesa TOTAL Mês 2</h3>
          <p>R$ {month2Total.toFixed(2)}</p>
        </div>
        <div className='text-center'>
            {balance === 0 ?
             <p>-</p> : <>
              <h3>{betterMonth}</h3>
              <p>R$ {betterMonthProfit.toFixed(2)}</p>
             </>
             }
        </div>
        <h2></h2>
    </div>
  )
}

export default AllResultsCompared