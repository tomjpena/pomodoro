import { createTheme, ThemeProvider } from '@mui/material/styles';

import SignIn from './components/SignIn';


function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
});

  return (
    <>
      <ThemeProvider theme={theme}>

      <SignIn />


      </ThemeProvider>
    </>
  )
}

export default App
