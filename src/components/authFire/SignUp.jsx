import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" to="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, createUserData, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [inpError, setInpError] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const history = useHistory();

  const classes = useStyles();

  function handleOnchangePass(e) {
    e.preventDefault();

    if (passwordRef.current.value.length < 6) {
      setLoading(true);
      setInpError(true);
      setError('must be 6 or more charters');
    } else {
      setInpError(false);
      setError('');
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      passwordRef.current.value !== passwordConfirmRef.current.value &&
      !inpError
    ) {
      return setError('Password do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setSignUp(true);
      history.push('/dashboard');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);

    //date rassword after success sign up
    // passwordRef.current.value = '';
    // passwordConfirmRef.current.value = '';
  }

  console.log(error);

  if (!signUp) {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {error.length === 0 ? (
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          ) : (
            <Alert severity="info">{error}</Alert>
          )}

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              inputRef={emailRef}
              // ref={emailRef}
            />
            <TextField
              error={inpError}
              onChange={handleOnchangePass}
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // ref={passwordRef}
              inputRef={passwordRef}
            />
            <TextField
              onChange={handleOnchangePass}
              error={inpError}
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              name="password-confirm"
              label="Password Confirmation"
              type="password"
              id="password-confirm"
              autoComplete="current-password"
              //   ref={passwordConfirmRef}
              inputRef={passwordConfirmRef}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading}
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
                {/* <Link href="#" variant="body2"> */}
                {'Have an account? '}
                <Link to={'/login'}>Log in</Link>
                {/* </Link> */}
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Box mt={8}>
          <Copyright />
        </Box> */}
      </Container>
    );
  } else {
    return (
      <>
        YOU ARE SUCCESS SIGN UP
        <Link to="/dashboard">Go To my dashboard</Link>
      </>
    );
  }
}
