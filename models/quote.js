const { Schema, model } = require('mongoose');

const quoteSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    offset: {
        type: Number,
        required: true
    }
})

module.exports = quoteSchema;
