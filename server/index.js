const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const expensesRoutes = require('./routes/expenses');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/expenses', expensesRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
