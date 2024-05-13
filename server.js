// utilizando o npm install express
// npm install cors

const express = require("express");
const cors = require("cors");

const app = express();

var corsOption = {
    origin : "http://localhost:8081" 
}
app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

// mensagem para o usuario
app.get("/",(req,res)=>{
    res.json({message: 'hello you´re using my server :), get out, or i will kindap you'});
});
// determinando uma porta para o localhost
const PORT = process.env.PORT || 8080

// fazendo com que o programa diga ao usuario á porta 
app.listen(PORT,()=>{
    console.log(`Server funcionando na porta ${PORT}.`);
});

