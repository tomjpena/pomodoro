import { Paper, Box, Typography, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

const Project = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const { projects } = useSelector((state) => state.data)
  const [ project, setProject ] = useState()
 
  useEffect(() => {
    setProject(projects.find((project) => project._id === projectId))
    localStorage.setItem('projectId', projectId)
  }, [projects, projectId])

  const handleClick = () => {
    navigate('/timer')
  }

  return (
    <Paper elevation={0} sx={{ p: { xs: 2, sm: 4, md: 7 }, m: -1, height: '100vh' }}>
      <Box noValidate sx={{ mt: 1 }}>
        {project ?
          <>
          <Typography variant="h2" textAlign='center' sx={{ fontSize: { xs: "h4.fontSize", sm: "h3.fontSize", md: "h2.fontSize" }, mb: 7 }}>
            {project.title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', mx: { xs: 1, sm: 10, md: 60 } }}>
            <Box>
              <Typography variant="h5" textAlign='left' my={3} sx={{ fontSize: { xs: "body1.fontSize", sm: "h6.fontSize", md: "h5.fontSize" } }}>
                Number of Pomodoros: {project.pomodoros}
              </Typography>
              <Typography variant="h5" textAlign='left' sx={{ fontSize: { xs: "body1.fontSize", sm: "h6.fontSize", md: "h5.fontSize" } }}>
                Time spent on project: {project.pomodoros * 25} minutes
              </Typography>
            </Box>
            <Box sx={{ mt: { xs: 4, sm: 0 } }}>
              <Button variant="contained" sx={{ p: 3 }} onClick={handleClick}>
                Start a Pomodoro
              </Button>
            </Box>
          </Box>
        
          </>
          :
          'Loading...'
        }

        
      </Box>   
    </Paper>
  )
}
export default Project