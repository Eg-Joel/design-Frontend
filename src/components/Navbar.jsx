import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/' },
  ];

function Navbar() {

    const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0}  sx={{ backgroundColor: 'transparent', }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
       
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((item, index) => (
            <Button
              key={index}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#5c6a9f', display: 'block' }}
            >
              <Link to={item.path} style={{ textDecoration: 'none', color: '#5c6a9f' }}>
                    
                    {item.title}
                    </Link>
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="#5c6a9f"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((item, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" >
                <Link to={item.path} style={{ textDecoration: 'none', color: '#5c6a9f' }}>
                    
                    {item.title}
                    </Link></Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
       
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#37447e',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#37447e',
            textDecoration: 'none',
            flexGrow: 1,
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
        <Button variant="contained" sx={{ backgroundColor: '#111b47', color: 'white' }}>
              Buy Now
            </Button>
          
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navbar