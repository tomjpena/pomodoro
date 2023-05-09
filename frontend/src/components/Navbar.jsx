import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material"
import { logout } from '../features/auth/authSlice';
import { useDispatch } from "react-redux";
import { Menu } from '@mui/icons-material'

const Navbar = () => {
  const dispatch = useDispatch()

  const signout = () => {
    dispatch(logout())
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mx: 'auto' }}>
            Timer-Doro
          </Typography>
          <Button color="inherit" onClick={signout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Navbar