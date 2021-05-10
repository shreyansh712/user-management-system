import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

const app = express();

dotenv.config({path:'config.env'})

const PORT = process.env.PORT || 8080;
//log requests
app.use(morgan('tiny'));

app.get('/', (req,res)=>{
    res.send("hello");
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});