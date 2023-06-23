import {Avatar, Button, CssBaseline, TextField, Link, Box, Typography, Container} from '@mui/material'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


const Register = () => {
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
    const pass = data.get('password')
    const pass2 = data.get('password2')

    if (pass === pass2) {
      const userData = {
        'username': data.get('username'),
        'password': data.get('password'),
      }
  
      dispatch(register(userData))
    } else {
      console.log('Did not register');
    }   
    
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
            <AppRegistrationIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
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
             <TextField
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Re-Enter Password"
              type="password"
              id="password2"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color:'white' }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
export default Register