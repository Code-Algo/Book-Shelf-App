import React from 'react'
import EditUserForm from '../forms/EditUserForm'
import {  Paper } from '@mui/material'
import {useTheme} from '@mui/material/styles'

export default function EditUser() {
    const theme = useTheme()

  return (
    <Paper sx={{m:5, 
        p:5, 
        justifyContent:"center", 
        backgroundColor: theme.palette.background.paper, 
        backgroundImage: theme.palette.background.paper,
        maxWidth:"1000px",
        mx:"auto"
    }}>
        <EditUserForm/>
    </Paper>
  )
}