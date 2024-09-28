const mongoose = require('mongoose');

const financialSchema = new mongoose.Schema({
    title: { type: String, required: true },
    indValue: { type: Number, required: true },
    category: { type: String, required: true },
    month: { type: String, required: true },
    revenue: {type: String}
});

const Financial = mongoose.model('Financial', financialSchema);

module.exports = Financial;