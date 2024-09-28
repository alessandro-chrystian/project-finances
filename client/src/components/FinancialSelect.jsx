import React from 'react'
import { useExpenses } from '../context/ExpensesContext'

const FinancialSelect = () => {

  const {categories} = useExpenses()

  return (
    <>
      {categories.map((category, index) => {
        return <option key={index} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
      })}
    </>
  )
}

export default FinancialSelect