import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dataService from "./dataService";

// Retrieve user from local storage
const user = JSON.parse(localStorage.getItem('user'))

// Initial State
const initialState = {
  projects: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
}

export const addProject = createAsyncThunk('data/add', async (data, thunkAPI) => {
  try {
    return await dataService.addProject(data)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const getData = createAsyncThunk('data/get', async (thunkAPI) => {
  try {
    return await dataService.getData()
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const updateProject = createAsyncThunk('data/getOne', async (data, thunkAPI) => {
  try {
    return await dataService.updateProject(data)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteProject = createAsyncThunk('data/delete', async (data, thunkAPI) => {
  try {
    return await dataService.deleteProject(data)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})




export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false,
      state.isSuccess = false,
      state.isError = false,
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProject.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addProject.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.projects = []
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.projects = action.payload
      })
      .addCase(getData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.projects = []
        state.isSuccess = false
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.projects = action.payload
      })
      .addCase(deleteProject.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteProject.fulfilled, (state) => {
        state.projects = action.payload
      })
      .addCase(updateProject.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.isSuccess = false
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
  }
})

export const { reset } = dataSlice.actions

export default dataSlice.reducer