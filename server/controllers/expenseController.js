const Financial = require('../models/Financial');

const getExpenses = async (req, res) => {
    try {
        const expenses = await Financial.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter despesas.', error });
    }
};

const addExpense = async (req, res) => {
    const { title, indValue, category, month } = req.body;

    try {
        const newExpense = new Financial({
            title,
            indValue,
            category,
            month,
        });

        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar despesa.', error });
    }
};

const updateRevenue = async (req, res) => {
    const { revenue, month } = req.body;

    try {
        const existingFinancial = await Financial.findOne({ month });

        if (existingFinancial) {
            existingFinancial.revenue = revenue;
            await existingFinancial.save();
        } else {
            const newFinancial = new Financial({ month, revenue });
            await newFinancial.save();
        }

        res.status(200).json({ message: 'Receita atualizada com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar receita:', error);
        res.status(500).json({ message: 'Erro ao atualizar receita.', error });
    }
};

module.exports = { getExpenses, addExpense, updateRevenue };