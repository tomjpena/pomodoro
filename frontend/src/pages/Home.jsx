import { Box, Paper, Typography, CssBaseline } from "@mui/material";

const Home = () => {
  
  return (
    <>
      <CssBaseline />
      <Paper elevation={0} sx={{ p: { xs: 2, sm: 4, md: 7 }, m: -1, height: '100vh' }}>
        <Typography variant="h1" textAlign='center' sx={{ fontSize: { xs: "h4.fontSize", sm: "h2.fontSize", md: "h1.fontSize" }, mt: { xs: 1, sm: 3 } }}>
          The Pomodoro Technique
        </Typography>
        <Box sx={{ mx: { xs: 1, sm: 10, md: 25 }, mt: { xs: 2, sm: 5 } }}>
          <Typography variant="body1" textAlign='center' sx={{ fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" }, mt: { xs: 1, sm: 5 } }}>
            Welcome to my app! This web app is designed around the powerful productivity tool known as the Pomodoro Technique, a time-management strategy developed by Francesco Cirillo in the late 1980s.
          </Typography>
          <Typography variant="body1" textAlign='center' sx={{ fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" }, mt: { xs: 1, sm: 5 } }}>
            Here's a step-by-step guide to how the Pomodoro Technique works:
          </Typography>
          <Box sx={{ mx: { xs: 1, sm: 5, md: 40 } }}>
            <Typography variant="body1" textAlign='center' sx={{ fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" }, mt: { xs: 1, sm: 5 } }}>
              1. <strong>Choose a Task</strong>
            </Typography>
            <Typography variant="body1" textAlign='center' sx={{ fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" }, mt: { xs: 1, sm: 1 } }}>
              2. <strong>Set the Pomodoro Timer</strong>
            </Typography>
            <Typography variant="body1" textAlign='center' sx={{ fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" }, mt: { xs: 1, sm: 1 } }}>
              3. <strong>Work on the Task</strong>
            </Typography>
            <Typography variant="body1" textAlign='center' sx={{ fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" }, mt: { xs: 1, sm: 1 } }}>
              4. <strong>End Work When the Timer Rings</strong>
            </Typography>
            <Typography variant="body1" textAlign='center' sx={{ fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" }, mt: { xs: 1, sm: 1 } }}>
              5. <strong>Take a Short Break</strong>
            </Typography>
            <Typography variant="body1" textAlign='center' sx={{ fontSize: { xs: "body2.fontSize", sm: "body1.fontSize" }, mt: { xs: 1, sm: 1 } }}>
              6. <strong>Repeat the Process</strong>
            </Typography>
          </Box>
        </Box>
        <Typography variant="h5" textAlign='center' sx={{ fontSize: { xs: "h6.fontSize", sm: "h5.fontSize" }, mt: { xs: 2, sm: 5 } }}>
          Are you ready to get started? Press the menu icon in the top left!
        </Typography>
      </Paper>
    </>
  )
}
export default Home