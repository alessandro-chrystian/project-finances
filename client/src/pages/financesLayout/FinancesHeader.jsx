import React, {useState} from 'react'
import { useExpenses } from '../../context/ExpensesContext'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import FinancialList from '../../components/FinancialList'
import FinancialSelect from '../../components/FinancialSelect'
import axios from 'axios'

const FinancesHeader = () => {

  const { expenses, selectedCategory, setSelectedCategory, months } = useExpenses()

  const totalExpense = selectedCategory === 'Todas' ? expenses.reduce((acc, expense) => acc + parseFloat(expense.indValue), 0) : expenses.filter(expense => expense.category === selectedCategory).reduce((acc, expense) => acc + parseFloat(expense.indValue), 0)

  const [revenue, setRevenue] = useState('R$')
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())

  const handleBlur = async () => {
    const parsedValue = parseFloat(revenue.replace(/[^0-9.]/g, ''));
    if (!isNaN(parsedValue)) {
        setRevenue(`R$ ${parsedValue.toFixed(2)}`);

        try {
            await axios.post('http://localhost:4000/expenses/revenue', { 
                revenue: parsedValue, 
                month: months[currentMonth] 
            });
            alert('Receita salva com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar receita:', error);
            alert('Erro ao salvar a receita: ' + error.message);
        }
    } else {
        setRevenue('R$');
    }
};

  const handleChange = (e) => {
    const value = e.target.value
    .replace(/[^0-9.]/g, '')

    setRevenue(value)
  }

  const numericRevenue = parseFloat(revenue.replace(/[^0-9.]/g, '')) || 0
  const balanceValue = numericRevenue - totalExpense

  const handleSelect = (e) => {
    const category = e.target.value
    setSelectedCategory(category)
  }

  const changeMonth = (increment) => {
    setCurrentMonth(prevMonth => (prevMonth + increment + 12) % 12)
  }

  return (  
    <div className='flex flex-col md:flex-row gap-4 justify-between items-center border-2 rounded-md border-border-dark px-10 py-2'>
        <div className='flex items-center gap-10'>
            <FaArrowLeft onClick={() => changeMonth(-1)} /><p>{months[currentMonth]}</p><FaArrowRight onClick={() => changeMonth(1)} />
        </div>
        <label className='flex flex-col text-center' htmlFor="receita">Receita
        <input type="text" name="receita" id="receita" placeholder='Digite sua receita' className='placeholder:text-center text-center' value={revenue} onChange={handleChange} onBlur={handleBlur} /></label>
        <FinancialList title="Despesas" value={`${totalExpense.toFixed(2)}`} />
        <FinancialList title="Balanço" value={`${balanceValue.toFixed(2)}`}/>
        <select name="category" id="category" className='text-md lg:text-2xl border-2 border-border-dark rounded-md p-1 bg-secondary' onChange={handleSelect} value={selectedCategory}>
            <option value="Todas">Todas as categorias</option>
            <FinancialSelect />
        </select>
    </div>
  )
}

export default FinancesHeader