import React, {createContext, useContext, useState} from 'react';

const ExpensesContext = createContext()

export const ExpensesProvider = ({children}) => {
    const [expenses, setExpenses] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('Todas')
    const [selectedMonths, setSelectedMonths] = useState({first: '', second: ''})
    const months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const categories = ['alimentacao', 'lazer', 'investimento', 'lanche']
    

    return (
        <ExpensesContext.Provider value={{expenses, setExpenses, selectedCategory, setSelectedCategory, months, selectedMonths, setSelectedMonths, categories,}}>
            {children}
        </ExpensesContext.Provider>
    )
}

export const useExpenses = () => useContext(ExpensesContext)