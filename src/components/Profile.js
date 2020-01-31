import axios from "axios"
import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { UserContext } from './UserContext';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));



export default function Profile() {

  const classes = useStyles();
  const {user, setUser} = useContext(UserContext)
  const [userInfo, setUserInfo] = React.useState([])

  React.useEffect(()=>{
   
      axios.get(`/api/getuser/${user}`).then(res=>{
        
        setUserInfo([res.data])
        console.log(res.data);
    }).catch(err=>{console.log(err);})
    
  }, [user]) 
   const displayUser = userInfo.map(user =>{
     return(
       <Container key={user.user_id}>
        <Paper>
          <Typography align="center" variant="h3">{user.first_name}{" "}{user.last_name}</Typography>
        </Paper>
        <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
      <Typography className={classes.heading}>1.{ " "}{user.question1}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography>{user.answer1}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
   <Typography className={classes.heading}>2.{ " "}{user.question2}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography>{user.answer2}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
      <Typography className={classes.heading}>3.{ " "}{user.question3}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography>{user.answer2}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      
      
    </div>

       </Container>
     )
   })

  return (
    <div>
      {displayUser}
      profile
    </div>
  )
}
