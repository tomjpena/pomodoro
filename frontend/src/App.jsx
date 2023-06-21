import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import NewProject from './pages/NewProject';
import Project from './pages/Project';
import Timer from './pages/Timer';


function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
});

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Router>
          <Routes>
            <Route path='/' element={ <PrivateRoute component={Home} /> } />
            <Route path='/login' element={ <SignIn /> } />
            <Route path='/newproject' element={ <PrivateRoute component={NewProject} /> } />
            <Route path='/project/:projectId' element={ <PrivateRoute component={Project} /> } />
            <Route path='/timer' element={ <PrivateRoute component={Timer} /> } />
          </Routes>
        </Router>


      </ThemeProvider>
    </>
  )
}

export default App
