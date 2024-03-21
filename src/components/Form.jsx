import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import {Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';//popup
import logo from './Images/clipart-writing-writing-name-18.png'


const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [open, setOpen] = useState(false); // State for controlling dialog visibility

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, designation, salary, location);
        // Handle form submission, e.g., send data to backend
        setOpen(true); // Show the dialog when form is submitted
    }
    const handleClose = () => {
        setOpen(false); // Close the dialog
    };
    return (
        <Box sx={{backgroundImage: `url(https://www.pngarts.com/files/7/Training-PNG-Photo.png)`, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Box sx={{ border: '4px solid #12372A', borderRadius: '10px', p: 3, width: '400px', textAlign: 'center',backgroundColor:'#E7EBE9' }}>
                <Typography variant="h4" gutterBottom sx={{fontFamily: 'Bricolage Grotesque'}}>Employee Form</Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ '& > :not(style)': { my: 2 } }}>
                        <TextField                               
                               sx={{ '& fieldset': { borderColor: '#12372A !important' } }} // Change border color to red
                            type="text"
                            variant='outlined'
                            color='success'
                            label="First Name"
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                            fullWidth
                            required
                        />
                        <TextField
                            sx={{ '& fieldset': { borderColor: '#12372A !important' } }}
                            type="text"
                            variant='outlined'
                            color='success'
                            label="Last Name"
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                            fullWidth
                            required
                        />
                        <TextField
                            sx={{ '& fieldset': { borderColor: '#12372A !important' } }}
                            type="text"
                            variant='outlined'
                            color='success'
                            label="Designation"
                            onChange={e => setDesignation(e.target.value)}
                            value={designation}
                            fullWidth
                            required
                        />
                        <TextField
                            sx={{ '& fieldset': { borderColor: '#12372A !important' } }}
                            type="text"
                            variant='outlined'
                            color='success'
                            label="Salary"
                            onChange={e => setSalary(e.target.value)}
                            value={salary}
                            fullWidth
                            required
                        />
                        <TextField
                            sx={{ '& fieldset': { borderColor: '#12372A !important' } }}                        
                            type="text"
                            variant='outlined'
                            color='success'
                            label="Location"
                            onChange={e => setLocation(e.target.value)}
                            value={location}
                            fullWidth
                            required
                        />
                    </Box>
                    <Button variant="outlined" sx={{ mt: 2,backgroundColor:'white' }} color="success" type="submit" >Submit</Button>
                </form>
                <Typography variant="body2" mt={4}>Go Back To <Link href="/" sx={{textDecoration:'none',color:'#415F54'}}>Home</Link></Typography>
            </Box>  


            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: '20px', position: 'fixed', bottom: 0, left: 0, right: 0, margin: 'auto' ,marginBottom:'26px'} }}>
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">Form submitted successfully!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="success" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>        


        </Box>
    )
}

export default Form;
