import React, { useRef, useState  } from 'react';
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
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
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
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: 'green',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);

      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/dashboard');
      console.log('object');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);

    //date rassword after success sign up
    // passwordRef.current.value = '';
    // passwordConfirmRef.current.value = '';
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {error.length === 0 ? (
          <Avatar className={classes.avatar}>
            <LockOpenIcon />
          </Avatar>
        ) : (
          <Alert severity="info">{error}</Alert>
        )}

        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        {/* {currentUser && currentUser.email} */}
        {/* {JSON.stringify(currentUser)} */}

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
            // error={inpError}
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password-login"
            autoComplete="current-password"
            // ref={passwordRef}
            inputRef={passwordRef}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            login
          </Button>
          <Grid container>
            {/* <Grid item xs>
            <Link href="#" variant="body2">
            Forgot password?
            </Link>
          </Grid> */}
            <Grid item>
              {/* <Link href="#" variant="body2"> */}
              {'Dont have account? '}
              <Link to={'/signup'}>Sign up</Link>
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
}
