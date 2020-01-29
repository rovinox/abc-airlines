import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Camera from "@material-ui/icons/CameraAlt"
import {questionList} from "./QuestionList"



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  question: {
    display: 'flex',
    flexDirection: 'column',
    marginTop:"5px",
    height:"200px",
    justifyContent:"space-evenly"
  },
  input: {
    display: 'none',
  },
  pictureGrid:{
    // display:"flex",
    // flexDirection:"column",
    // alignItems:"center",
    textAlign:"center"
   
    },
    picture:{
      maxWidth:"300px",
    },
    pictureBtn:{
      margin:"auto 5px"
    }
}));

export default function SignUp() {
  
  const classes = useStyles();

  const [question1, setQuestion1] = React.useState('');
  const [question2, setQuestion2] = React.useState('');
  const [question3, setQuestion3] = React.useState('');
  const [file, setFile] = React.useState(null)
 

  React.useEffect(() => {
    console.log(questionList);
  }, [question1, question2, question3]);

  const handleQuestion1 = event => {
    setQuestion1(event.target.value);
   };

   const handleQuestion2 = event => {
    setQuestion2(event.target.value);
   };

   const handleQuestion3 = event => {
    setQuestion3(event.target.value);
   };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
            <Grid item xs={12} sm={6}>
              <div className={classes.pictureGrid}>
                <img className={classes.picture} src={!file ? "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" : file}/>
                  <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                   multiple
                   label='upload file' 
                   type='file' 
                  //  onChange={handleFileUpload}
                  ></input>
                <label htmlFor="contained-button-file">
               <Button className={classes.pictureBtn} color="primary" variant="contained" component="span" >
                 <Camera style={{marginRight:"4px"}}/>
                 picture
               </Button>
                </label>
              </div>
            </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>

              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
               />
               <FormHelperText>required</FormHelperText>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
              <FormHelperText>required</FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <FormHelperText>required</FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormHelperText>required</FormHelperText>
            </Grid>
          </Grid>
          <Grid className={classes.question}>
          <Typography>1. Please Select a Security Question</Typography>
          <FormControl fullWidth variant="outlined" >
          <Select
          fullWidth
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={question1}
          onChange={handleQuestion1}
          >
          {questionList.map(question =>{
            return(
            <MenuItem item xs={12} key={question.id} value={question.question} >{question.question}</MenuItem>
            )
          })}
          </Select>
          </FormControl>
          <TextField
                variant="outlined"
                required
                fullWidth
                label="answer"
                name="answer"
                />
              <FormHelperText>required</FormHelperText>
          </Grid>
          <Grid className={classes.question}>
          <Typography>1. Please Select a Security Question</Typography>
          <FormControl fullWidth variant="outlined" >
          <Select
          fullWidth
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={question2}
          onChange={handleQuestion2}
          >
          {questionList.map(question =>{
            return(
            <MenuItem item xs={12} key={question.id} value={question.question} >{question.question}</MenuItem>
            )
          })}
          </Select>
          </FormControl>
          <TextField
                variant="outlined"
                required
                fullWidth
                label="answer"
                name="answer"
                />
              <FormHelperText>required</FormHelperText>
          </Grid>
          <Grid className={classes.question}>
          <Typography>1. Please Select a Security Question</Typography>
          <FormControl fullWidth variant="outlined" >
          <Select
          fullWidth
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={question3}
          onChange={handleQuestion3}
          >
          {questionList.map(question =>{
            return(
            <MenuItem item xs={12} key={question.id} value={question.question} >{question.question}</MenuItem>
            )
          })}
          </Select>
          </FormControl>
          <TextField
                variant="outlined"
                required
                fullWidth
                label="answer"
                name="answer"
                />
              <FormHelperText>required</FormHelperText>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}