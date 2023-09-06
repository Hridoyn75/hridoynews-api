import express from 'express'
import { CallJugantorCampus } from './jugantor/campus.js'
import db from './db.js';

const app = express();

app.get('/', (req, res) => {
    const q = 'SELECT * FROM posts ORDER BY timestamp';

    db.query(q, (err, data) => {
        if (err) return res.status(500).json("Sorry, there was an error")
        res.json(data)
    })
})

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})

setInterval(CallJugantorCampus, 1000 * 60 * 30 )
