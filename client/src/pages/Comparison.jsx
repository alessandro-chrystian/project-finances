import React, { useEffect } from 'react'
import FinancialTitle from '../components/FinancialTitle'
import ComparisonHeader from './comparisonLayout/ComparisonHeader'
import ComparisonResults from './comparisonLayout/ComparisonResults'
import AllResultsCompared from './comparisonLayout/AllResultsCompared'
import LinkButton from '../components/LinkButton'
import { useExpenses } from '../context/ExpensesContext'
import axios from 'axios';

export const Comparison = () => {

  const { setExpenses} = useExpenses()

  const fecthExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/expenses')
      setExpenses(response.data)
    } catch (err) {
      console.error(err)
      alert(err)
    }
  }

  useEffect(() => {
    fecthExpenses()
  }, [])

  return (
    <section>
        <FinancialTitle />
        <div className='border-2 border-border-dark mx-14 p-5 rounded-md'>
            <ComparisonHeader />
            <ComparisonResults />
            <AllResultsCompared />
            <div className='text-end p-5'>
                <LinkButton />
            </div>
        </div>
    </section>
    
  )
}
