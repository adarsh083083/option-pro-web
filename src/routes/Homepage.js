import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import Options from '../components/Options';
import ConsolidatedAnalysisPage from '../components/ConsolidatedAnalysisPage';
import DrawerTreeView from '../components/DrawerList';
// import { theme } from '../commons/theme'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../commons/logo.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem, Tooltip } from '@mui/material';
import { logout } from '../redux/login';
import SensorsIcon from '@mui/icons-material/Sensors';
import { useLocation, useNavigate } from "react-router-dom";
import ConsolidatedVolumeAnalysisPage from '../components/ConsolidatedVolumeAnalysisPage';
import ConsolidatedOIAnalysisPage from '../components/ConsolidatedOIAnalysisPage';
import ConsolidatedOIAnalysisPageCheck from '../components/OIAnaylsisCheck';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '@mui/material/styles';
import HighestOiChangeAnalysis from '../components/HighestOiChangeAnalysis';
import { QuickSelect } from '../commons/QuickSelect';
import { ALL_PAGES, LOCALSTORAGE_NOTIFICATION_EXT_ID_OS, page_routes } from '../commons/constants';
import { ChangeSchema } from '../commons/ChangeSchema';
import { showPageSetup } from '../redux/pageSetup';
// import OneSignal from 'react-onesignal';
import addNotification from 'react-push-notification';
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
      transition: theme.transitions.create(['margin', 'width'], {
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
    // marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
Object.defineProperty(String.prototype, 'capitalize', {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({ path, schemaData = false }) {

  const theme = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const [openUserMenu, setOpenUserMenu] = React.useState(false);
  const username = useSelector(state => state.login.user_email)
  const isAdmin = useSelector(state => state.login.isAdmin)
  const uid = useSelector(state => state.login.uid)
  const pageSetup = useSelector((state) => state.pageSetup.schema);
  const lastUpdated = useSelector(state => state.options.lastUpdated)
  const currentSymbol = useSelector(state => state.options.currentSymbol)
  const ldate = new Date(lastUpdated)
  const current = new Date()
  const live = (current - ldate) / 1000 < 70

  React.useEffect(() => {

    var OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.getSubscription(function (notOptedOut) {
        if (notOptedOut) {
          OneSignal.registerForPushNotifications({
            // modalPrompt: true
          });
        }
      });
    });
    OneSignal.isPushNotificationsEnabled(() => {
      // OneSignal.push(function () {
      console.log("push notification enabled")
      localStorage.setItem(LOCALSTORAGE_NOTIFICATION_EXT_ID_OS, "1")
      // });

    })
    OneSignal.setExternalUserId(uid);
    console.log("push notification effect")

  }, []);

  // React.useEffect(()=>{
  //   addNotification({
  //     title: 'Warning',
  //     subtitle: 'This is a subtitle',
  //     message: 'This is a very long message',
  //     theme: 'darkblue',
  //     native: true // when using native, your OS will handle theming.
  // });
    
  // },[])
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    dispatch(logout())
  }
  const gotoAdminDashboard = () => {
    navigate('/admin')

  }
  const pageEdit = () => {
    dispatch(showPageSetup())
  }
  // const location = useLocation()
  const routeNames = page_routes.map(k => k.code)
  const children = () => {


    if (path == '/dashboard') {
      return <Options schema={pageSetup} />
    }
    else if (path == 'consolidatedAnalysis') {
      // return <ConsolidatedVolumeAnalysisPage/>
      // return <ConsolidatedOIAnalysisPage />
      return <ConsolidatedAnalysisPage />
    }
    else if (path == 'consolidatedVolumeAnalysis') {
      return <ConsolidatedVolumeAnalysisPage />
    }
    else if (path == 'consolidatedOIAnalysis') {
      return <ConsolidatedOIAnalysisPage />
    }
    else if (path == 'consolidatedOIAnalysisCheck') {
      return <ConsolidatedOIAnalysisPageCheck />
    } else if (path == 'highestOIChangeAnalysis') {
      return <HighestOiChangeAnalysis />
    }
    else if (routeNames.includes(path) && schemaData) {
      console.log("returingngsd")
      return <Options schema={[ALL_PAGES[path]]} />
    }

  }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ backgroundColor: theme?.palette.appbar }}>
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
            fontWeight={'bold'}
            color='white'
          >
            Option Pro
          </Typography>
          <Box sx={{ ml: { md: '5rem', xs: 0 } }}>
            <QuickSelect />
          </Box>

          {currentSymbol == 'DASHBOARD' &&
            <Tooltip title={`Last Updated : ` + ldate.toString()}>
              <SensorsIcon color={live ? 'success' : 'error'} sx={{ ml: 5 }} />
            </Tooltip>
          }
          <div style={{ marginLeft: 'auto', }}>
            <ThemeToggle />
          </div>
          <Box sx={{ mr: { md: '5rem', xs: 0 } }}>
            <IconButton style={{ color: theme.palette.accent }} sx={{ ml: 2 }} onClick={(e) => setOpenUserMenu(e.currentTarget)}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              open={openUserMenu}
              anchorEl={openUserMenu}
              onClose={() => setOpenUserMenu(false)}
            >
              <MenuItem >
                {`Hi ${username.capitalize()}`}
              </MenuItem>
              <MenuItem
                onClick={pageEdit}
              >
                Edit Page Layout
              </MenuItem>
              {isAdmin &&
                <MenuItem onClick={gotoAdminDashboard}>Admin Dashboard</MenuItem>
              }
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>

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
        <DrawerTreeView />
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <Options /> */}
        {children()}
        <ChangeSchema />
      </Main>
    </Box>
  );
}


//margin-left auto remove in user  and margin -right remove in  toggle 