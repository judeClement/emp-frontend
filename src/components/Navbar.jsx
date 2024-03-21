import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import logo from './Images/clipart-writing-writing-name-18.png'

const Navbar = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{color:'#0C261D', backgroundColor: '#fbfada',height:'70px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Bricolage Grotesque' }}>
          <Box display="flex" alignItems="center">

          <img src={logo} alt="Logo" style={{ height: '65px', marginRight: '10px' }}/>
            Employee Dashboard </Box>
          </Typography>

        <Button variant='contained' color="primary" style={{marginRight:'20px',backgroundColor: '#436850'}}>
          <Link to={'/'} style={{textDecoration:"none",color:'white'}}>Home</Link>
        </Button> 
          <Button variant='contained' color="inherit" style={{backgroundColor: '#436850'}}><Link to={"/form"} style={{textDecoration:"none",color:'white'}}>Employee Form</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar