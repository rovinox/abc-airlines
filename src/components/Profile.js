import axios from "axios"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));




export default function Profile() {

  const [user, SetUser] = React.useState("")
  const [userInfo, setUserInfo] = React.useState([])

  React.useEffect(()=>{
    axios.get("/api/checkuser").then(res=>{
   
        SetUser(res.data.email)

     
    }).then(()=>{
      axios.get("/api/getuser",{user}).then(res=>{
        console.log(res.data);
        setUserInfo(res.data)
      }).catch(err=>{console.log(err);})
    }).catch(err=>{console.log(err);})
    
  }, [user]) 

  return (
    <div>
      profile
    </div>
  )
}
