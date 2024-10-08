const fs = require('fs').promises;
const { X } = require('@mui/icons-material');
const { register } = require('module');
const path = require('path');
const { title } = require('process');

const userFilePath = path.join(__dirname,'../../src/componentes/usuariosRegistrados.json')

const controller ={
    register: async function(req, res){
        try{

            const userData = await fs.readFile(userFilePath, "utf-8");
            const users = JSON.parse(userData);
            
            const ultimo = users.length;
            const usuarioNuevo = {
                id: ultimo + 1,
                identificacion: req.body.identificacion,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                fechaNacimiento: req.body.fechaNacimiento,
                password: req.body.password,
                estado: "Activo",
                rol: "Usuario",
                fechaCreacion: new Date()
            };

           console.log(users);
           console.log(req.body);
            for(let x of users){
            if(x.email === req.body.email){
                res.status(400).send("El email ya existe");
                return
            }
        }
        users.push(usuarioNuevo);
        
        await fs.writeFile(userFilePath, JSON.stringify(users,null, 4));
        
        res.status(200).send("Exito");
        } catch (error){
            console.error("Error al procesar el registro:", error);
            res.status(500).send("Error interno del servidor");
        }
    },

    login: async function (req, res){
        try{
            const usersData = await fs.readFile(userFilePath, "utf-8");
            const users = JSON.parse(usersData);

            for(let x of users){
                if(
                    x.email === req.body.email &&
                    x.password === req.body.password &&
                    x.rol === req.body.rol 
                ){
                   return res.json({
                    nombres: x.nombres,
                    apellidos: x.apellidos,
                    email: x.email,
                   });
                }
            }
            res.json({title:"error"});
        } catch (Error){
            console.error("Error al procesar el registro:", Error);
            res.status(500).send("Error interno del servidor");
        }
    }, 
};

module.exports = controller;

//codigo JSON registro local
// const fs = require('fs').promises;
// const { password } = require('@mui/icons-material');
// const path = require('path');

// const userFilePath = path.join(__dirname, "../../src/componentes/usuariosRegistrados.json");

// const controller = {
//     register: async function (req, res) {
//         try {
//             const usersData = await fs.readFile(userFilePath, "utf8");
//             const users = JSON.parse(usersData);

//             const ultimo = users.length;
//             const usuarioNuevo = {

//                 id: ultimo + 1,
//                 identificacion: req.body.identificacion,
//                 nombres: req.body.nombres,
//                 apellidos: req.body.apellidos,
//                 email: req.body.email,
//                 direccion: req.body.direccion,
//                 telefono: req.body.telefono,
//                 fechaNacimiento: req.body.fechaNacimiento,
//                 password: req.body.password,
//                 estado: "activo",
//                 rol: req.body.rol,
//                 fecha_creacion: new Date(),
//                 ciudad: req.body.ciudad,
//             };

//             for (x of users) {
//                 if (x.email === req.body.email || x.identificacion === req.body.identificacion) {
//                     res.status(400).send("El email ya existe");
//                     return;
//                 }
//             }

//             users.push(usuarioNuevo);

//             await fs.writeFile(userFilePath, JSON.stringify(users, null, 4)),

//                 res.status(200).send("Usuario creado con exito");
//         } catch (error) {
//             console.error("Error al procesar el registro:", error);
//             res.status(500).send("Error interno del servidor");
//         }
//     },
//     login: async function (req, res) {
//         try {
//             const usersData = await fs.readFile(userFilePath, "utf-8");
//             const users = JSON.parse(usersData);

//             //const { email, password, rol } = req.body;
//             // if(users.email === req.body.email){
//             //     console.log("son iguales2")
//             // }
//             // const resultado = users.map((index,user) => {
//             //             if(user[index].email === req.body.email && user[index].password === req.body.password){
//             //                 return res.json(user[index])
//             //             }
//             // })


//             console.log(req.body.email)
//             console.log(req.body.password)
//             console.log(req.body.rol)



//             for (let i = 0; i < users.length; i++) {
//                 if (users[i].email === req.body.email && users[i].password === req.body.password && users[i].rol === req.body.rol) {
//                     console.log("encontrado")
//                     return res.json({
//                         nombres: users[i].nombres,
//                         apellidos: users[i].apellidos,
//                         email: users[i].email,
//                     });
//                 }
//             }

//             // for (x of users) {
//             //     if (x.email === email && x.password === password && x.rol === rol) {
//             //         console.log("Usuario autenticado:", x);
//             //         return res.json({
//             //             nombres: x.nombres,
//             //             apellidos: x.apellidos,
//             //             email: x.email,
//             //         });
//             //     }
//             // }

//             //console.log("Credenciales incorrectas para:", { email, rol,password });
//             res.status(401).json({ error: "Credenciales incorrectas" });
//         } catch (error) {
//             console.error("Error al procesar el inicio de sesión:", error);
//             res.status(500).json({ error: "Error interno del servidor" });
//         }
//     },
// }
// module.exports = controller;

//codigo JSON registro remoto

// const express = require("express") //framework
// const app = express()
// const axios = require('axios'); 
// const cors = require("cors"); 
// app.use(cors());

// const controller ={
//     register: function(req,res){
//         let config = {
//             method: "GET",
//             maxBodyLength: Infinity,
//             url: 'https://api.jsonbin.io/v3/b/66562705ad19ca34f870ac1d',
//             headers: {
//               'Content-Type': 'application/json',
//               "X-Master-Key": "$2a$10$d.TKppa3f329XgMq4Lx/RuWcgcIZaZoEx9A4WCKKZdPbSXwPRrhze"
//             }
//         };
//         axios(config)
//             .then(result => {
//                 let id = result.data.record.length+1
//                     const usuarioNuevo = {

//                         id: id,
//                         identificacion: req.body.identificacion,
//                         nombres: req.body.nombres,
//                         apellidos: req.body.apellidos,
//                         email: req.body.email,
//                         direccion: req.body.direccion,
//                         telefono: req.body.telefono,
//                         fechaNacimiento: req.body.fechaNacimiento,
//                         password: req.body.password,
//                         estado: "activo",
//                         rol: req.body.rol,
//                         fecha_creacion: new Date(),
//                         ciudad: req.body.ciudad,
//                     };
//                     if(result.data.record.length === 0){
//                         result.data.record.push(usuarioNuevo);
//                     }else{
//                         for(x of result.data.record){
//                             if(x.email === req.body.email){
//                                 res.status(400).send("Usuario ya existe")
//                                 return
//                             }
//                         }
//                         result.data.record.push(usuarioNuevo)
//                     }

//                     fetch("https://api.jsonbin.io/v3/b/66562705ad19ca34f870ac1d", {
//                         method : "PUT",
//                         headers:{
//                             'Content-Type': 'application/json',
//                             "X-Master-Key": "$2a$10$d.TKppa3f329XgMq4Lx/RuWcgcIZaZoEx9A4WCKKZdPbSXwPRrhze"
//                         },
//                         body: JSON.stringify(result.data.record)
//                     })
//                     .then(response => {
//                         if (response.status === 200) {
//                           res.status(200).send('ok')
//                           return
//                         }
//                         else {
//                           res.status(400).send("No Ok")
//                           return
//                         }
//                     })
//             })
//     }
// }

// module.exports = controller;