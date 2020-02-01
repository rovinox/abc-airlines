import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider, } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import teal from "@material-ui/core/colors/teal";
import Header from './components/Header';
import Router from './router';
import { UserContext } from './components/UserContext';
import Fotter from './components/Fotter';



function Copyright() {
  return (
    <Typography style={{marginTop:"10px", marginBottom:"50px"}} variant="body1" color="textSecondary" align="center">
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'} {" "} ABC Airlines. All rights reserved.
    </Typography>
  );
}


function App() {

  const [changeTheme, setChangeTheme] = React.useState("dark")
  const [logedin, setLogedin] = React.useState(false)
  const [user, setUser] = React.useState("")
  const [mediaPreview, setMediaPreview] = React.useState("")
  
  React.useEffect(()=>{
    
    }, [logedin,user, mediaPreview])



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
      <UserContext.Provider value={{logedin, setLogedin, user, setUser, mediaPreview, setMediaPreview}}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
            <HashRouter>
              <Header handledarkTheme={handledarkTheme} handleLightTheme={handleLightTheme}/>
              <Router logedin={logedin} />
              <Fotter/>
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
