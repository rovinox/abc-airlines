const bcrypt = require("bcryptjs")


module.exports = {
    signUpUser:(req, res)=>{
        const {question1, question2, question3,answer1,answer2,answer3,firstName,lastName,email,password,file} = req.body
        console.log(req.body);
    //     const db = req.app.get("db")
    //     db.verify_User(email).then(userEmail =>{
            
    //         if(userEmail[0]){
    //             res.status(403).json("Looks like You Already Got An Account")
    //         } else{
    //             bcrypt.hash(password,10).then(newPassword =>{
    //                 db.signup(name, newPassword, email).then((newUser)=>{
    //                     req.session.user ={
    //                         email 
    //                     }
    //                     res.status(200).json(req.session.user)
    //                 }).catch(err => console.log(err))
    //             }).catch(err => console.log(err))

    //         }
    //     }).catch(err => console.log(err))
    },
}