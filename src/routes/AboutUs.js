import { AppBar, Grid, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import logo from '../commons/Option_Pro_Logo_v6.png'
import Logo from "../commons/Logo.jpeg"
import { theme } from '../commons/theme'

export const About = () => {
    return (
        <Grid container justifyContent='center'>
            <AppBar position="fixed" >
                <Toolbar style={{ backgroundColor:"#fff" }}>

                    <Typography
                        sx={{ ml: '5rem', textDecoration:'none', color:'inherit' }}
                        component={Link}
                        to="/"
                        variant='h3' textAlign={'center'} fontFamily='Roboto' fontWeight={900}>
                        <img src={Logo} alt='logo' style={{ height: '70px' }} />
                    </Typography>
                    <div style={{ display: 'flex', 'flexDirection': 'row', marginLeft: '3rem', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                        <Typography variant="h6" noWrap 
                        component={Link}
                        to="/aboutus"
                            sx={{ ml: '5rem', textDecoration:'none', color:'inherit' }}
                            fontFamily='Roboto'
                            fontWeight={'bold'} >
                            About Us
                        </Typography>
                        <Typography variant="h6" noWrap 
                        component={Link}
                        to="/terms"
                        sx={{ ml: '5rem', textDecoration:'none', color:'inherit' }}
                            fontFamily='Roboto'
                            fontWeight={'bold'} >
                            T & C
                        </Typography>
                        {/* <Typography variant="h6" noWrap 
                        component={Link}
                        to="/guide"
                        sx={{ ml: '5rem', textDecoration:'none', color:'inherit' }}
                            fontFamily='Roboto'
                            fontWeight={'bold'} >
                            Guide
                        </Typography> */}
                        <Typography variant="h6" noWrap 
                        component={Link}
                        to="/contactus"
                        sx={{ ml: '5rem', textDecoration:'none', color:'inherit' }}
                            fontFamily='Roboto'
                            fontWeight={'bold'} >
                            Contact Us
                        </Typography>
                        {/* <QuickSelect /> */}
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Grid container item lg={8} sx={{mt:'10rem'}}>
                <Typography variant="h5" sx={{mb:5}} fontWeight={'bold'}>About Us</Typography>
                <Grid container item>
                            <Typography variant="body" fontSize={18}>
                                Option Pro is a complete package for option chain data analysis, where users can get 360 degree analysis of option chain data, Option pro analysis will help you to take decision for taking option, future and equity trades.
                            </Typography>
                        </Grid>
                        <Grid container item sx={{mt:6}}>
                            <Typography variant="h5" fontWeight={'bold'}>Features:</Typography>
                        </Grid>
                        <Grid container item sx={{mt:3}}>
                            <Typography fontSize={18}>
                                Live Data <br />
                                Nifty , Banknifty and top 10 stocks option chain analysis<br />
                                Put & Call buy signals<br />
                                PCR , PCR change<br />
                                Unwinding analysis<br />
                                OI Analysis<br />
                                OI difference Analysis with chart<br />
                                Volume Analysis<br />
                                Market Sentiment Analysis<br />
                                And many more….
                            </Typography>
                        </Grid>
            </Grid>

        </Grid>
    )
}