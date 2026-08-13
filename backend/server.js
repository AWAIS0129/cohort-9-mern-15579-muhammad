import express from 'express';
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req, res) =>{
    res.send("<h1>hello world</h1>")
});

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    
})

