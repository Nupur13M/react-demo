import React from 'react'
import { AppBar, Toolbar, Typography, InputBase, IconButton, MenuItem, Menu } from '@material-ui/core';
import { Search as SearchIcon, Menu as MenuIcon } from '@material-ui/icons';
import './Navbar.css';
function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };



  return (
    <div>
        <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
        <div className="search">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <InputBase placeholder="Search..." />
        </div>

        <div>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Navbar;