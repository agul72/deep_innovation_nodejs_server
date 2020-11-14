const {Schema, model} = require('mongoose');
const quoteSchema = require('./quote');

const schema = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    youtubeId: {
        type: String,
        required: true
    },
    quotes: [{
        type: quoteSchema
    }]
});

module.exports = model('Song', schema, 'songs');
