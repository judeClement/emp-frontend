
//////// cards

import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const Home = () => {
  const [dataSet, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div style={{backgroundImage: `url()`, backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundImage: `url(https://www.nanogune.eu/sites/default/files/Employees.png)`,margin: '60px 200px 100px 200px', border: '3px solid #12372A', borderRadius: '20px', padding: '40px', backgroundColor: '#CFD7D4', flex: 1 }}>
        <Typography variant="h3" style={{ textAlign: 'center', margin: '10px 0px 50px 0px', fontFamily: 'Bricolage Grotesque',color:'#081A14' }}>Employee List</Typography>

        <Grid container spacing={2} justifyContent="center">
          {dataSet.map((row, index) => (
            <Grid item key={row.id} xs={12} md={6}>
              <Card sx={{
                maxWidth: 700,
                border: '1px solid #ccc',
                boxShadow: '0px 7px 10px #081A14',
                backgroundColor: "#436850",
                color:'#081A14'
              }}>
                <CardContent>
                  <Typography variant="h5" component="div" align="center" gutterBottom>
                    {row.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center" sx={{color:'#081A14'}}>
                    ID : {row.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center" sx={{color:'#081A14'}}>
                    Email : {row.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;




















//// bordered

// import React, { useState, useEffect } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import axios from 'axios';

// const Home = () => {
//   const [dataSet, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
//       setData(res.data);
//     });
//   }, []);

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" sx={{ margin: '50px' }}>
//       <Box sx={{ width: '100%' }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Employee List</h2>
//       </Box>
//       <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
//         <TableContainer component={Paper} sx={{ borderRadius: '20px', padding: '20px', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)', border: '2px solid black', margin: '0 auto' }}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '16px' }}>ID</TableCell>
//                 <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '16px' }}>Name</TableCell>
//                 <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '16px' }}>Email</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {dataSet.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell align="center" sx={{ fontSize: '14px' }}>{row.id}</TableCell>
//                   <TableCell align="center" sx={{ fontSize: '14px' }}>{row.name}</TableCell>
//                   <TableCell align="center" sx={{ fontSize: '14px', paddingRight: '8px' }}>{row.email}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Box>
//   );
// };

// export default Home;
