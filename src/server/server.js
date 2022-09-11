
'use strict'
//---------------------------------------------require section----------------------------------------------//
//required express js section
const express = require('express');
const app = express();
const http = require('http')
const cors=require("cors");
const cookieParser = require('cookie-parser')
app.use(cookieParser())
require("dotenv").config();






    // Cors
    const corsOptions = {
      origin: '*',
      credentials: true,
      optionSuccessStatus: 200
    }
    app.use(cors(corsOptions))
    // support json encoded bodies
    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));
    app.set('trust proxy', 1);




app.get('/', (req, res) => {
  res.send('Hello World!')
})



//-----------------------------------------------routes section--------------------------------------------//
const AllPostes_Routes=require("../routes/All_Postes");
app.use(AllPostes_Routes)







//----------------------------------------DataBase Connection----------------------------------------------//

//Connection With The Database
const database=require("../database/database");
async function start(PORT){// WHE MUST RUN DATABASE CONNECTION BEFORE LISTEN TO SERVER
  app.listen(PORT, async() => {
        try {
            await database.sync();  
            //USE TO SYNC ANY CHANGE CAN HAPPEN  ON DATABASE 
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }    
      console.log(`Example app listening on port ${PORT}`)
    })
    };
    
  

//---------------------------------------export file section---------------------------------------------//
    module.exports ={
    start: start,
    app:app
};
