import {Avatar, Button, CssBaseline, TextField, Link, Box, Typography, Container} from '@mui/material'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';


const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {isError, isSuccess, message} = useSelector(state => state.auth)

  useEffect(() => {
    if(isSuccess) {
      navigate('/')
    }

    dispatch(reset())

  }, [isError, isSuccess, message, dispatch, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    
    const userData = {
      'username': data.get('username'),
      'password': data.get('password'),
    }

    dispatch(login(userData))
  }

  const demoLogin = () => {
    const userData = {
      username: 'test',
      password: '123456',
    }
    dispatch(login(userData))
  }

  return (
    <Container maxWidth="100vw">
      <CssBaseline />
      <Container component="main" maxWidth="xs" sx={{ mx: 'auto', mt: { xs: 5, md: 30 } }}>
        <Box
          maxWidth="xs"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color:'white' }}
            >
              Sign In
            </Button>
            <Button
              onClick={demoLogin}
              fullWidth
              variant="contained"
              sx={{ mb: 2, color:'white' }}
            >
              Demo Sign In
            </Button>
            <Link href="#" variant="body2" sx={[{ textDecoration:'none', color:'secondary' }, {'&:hover': { color: 'primary.dark' }}]}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
export default SignIn