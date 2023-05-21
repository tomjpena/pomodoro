import { Paper, Box, TextField, Button, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { addProject } from "../features/data/dataSlice"
import { reset } from "../features/data/dataSlice"

const NewProject = () => {
  const {user} = useSelector((state) => state.auth)
  const {isSuccess} = useSelector((state) => state.data)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(reset())
  },[dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const data = new FormData(e.currentTarget);

    const projectData = {
      'id': user._id,
      'title': data.get('projectName'),
      'description': data.get('description'),
    }

    dispatch(addProject(projectData))
    if(isSuccess) {
      navigate('/')
    }
  }
  return (
    <Paper elevation={0} sx={{ p: 7, m: -1, height: '100vh' }}>
       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography variant="h2" textAlign='center' sx={{ mb: 7 }}>
          Please enter all fields to add your new project
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          id="projectName"
          label="Project Name"
          name="projectName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="description"
          label="Description"
          id="description"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, color:'white' }}
        >
          Add Project
        </Button>        
      </Box>   
    </Paper>
  )
}
export default NewProject