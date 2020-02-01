import React from 'react'
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
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-snapchat-square"></i>
        </div>
    )
}
