const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res) =>{
    // res.send("Saludando desde el backend")
    let config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: 'https://api.jsonbin.io/v3/b/66562705ad19ca34f870ac1d',
        headers: {
          'Content-Type': 'application/json',
          "X-Master-Key": "$2a$10$d.TKppa3f329XgMq4Lx/RuWcgcIZaZoEx9A4WCKKZdPbSXwPRrhze"
        }
    };
    axios(config)
        .then(result => {
            res.send(result.data.record)
        })
})

const user = require("./controller/userController");
app.use("/registro-usuario",user.register);
app.use("/login",user.login);

const PORT = 3001
app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto ", PORT)
})