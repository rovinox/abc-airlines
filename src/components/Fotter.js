import React from 'react'
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent:"center",
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(3),
      },
    },
  }));

export default function Fotter() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-snapchat-square"></i>
        </div>
    )
}
