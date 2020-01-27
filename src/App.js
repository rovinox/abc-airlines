import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider, } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import Header from './components/Header';
import router from './router';



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

      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Header handledarkTheme={handledarkTheme} handleLightTheme={handleLightTheme}/>
        {router}
        <Box pt={4}>
          <Copyright />
        </Box>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
