const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const path = __dirname + '/views/';

app.use(express.json({ extended: true }));
app.use('/api/songs', require('./routes/songs.routes'));
app.get('/', (req, res) => {
    res.sendFile(path + 'index.html');
    // res.send('Please use /api/songs endpoint for receive list of songs');
});

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log('App has been started on the port:', PORT));

    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start();
