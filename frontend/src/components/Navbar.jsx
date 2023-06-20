import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, Divider, List, ListItemButton, ListItemIcon, ListItemText, Link } from "@mui/material"
import { logout } from '../features/auth/authSlice';
import { getData } from "../features/data/dataSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Menu, ChevronLeft, AddCircleOutline, Home, MenuBook } from '@mui/icons-material'

const Navbar = () => {
  const dispatch = useDispatch()

  const { projects } = useSelector((state) => state.data)  
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  

  const signout = () => {
    dispatch(logout())
  }                                                                                               

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    console.log('drawer toggled');
    setDrawerOpen(!drawerOpen);
  }

  return (
    <>
      <Drawer anchor="left" open={drawerOpen}>
        <Box>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft />
          </IconButton>

          <Divider />

          <Link href="/" underline="none" color='white'>
              <ListItemButton>
                <ListItemIcon> <Home /> </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
          </Link>

          <Divider />

          <List component='nav'>
            <Link href="/newproject" underline="none" color='white'>
              <ListItemButton>
                <ListItemIcon> <AddCircleOutline /> </ListItemIcon>
                <ListItemText primary="Add a project" />
              </ListItemButton>
            </Link>

            {projects.map((project) => (
              <Link href={`/project/${project._id}`} underline="none" color='white' key={project._id}>
                <ListItemButton>
                <ListItemIcon> <MenuBook /> </ListItemIcon>
                <ListItemText primary={project.title} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
              >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, mx: 'auto' }}>
              Timer-Doro
            </Typography>
            { user ? <Button color="inherit" onClick={signout}>Logout</Button> : <></>}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
export default Navbar