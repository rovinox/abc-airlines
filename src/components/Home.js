import React from 'react'
import TextLoop from "react-text-loop";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    text:{
        height:"400px",
        width:"400px",
        },
    textBox:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }    
  }));


export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <div className="home">
                <div className="loop">
                    <TextLoop>
                        <Typography variant="h4" >Eran <bold>40,000</bold> BOUNS MILES</Typography>
                        <Typography variant="h4">Save Up To $45 On Every Flight</Typography>
                        <Typography variant="h4">It,s Out Way. The ABC Way</Typography>
                        
                    </TextLoop>
                </div>
            </div>
            <div className={classes.textBox}>
                 <Typography className={classes.text} variant="h6">
                    <h2>Connections matter to us</h2> 
                    We’re all on this journey together, and you deserve to feel that we’re with you every step of the way. Our Connections Matter series is a testament to what we can achieve when we put caring at the center of everything we do. Every customer. Every flight. Every day.
                </Typography>
            </div>

        </div>
    )
}
