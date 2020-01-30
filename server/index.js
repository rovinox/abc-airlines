require("dotenv").config()
const express = require("express")
const massive = require("massive")
const session = require("express-session")
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
const cors = require("cors")
const {signUpUser, logout, login,checkUser} = require("./AuthController")


const app = express()
app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );

app.use(cors())
const {SERVER_PORT, CONNECTING_STRING, SECRET} = process.env


massive(CONNECTING_STRING).then(db => {
    app.set("db", db)
    console.log("Database Connected");
}).catch(err => console.log(err))

app.use(session({
    secret:SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24
    }

}))


AWS.config.update({
    accessKeyId:process.env.ACCESS_ID,
    secretAccessKey: process.env.SECRET_KEY
  });
  
  // configure AWS to work with promises
  AWS.config.setPromisesDependency(bluebird);
  
  // create S3 instance
  const s3 = new AWS.S3();
  
  // abstracts function to upload a file returning a promise
  const uploadFile = (buffer, name, type) => {
    const params = {
      ACL: 'public-read',
      Body: buffer,
      Bucket:process.env.BUCKET_S3,
      ContentType: type.mime,
      Key: `${name}.${type.ext}`
    };
    return s3.upload(params).promise();
  };
  
  // Define POST route
  app.post('/test-upload', (request, response) => {
    
    const form = new multiparty.Form();
      form.parse(request, async (error, fields, files) => {
        if (error) throw new Error(error);
        try {
          const path = files.file[0].path;
          const buffer = fs.readFileSync(path);
          const type = fileType(buffer);
          const timestamp = Date.now().toString();
          const fileName = `bucketFolder/${timestamp}-lg`;
          const data = await uploadFile(buffer, fileName, type);
          return response.status(200).send(data);
        } catch (error) {
          return response.status(400).send(error);
        }
      });
  });

app.post("/api/createuser", signUpUser)
app.get("/api/checkuser",checkUser)
app.get("/api/logout", logout)
app.post("/api/login", login)


app.listen(SERVER_PORT, ()=> console.log(`linting on ${SERVER_PORT}`))