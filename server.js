import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyparser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({path:'config.env'})

const PORT = process.env.PORT || 8080;
//log requests
app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({ extended: true }));

//set view engine

app.set("view engine", "ejs");

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

// app.use('/css',express.static)

app.get('/', (req,res)=>{
    res.render("index");
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});