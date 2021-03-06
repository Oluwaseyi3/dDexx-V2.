import React from "react";
import "./App.css"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider} from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import blue from '@material-ui/core/colors/blue';
import DdexHome from "./components/DdexHome";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: cyan[500],
      },
      secondary: {
        main: blue[500],
      }},
  typography:{
    fontFamily: "Comfortaa",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  }
})

  return (

    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <NavBar/>
     <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/DdexHome' component={DdexHome} />
             <Redirect to="/"/> 
     </Switch>
     </ThemeProvider>
   </BrowserRouter>
  
  );
}

export default App;
