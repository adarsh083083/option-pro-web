import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { theme } from '../commons/theme'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../commons/logo.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { UserManagement } from '../components/Users';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { logout } from '../redux/login';
import { ConfigManagement } from '../components/ConfigManagement';
import { CONFIG_MANAGEMENT_PAGE, MARKET_PROFILE_PAGE, USER_MANAGEMENT_PAGE } from '../commons/constants';
import { StyledTab, StyledTabs } from '../components/StyledTabs';
import { setCurrentAdminPage } from '../redux/admin';
import { MarketProfileManagement } from '../components/MarketProfile';
// import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminDashboard() {

  const theme = useTheme();
  console.log(theme.palette,"km.................")
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [openUserMenu, setOpenUserMenu] = React.useState(false);
  const navigate = useNavigate()
  const username = useSelector(state=>state.login.user_email)
  const currentPage = useSelector(state => state.admin.currentPage)
    const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const gotoDashboard=()=>{
    navigate('/')
    
  }
  const handleLogout = () =>{
    dispatch(logout())
  }
  const handleChange = (event, newValue) => {
    dispatch(setCurrentAdminPage(newValue))
};
  return (
    <Box sx={{ display: 'flex',flex:1 }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} s
      // x={{boxShadow:0}}
      >
        <Toolbar style={{ backgroundColor: theme.palette.appbar }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"
            fontFamily='Roboto'

            fontWeight={'bold'} >
            Option Pro
          </Typography>
          <div style={{ marginLeft: '5rem' }}>

          <StyledTabs 
          value={currentPage} onChange={handleChange}
                indicatorColor={theme.palette.accent}
            >
                <StyledTab
                    value={USER_MANAGEMENT_PAGE}
                    label='Users'
                />
                <StyledTab value={CONFIG_MANAGEMENT_PAGE} label='Configs' style={{ 'textTransform': 'none' }} />
                <StyledTab value={MARKET_PROFILE_PAGE} label='Market Profile' style={{ 'textTransform': 'none' }} />
            </StyledTabs>
          </div>
          <div style={{ marginLeft: 'auto',marginRight:'5rem'}}>
            {`Hi ${username.capitalize()}`}
            <IconButton style={{color:theme.palette.accent}} 
            sx={{ml:2}}
            onClick={(e)=>setOpenUserMenu(e.currentTarget)}
            >
              <AccountCircleIcon/>
            </IconButton>
            <Menu
            open={openUserMenu}
            anchorEl={openUserMenu}
            onClose={()=>setOpenUserMenu(false)}
            >
              <MenuItem onClick={gotoDashboard}>Dashboard</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img src={logo} alt="Option Pro" style={{ height: 60 }} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ mb: 10 }} />

        {/* <DrawerTreeView /> */}
        <Divider />

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {
          currentPage == USER_MANAGEMENT_PAGE ? 
          <UserManagement/> : null
        }
        {
          currentPage == CONFIG_MANAGEMENT_PAGE ? 
          <ConfigManagement/> : null
        }
        {
          currentPage == MARKET_PROFILE_PAGE ? 
          <MarketProfileManagement/> : null
        }
        
      </Main>
    </Box>
  );
}
