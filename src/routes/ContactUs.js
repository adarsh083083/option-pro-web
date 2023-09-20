import { AppBar, Grid, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import logo from '../commons/Option_Pro_Logo_v6.png'
import Logo from "../commons/Logo.jpeg"
import { useTheme } from '@mui/material/styles';

export const Contact = () => {
    const theme = useTheme()
    return (
        <Grid container justifyContent='center'>
            <AppBar position="fixed" >
                <Toolbar style={{ backgroundColor: theme.palette.primary.main }}>

                    <Typography
                        sx={{ ml: '5rem', textDecoration: 'none', color: 'inherit' }}
                        component={Link}
                        to="/"
                        variant='h3' textAlign={'center'} fontFamily='Roboto' fontWeight={900}>
                        <img src={Logo} alt='logo' style={{ height: '70px' }} />
                    </Typography>
                    <div style={{ display: 'flex', 'flexDirection': 'row', marginLeft: '3rem', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                        <Typography variant="h6" noWrap
                            component={Link}
                            to="/aboutus"
                            sx={{ ml: '5rem', textDecoration: 'none', color: 'inherit' }}
                            fontFamily='Roboto'
                            fontWeight={'bold'} >
                            About Us
                        </Typography>
                        <Typography variant="h6" noWrap
                            component={Link}
                            to="/terms"
                            sx={{ ml: '5rem', textDecoration: 'none', color: 'inherit' }}
                            fontFamily='Roboto'
                            fontWeight={'bold'} >
                            T & C
                        </Typography>
                        {/* <Typography variant="h6" noWrap
                            component={Link}
                            to="/guide"
                            sx={{ ml: '5rem', textDecoration: 'none', color: 'inherit' }}
                            fontFamily='Roboto'
                            fontWeight={'bold'} >
                            Guide
                        </Typography> */}
                        <Typography variant="h6" noWrap
                            component={Link}
                            to="/contactus"
                            sx={{ ml: '5rem', textDecoration: 'none', color: 'inherit' }}
                            fontFamily='Roboto'
                            fontWeight={'bold'} >
                            Contact Us
                        </Typography>
                        {/* <QuickSelect /> */}
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Grid container item lg={8} sx={{ mt: '10rem', flexDirection: 'column' }}>
                <Typography variant="h5" sx={{ mb: 5 }}>Contact Us</Typography>
                <Typography wrap>
                    <strong>
                        Contact Address:</strong>
                    <br />
                    Scalable Application Solutions Pvt Ltd,
                    <br />
                    51/A, Ambikapuri Main, Airport Road,
                    <br />
                    Indore, 452005 (MP)
                    <br /><br />
                    <strong>
                        Email: 
                    </strong> <br />
                    optionpro@scalableapplication.com
                    <br />
                    optionproindia@gmail.com
                    <br />
                    <br />
                    <strong>
                        Contact Number:
                    </strong> &nbsp;
                    0731-4985023
                </Typography>
            </Grid>

        </Grid>
    )
}