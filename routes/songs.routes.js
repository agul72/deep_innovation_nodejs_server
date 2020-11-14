const {Router} = require('express')
const config = require('config')
const Song = require('../models/song')

const router = Router();

router.get('/', (req, res) => {
    try {
        Song.find({}, (err, songs) => {
            if (err) console.error(err);
            res.json(songs);
        });
    } catch (e) {
        console.log('songs.routes, getAll:', e.message)
        res.status(500).json({message: e.message})
    }
});

router.get('/filter', (req, res) => {
    const regex = req.query.regex || '';

    try {
        Song.find({"title": { $regex: regex, $options: "i" }}, (err, songs) => {
            if (err) console.error(err);
            res.json(songs);
        });
    } catch (e) {
        console.log('songs.routes, getAll:', e.message)
        res.status(500).json({message: e.message})
    }
})

module.exports = router;
