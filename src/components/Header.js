import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Theme from './Theme';


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
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign up</Button>
            <Button color="inherit">profile</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}
