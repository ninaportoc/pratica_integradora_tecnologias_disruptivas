import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
 
function Header(){
  const handleAlert = () => {
    alert('Botão foi pressionado!);
          };
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroudcolor: '#13959039' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/*  
              <MenuIcon />
              */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gerenciamento de Projetos
            </Typography>
                <Button color="inherit" onClick={handleAlert}>Alerta</Button
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;
