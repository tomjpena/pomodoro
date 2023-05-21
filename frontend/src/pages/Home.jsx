import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../features/auth/authSlice';
import { Box, Paper, Typography } from "@mui/material";

const Home = () => {
  
  return (
      <Paper elevation={0} sx={{ p: 7, m: -1 }}>
        <Typography variant="h1" textAlign='center'>
          The Pomodoro Technique
        </Typography>
        <Box mx={25}>
          <Typography variant="body1" textAlign='center' mt={10}>
            Welcome to my app! This web app is designed around the powerful productivity tool known as the Pomodoro Technique, a time-management strategy developed by Francesco Cirillo in the late 1980s. This page will explain the basics of this technique and how it works.
          </Typography>
          <Typography variant="body1" textAlign='center' mt={5}>
            The Pomodoro Technique is based on the principle of breaking down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are known as "pomodoros", the plural in Italian of tomato, inspired by the tomato-shaped kitchen timer that Cirillo used as a university student.
          </Typography>
          <Typography variant="body1" textAlign='center' mt={5}>
            Here's a step-by-step guide to how the Pomodoro Technique works:
          </Typography>
          <Box mx={40}>
            <Typography variant="body1" mt={5}>
              1. <strong>Choose a Task:</strong> Decide on the task you want to work on. This could be anything from studying for a test to writing a report, cleaning a room, or learning a new skill.
            </Typography>
            <Typography variant="body1" mt={1}>
              2. <strong>Set the Pomodoro Timer:</strong> Using our web app, set the timer to 25 minutes. This is your cue to start working on your task.
            </Typography>
            <Typography variant="body1" mt={1}>
              3. <strong>Work on the Task:</strong> Immerse yourself in the task for the next 25 minutes. If a distraction pops into your head, write it down, but get back to the task immediately.
            </Typography>
            <Typography variant="body1" mt={1}>
              4. <strong>End Work When the Timer Rings:</strong> As soon as your timer rings, stop working on the task.
            </Typography>
            <Typography variant="body1" mt={1}>
              5. <strong>Take a Short Break:</strong> Set the timer on our app for a 5-minute break. This is an essential part of the process. You can stretch, grab a coffee, or do anything but work during this period. This helps to rest your brain and keep it fresh for the next Pomodoro.
            </Typography>
            <Typography variant="body1" mt={1}>
              6. <strong>Repeat the Process:</strong> After your break, go back to step 2. Every four pomodoros, take a longer break, typically 15-30 minutes. This helps to prevent burnout and keeps your mind focused and creative.
            </Typography>
          </Box>
        </Box>
        <Typography variant="h5" textAlign='center' mt={5}>
          Are you ready to get started? Press the menu icon in the top left!
        </Typography>
      </Paper>
  )
}
export default Home