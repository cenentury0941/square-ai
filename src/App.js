import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/appbar/AppBar';
import HomePage from './components/HomePage/HomePage';
import GeneratePage from './components/GeneratePage/Generate';
import Login from './components/login/Login';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SignUp } from './components/SignupPage/SignUp';

const theme = createTheme({
  palette: {
    primary: {
      main:"#000",
    },
    secondary: {
      main: "#b51212",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/generate" element={<GeneratePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
