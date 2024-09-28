import React from 'react'
import FinancesHeader from './financesLayout/FinancesHeader';
import AddExpenses from './financesLayout/AddExpenses';
import FinancesResults from './financesLayout/FinancesResults';
import FinancialTitle from '../components/FinancialTitle';

const HomeFinances = () => {


  return (
    <>
        <section>
          <FinancialTitle />
          <div className='border-2 border-border-dark mx-14 p-5 rounded-md'>       
            <FinancesHeader />
            <AddExpenses />
            <FinancesResults />
          </div>     
        </section>
    </>
  )
}

export default HomeFinances