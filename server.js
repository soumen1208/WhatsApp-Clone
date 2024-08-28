import express from 'express';
const app = express();
import 'dotenv/config';
import Connection from './database/db.js';
import Route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


app.use(cors());

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }))

app.use('/', Route);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

Connection();



let PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
    console.log(`Successfully connected to the port at ${PORT} `);
})