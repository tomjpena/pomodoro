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
            <Route path='/' element={ <PrivateRoute/> }>
              <Route path='/' element= { <Home /> } />
            </Route>
            <Route path='/login' element={ <SignIn /> } />
            <Route path='/newproject' element={ <PrivateRoute/> }>
              <Route path='/newproject' element= { <NewProject /> } />
            </Route>
            <Route path='/project/:projectId' element={ <PrivateRoute/> }>
              <Route path='/project/:projectId' element= { <Project /> } />
            </Route>
            <Route path='/timer' element={ <PrivateRoute/> }>
              <Route path='/timer' element= { <Timer /> } />
            </Route>

          </Routes>
        </Router>


      </ThemeProvider>
    </>
  )
}

export default App
