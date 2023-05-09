import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';


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

          </Routes>
        </Router>


      </ThemeProvider>
    </>
  )
}

export default App
