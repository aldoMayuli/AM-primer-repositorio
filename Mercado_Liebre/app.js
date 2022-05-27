const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.join (__dirname ,'./public');

app.use ( express.static (publicPath));


app.listen( 3300 , ()=> {
    console.log ('Servidor corriendo en el puerto 3300');
});
app.get ("/" , (req , res ) =>{
       res.sendFile( path.resolve ('./view/home.html'))
})
