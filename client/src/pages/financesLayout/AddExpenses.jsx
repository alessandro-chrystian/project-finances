import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useExpenses } from '../../context/ExpensesContext';
import FinancialSelect from '../../components/FinancialSelect';
import LinkButton from '../../components/LinkButton';

const AddExpenses = () => {
    const { setExpenses, months } = useExpenses();
    const [expense, setExpense] = useState({
        title: '',
        indValue: '',
        category: '',
        month: months[new Date().getMonth()],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense({
            ...expense,
            [name]: value,
        });
    };

    const fetchExpenses = async () => {
        try {
            const response = await axios.get('http://localhost:4000/expenses');
            setExpenses(response.data); 
        } catch (err) {
            console.error('Erro ao buscar despesas:', err);
            alert('Erro ao buscar despesas: ' + err.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (expense.category === '') {
            alert('Por favor, insira uma categoria válida!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/expenses', expense);
            setExpenses((prevExpenses) => [...prevExpenses, response.data]);
            setExpense({
                title: '',
                indValue: '',
                category: '',
                month: months[new Date().getMonth()],
            });
        } catch (err) {
            console.error('Erro ao adicionar despesa:', err);
            alert('Erro ao adicionar despesa: ' + err.message);
        }
    };

    useEffect(() => {
        fetchExpenses(); 
    }, []);

    return (
        <div className='mt-5 flex flex-col lg:flex-row gap-5  w-[75%] m-auto items-center'>
            <form className='flex w-full flex-col lg:flex-row gap-10' onSubmit={handleSubmit}>
                <div className='flex flex-col lg:flex-row w-full justify-between border-2 border-border-dark rounded-md p-2'>
                    <select name="month" value={expense.month} onChange={handleChange}>
                        {months.map((month, index) => (
                            <option key={index} value={month}>{month}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder='Título da despesa'
                        className='w-[60%] lg:border-r-2 border-border-dark'
                        name="title"
                        value={expense.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="indValue"
                        placeholder='Valor da despesa'
                        value={expense.indValue}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="category"
                        id="category"
                        value={expense.category}
                        className='lg:border-l-2 border-border-dark'
                        onChange={handleChange}
                        required
                    >
                        <option value="">Categoria</option>
                        <FinancialSelect />
                    </select>
                </div>
                <button type="submit" className='text-2xl'>Adicionar</button>
            </form>
            <LinkButton />
        </div>
    );
};

export default AddExpenses;