import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
import Theme from './Theme';
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


export default function Header(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              ABC Airlines 
            </Typography>
            <Button color="inherit"><Theme handledarkTheme={props.handledarkTheme}
            handleLightTheme={props.handleLightTheme}/></Button>

            <Link to="/login" className={classes.link}>
              <Button color="inherit">Login</Button>
            </Link>

            <Link to="/signup" className={classes.link}>
            <Button color="inherit">sign up</Button>
            </Link>

            <Link to="/profile" className={classes.link}>
            <Button color="inherit">profile</Button>
            </Link>

          </Toolbar>
        </AppBar>
      </div>
    )
}
