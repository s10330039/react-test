// import React from 'react';
import logo from './logo.svg';
import { 
  Button, 
  CssBaseline, 
  Grid, 
  Paper, 
  Typography,
  TextField,
  // FormControl,
  // FormControlLabel,
  // Checkbox,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles(function(theme) {
  return {
    root: {
      height: '100vh',
      background: "green"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    logo: {
      // transitionDelay: "1s",
      width: "450px",
      height: "450px",
      backgroundColor: "yellow",
      "&:hover": {
        transform: "rotate(270deg)"
      }
    },
  }
})

function App() {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8}>
        <img src={logo} alt="" className={classes.logo} />
      </Grid>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={24} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate method="post" onSubmit={void(0)}>
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="account"
              label="Account"
              name="account"
              autoComplete="account"
              autoFocus
            ></TextField>
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
            ></TextField>

            {/* <FormControlLabel
              control={ <Checkbox value="remember" color="primary" /> }
              label="記住我"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

          </form>
        </div>
      </Grid>
    </Grid>
  );
}
export default App;
