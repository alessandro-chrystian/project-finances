import React from 'react'
import { useExpenses } from '../../context/ExpensesContext'
import FinancesGrid from './FinancesGrid'

const FinancesResults = () => {

  const { expenses, selectedCategory } = useExpenses()

  const filteredExpenses = selectedCategory === 'Todas' ? expenses : expenses.filter(expense => expense.category === selectedCategory)
  

  const dates = filteredExpenses.map((expense, index) => expense.data)
  const titles = filteredExpenses.map((expense, index) => expense.title)
  const values = filteredExpenses.map((expense, index) => `R$ ${parseFloat(expense.indValue).toFixed(2)}`)
  const categories = filteredExpenses.map((expense, index) => expense.category.charAt(0).toUpperCase() + expense.category.slice(1))

  return (
    <div>
      <div className='mt-5 border-2 text-center border-border-dark rounded-md grid grid-cols-1 md:grid-cols-4 justify-items-center overflow-y-auto h-32'>
        <FinancesGrid title="Data" data={dates} />
        <FinancesGrid title="Categoria" data={categories} />
        <FinancesGrid title="Titulo" data={titles} />
        <FinancesGrid title="Despesa individual" data={values} />
        </div>
        <div className='text-end flex items-center justify-end gap-5 p-4'>
          <h2 className='text-2xl'>Despesa TOTAL</h2>
            <p className='text-xl'>R$ {
              filteredExpenses.reduce((acc, expense) => acc + parseFloat(expense.indValue), 0).toFixed(2)
              }</p>
        </div>
    </div>
      
    
  )
}

export default FinancesResults