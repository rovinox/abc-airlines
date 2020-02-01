require("dotenv").config()
const express = require("express")
const massive = require("massive")
const session = require("express-session")
const {signUpUser, logout, login,checkUser,getUser} = require("./AuthController")


const app = express()
app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );


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




app.post("/api/createuser", signUpUser)
app.get("/api/checkuser",checkUser)
app.get("/api/logout", logout)
app.post("/api/login", login)
app.get("/api/getuser/:user",getUser)

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(SERVER_PORT, ()=> console.log(`linting on ${SERVER_PORT}`))