import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyparser from 'body-parser';
import path from 'path';

const app = express();

dotenv.config({path:'config.env'})

const PORT = process.env.PORT || 8080;
//log requests
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));

//set view engine

app.set("view engine", "ejs");

//load assets

// app.use('/css',express.static)

app.get('/', (req,res)=>{
    res.send("hello");
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});