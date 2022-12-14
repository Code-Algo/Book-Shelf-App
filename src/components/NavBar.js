import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const pages = [<a style = {{textDecoration: 'none', color: 'white'}} href= '/books'>My Books</a>,
<a style = {{textDecoration: 'none', color: 'white'}} href= '/viewbooks' className="site_title" >Browse Books</a>]
{/* <a style = {{textDecoration: 'none', color: 'white'}} href= '/login'>Login</a>]; */}
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {user} = React.useContext(AppContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Link to ='/'>
        <Typography variant="title" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src="https://cdn.pixabay.com/photo/2012/04/13/16/43/bookshelf-32811_1280.png" alt="bug" height={100} />
        </Typography>
        </Link>
        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />  */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {
                user?
                <Avatar alt= {user.first_name} src={`https://avatars.dicebear.com/api/personas/${user.icon}.svg`} />
                :
                <Avatar alt="Please Login" src={`https://avatars.dicebear.com/api/personas/${new Date().getDay()}.svg`} />
              }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            {!user?
            <MenuItem onClick={handleCloseUserMenu}>
                <Link to ='/login' style={{textDecoration:'none', color: 'white'}}>
                <Typography textAlign="center">Login</Typography>
                </Link>
            </MenuItem>
            :
            <MenuItem onClick={handleCloseUserMenu}>
                <Link to ='/logout' style={{textDecoration:'none', color: 'white'}}>
                <Typography textAlign="center">Logout</Typography>
                </Link>
            </MenuItem>
            }
            {!user?
            <MenuItem onClick={handleCloseUserMenu}>
            <Link to ='/register' style={{textDecoration:'none', color: 'white'}}>
            <Typography textAlign="center">Register</Typography>
            </Link>
            </MenuItem>
            :
            <MenuItem onClick={handleCloseUserMenu}>
            <Link to ='/editprofile' style={{textDecoration:'none', color: 'white'}}>
            <Typography textAlign="center">Edit Profile</Typography>
            </Link>
            </MenuItem>
            }
            
            
           
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;