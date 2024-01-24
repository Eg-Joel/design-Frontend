import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';

function Footer() {
  return (
    <Box
   sx={{
    margin: 0,
    minHeight: "15vh",
    background: "#c1cae7",

    padding:"70px 70px"
  }}>
    <Box
    sx={{
        display: 'flex',
        marginBottom:4
      }}>

  
<Box sx={{ flexGrow: 1, display: 'flex'}}>
<Typography variant="body1" paragraph color="gray" >
         @2023 Yourcompany
        </Typography>
        </Box>

        <Typography
          variant="h6"
          noWrap
          
          sx={{
            mr: 2,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            color: '#37447e',
            textDecoration: 'none',
            flexGrow: 1,
          }}
        >
          LANDING
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
          
            background: "#111b47",
            padding: "3px 35px",
            textTransform: "none",
          }}
        >
          Purchase Now
        </Button>
        </Box>

        </Box>
        <Divider  />
   </Box>
  )
}

export default Footer