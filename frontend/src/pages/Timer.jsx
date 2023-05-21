import { Paper, Box, CircularProgress, Typography } from "@mui/material"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { updateProject } from "../features/data/dataSlice"
import alarm from '../assets/end.wav'

const Timer = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [countDownTime, setCountDownTime] = useState(25 * 60);  // Total time in seconds
  const { projects } = useSelector((state) => state.data)
  const audio = useRef(null)

  useEffect(() => {
    audio.current = new Audio(alarm)

    const interval = setInterval(() => {
      setCountDownTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);  // Stop the interval
          audio.current.play()
          return 0;
        } else {
          return prevTime - 1;  // Decrease the time
        }
      });
    }, 1000);  // Runs every second

    // Clear interval on component unmount
    return () => {
      clearInterval(interval)
      if (!audio.current.paused) {
        audio.current.pause()
        navigate('/')
      }
    }
  }, [])

  useEffect(() => {
    if (countDownTime === 0) {
      audio.current.play()
      const projectId = localStorage.getItem('projectId')
      const project = projects.find((project) => project._id === projectId)
      const newPomodoros = project.pomodoros + 1
      const updatedProject = {
        'id': projectId,
        'pomodoros': newPomodoros
      }
      dispatch(updateProject(updatedProject))
      
      setInterval(() => {
        navigate('/')
      }, 1000)
    }
  }, [countDownTime, audio, navigate])

  // Convert the time to minutes and seconds
  const minutes = Math.floor(countDownTime / 60);
  const seconds = countDownTime % 60;
  // Pad the seconds with a zero if necessary
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  return (
    <Paper elevation={0} sx={{ p: 7, m: -1, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
       <Box sx={{ position: 'relative', display: 'inline-flex',  }}>
        <CircularProgress size={400} variant="determinate" value={(1 - countDownTime / (25 * 60)) * 100} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h2" component="div" color="text.secondary">
            {`${minutes}:${formattedSeconds}`}
          </Typography>
        </Box>
      </Box>  
      <Box>
        <iframe src="https://open.spotify.com/embed/playlist/66ObUW8grgqgWyFemzkWqm?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy"></iframe>
      </Box> 
    </Paper>
  )
}
export default Timer