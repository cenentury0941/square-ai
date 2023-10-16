import React from 'react'
import "../common/Slide.css";
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export const SignUp = () => {

    const navigate = useNavigate(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
          confirmPassword: data.get('confirmPassword'),
        });
        console.log("out");
        if(data.get('password')===data.get('confirmPassword') && data.get('email')!=="" && data.get('password')!=="" && data.get('confirmPassword')!== "") {
          navigate('/conjure/')
        }
        else{
          window.alert('Please enter Valid Credentials');
        }
      };
  return (
    <Grid container component="main" sx={{ height: '100vh', marginTop: '40px'}}>
    <CssBaseline />
    <div className="Slide Home-Slide-Container">
        <div className="Home-Horizontal-Divider">
            <div className="Home-Title-Container">
                <div className="Home-Logo" />
                <div className="Home-Title">Conjure</div>
            </div>
            <br/>
            <div className="Home-Sub-Title-Container">
                <div className="Home-Sub-Title">
                    Generative AI based rapid prototyping
                </div>
            </div>
        </div>
        <Grid item marginTop={'20px'} marginLeft={4} xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ height: '70%' }}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
         <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="confirmPassword"
            id="confirmPassword"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
        </div>
</Grid>

  )
}
