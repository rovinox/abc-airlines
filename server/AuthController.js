const bcrypt = require("bcryptjs")



module.exports = {
    signUpUser: async (req, res)=>{
        const {question1, question2, question3,answer1,answer2,answer3,firstName,lastName,email,password,file} = req.body
        
       
       
    
         const db = req.app.get("db")
        db.verify_User(email.email).then(userEmail =>{
            if(userEmail[0]){
                res.status(403).json("Looks like You Already Got An Account")
            } else{
            
                bcrypt.hash(password.password,8).then(newPassword =>{
                    
                    db.create_user(question1, question2, question3,answer1.answer1,answer2.answer2,answer3.answer3,firstName.firstName,lastName.lastName,email.email,newPassword,file).then((newUser)=>{
                        

                        req.session.user ={
                            email:newUser[0].email,
                            userId:newUser[0].user_id
                        }
                        res.status(200).json(newUser[0].user_id)
                    }).catch(err => console.log(err))
                }).catch(err => console.log(err))

            }
        }).catch(err => console.log(err))
    },

    login:(req,res) =>{
        
        const {email, password} = req.body
       

        const db = req.app.get("db")
        
        db.verify_User(email.email).then(user =>{
            if(user[0]){
                bcrypt.compare(password.password, user[0].password).then(matchedPassword =>{
                    
                    if(matchedPassword){
                        req.session.user ={
                            email:user[0].email,
                            user_id:user[0].user_id
                        }
                       
                        res.status(200).json(user[0].user_id)
                        console.log('user[0].email: ', user[0].user_id);
                        
                    }else{
                        res.status(403).json("Email Or Password Is Incorrect")
                    }
                })
             }else {
                 res.status(404).json("You Don't Have An Account")
             }
        })
    },

    checkUser: (req, res,next )=>{
        
        const {session} = req
        res.status(200).json(session.user)
        

    },

    logout:(req, res) =>{
        req.session.destroy()
        res.sendStatus(200)
        

    },

    getUser:(req,res) =>{

        const db = req.app.get("db")
        const {user} = req.params
        console.log('user befour: ', req.params);
        
        db.get_user(user).then(userInfo =>{
            res.status(200).json(userInfo[0])
            console.log('user: ', userInfo[0]);
        }).catch(err =>{console.log(err)})
    }
}