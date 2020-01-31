import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider, } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import teal from "@material-ui/core/colors/teal";
import Header from './components/Header';
import router from './router';
import { UserContext } from './components/UserContext';
import axios from "axios"



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function App() {

  const [changeTheme, setChangeTheme] = React.useState("light")
  const [logedin, setLogedin] = React.useState(false)
  const [user, setUser] = React.useState("")
  
  React.useEffect(()=>{
      // axios.get("/api/checkuser").then(user=>{
      //   if(user){
      //     setLogedin(true)
      //   } else{
      //     setLogedin(false)
      //   }
      // })
      console.log(user);
      console.log(logedin);
    }, [logedin,user])



  const theme = createMuiTheme({
    palette: {
      type:changeTheme,
      primary: teal,
      
    
    }
  });


  const handledarkTheme = () =>{
    setChangeTheme("dark")
 }

 const handleLightTheme = () =>{
  setChangeTheme("light")
 }

  return (
    
    <div>
      <UserContext.Provider value={{logedin, setLogedin, user, setUser}}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
            <HashRouter>
              <Header handledarkTheme={handledarkTheme} handleLightTheme={handleLightTheme}/>
              {router}
            </HashRouter>
            <Box pt={4}>
            <Copyright />
            </Box>
        </MuiThemeProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
