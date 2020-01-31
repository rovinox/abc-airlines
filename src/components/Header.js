import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link, withRouter} from "react-router-dom"
import Theme from './Theme';
import axios from "axios"
import {UserContext} from "./UserContext"

// import Profile from "./Profile"
// import Login from './Login';
// import SignUp from "./SignUp"

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      
    },
    link:{
      textDecoration:"none"
    }
  }));


 function Header(props) {

  
    const classes = useStyles();

    const {logedin, setLogedin} = useContext(UserContext)

    React.useEffect(()=>{
      // axios.get("/api/checkuser").then(user=>{
      //   if(user){
      //     setLogedin(true)
      //   } else{
      //     setLogedin(false)
      //   }
      // })
    },[])


    const handleLogout = () =>{
      axios.get("/api/logout")
      props.history.push("/")
      setLogedin(false)
      console.log("jdjd");
    }

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              ABC Airlines 
            </Typography>
            <Button color="inherit"><Theme handledarkTheme={props.handledarkTheme}
            handleLightTheme={props.handleLightTheme}/></Button>

            {!logedin ? <Link to="/login" className={classes.link}>
              <Button onChange={handleLogout} color="inherit">Login</Button>
            </Link> : null}

            { !logedin ?<Link to="/signup" className={classes.link}>
            <Button color="inherit">sign up</Button>
            </Link> : null}
            {logedin ? <Link to="/profile" className={classes.link}>
            <Button color="inherit">profile</Button>
            </Link> : null}

            {logedin ?<Button  onClick={handleLogout}>sign out</Button> : null }
            

          </Toolbar>
        </AppBar>
      </div>
    )
}

export default withRouter(Header)