import React from 'react'
import { useExpenses } from '../../context/ExpensesContext'
import ComparisonGrid from './ComparisonGrid'

const ComparisonResults = () => {

    const {expenses, selectedMonths, categories} = useExpenses()

    const getTotalByCategoryAndMonth = (category, month) => {
        return expenses
        .filter(expense => expense.category === category && expense.month === month)
        .reduce((acc, expense) => acc + parseFloat(expense.indValue), 0)
    }

    const dataByCategory = categories.map(category => {
        const month1Total = getTotalByCategoryAndMonth(category, selectedMonths.first)
        const month2Total = getTotalByCategoryAndMonth(category, selectedMonths.second)

        if (month1Total === 0 && month2Total === 0) {
            return null
        }

        const balance = month1Total - month2Total

        return {
            category: category.charAt(0).toUpperCase() + category.slice(1),
            month1Total: `R$ ${month1Total.toFixed(2)}`,
            month2Total: `R$ ${month2Total.toFixed(2)}`,
            balance: `R$ ${balance.toFixed(2)}`
        }
    }).filter(item => item !== null)

    const data = ['exemplo1', 'exemplo2', 'exemplo3', 'exemplo4', 'exemplo5']

  return (
    <div className='border-2 border-border-dark items-center grid grid-cols-1 md:grid-cols-4 justify-items-center text-center overflow-x-auto h-32'>
        <ComparisonGrid title="Categorias" data={dataByCategory.map(item => item.category)} />
        <ComparisonGrid title="Mês 1" data={dataByCategory.map(item => item.month1Total)} />
        <ComparisonGrid title="Mês 2" data={dataByCategory.map(item => item.month2Total)} />
        <ComparisonGrid title="Balanço" data={dataByCategory.map(item => item.balance)} />
    </div>
  )
}

export default ComparisonResults