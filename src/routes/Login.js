import { Visibility, VisibilityOff } from "@mui/icons-material"
import { LoadingButton } from "@mui/lab"
import { AppBar, Button, Grid, IconButton, InputAdornment, TextField, Toolbar, Typography } from "@mui/material"
import axios from "axios"
import React from "react"
import { LOGIN_ENDPOINT } from "../commons/constants"
import { StyledText } from "../components/StyledText"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../redux/login"
import { Link, useNavigate } from "react-router-dom"
import logo from '../commons/Option_Pro_Logo_v6.png'
import Logo from "../commons/Logo.jpeg"
import { useTheme } from '@mui/material/styles';




export const Login = (props) => {
    const theme= useTheme()
// console.log(props,theme1,"0000000000000000000000")
    const [userData, setUserData] = React.useState({ "username": "", "password": "", showPassword: false })
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const isLoggedIn = useSelector(state => state.login.isLoggedIn)
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const gotoSignup = () => {
        navigate('/signup')
    }
    React.useEffect(() => {

        checkLogin()
    }, [])
    React.useEffect(() => {
        if (isLoggedIn) {
            console.log(isLoggedIn);
            navigate("/dashboard")
        }
    }, [isLoggedIn])
    const handleChangeUsername = (e) => {
        setUserData({ ...userData, username: e.target.value })
    }
    const handleChange = (e) => {
        setUserData({ ...userData, password: e.target.value })
    }
    const handleClickShowPassword = (e) => {
        setUserData({ ...userData, showPassword: !userData.showPassword })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const formData = new FormData()
        setLoading(true)
        formData.append('username', userData.username)
        formData.append('password', userData.password)
        axios.post(LOGIN_ENDPOINT,
            formData, {
            headers: {

                'Content-Type': 'multipart/form-data',
            }
        }).then(res => {
            setLoading(false)
            dispatch(login(res.data))

        })
            .catch(e => {
                setLoading(false)
                if (e.response) {
                    setError(e.response.data.detail)
                    return
                }
                setError('Wrong Username/Password')
            })
    }
    const checkLogin = () => {
        const token = localStorage.getItem('token')
        const user_email = localStorage.getItem('user_email')
        const uid = localStorage.getItem('uid')
        const a = localStorage.getItem('a')
        const admin = a == 831 ? true : false
        if (!token) { return }
        dispatch(login({
            jwt: token,
            username: user_email,
            id: uid,
            isAdmin: admin
        }))
    }
    return (
        <React.Fragment>
            <AppBar position="fixed" >
                <Toolbar style={{ backgroundColor: theme?.palette?.primary?.main }}>

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
            <Grid container direction="row" alignContent={'center'}>

                <Grid container item lg={4}>
                    <form onSubmit={handleLogin}>
                        <Grid container direction='column'>
                            <Grid container item justifyContent={'center'} sx={{ mt: '3rem' }}>
                                {/* <Typography variant='h3' textAlign={'center'} fontFamily='Roboto' fontWeight={900}>
                                <img src={logo} alt='logo' style={{ height: '100px' }} />
                            </Typography> */}
                            </Grid>
                            <Grid container item justifyContent={'center'} sx={{ mt: '3rem' }}>
                                <Typography variant="h5">Login</Typography>
                            </Grid>
                            <Grid container item justifyContent={'center'} sx={{ mt: '2rem' }}>
                                <TextField
                                    sx={{
                                        width: '25rem', minWidth: '25rem',
                                       
                                        '& label.Mui-focused': {
                                            color: "purple",
                                            // fontWeight:'bold'
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: "purple"
                                            }
                                        }
                                    }}
                                    label="Email/Phone"
                                    onChange={handleChangeUsername}
                                />
                            </Grid>
                            <Grid container item justifyContent={'center'} sx={{ mt: '3rem' }}>
                                <TextField
                                    id="outlined-adornment-password"
                                    sx={{
                                        width: '25rem', minWidth: '25rem',
                                        '& label.Mui-focused': {
                                            color: "purple",
                                            borderColor: "purple"
                                            // fontWeight:'bold'
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'purple'
                                            }
                                        },
                                        
                                    }}
                                    variant="outlined"
                                    type={userData.showPassword ? "text" : "password"}
                                    label="Password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="Toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {userData.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid container item justifyContent={'center'} sx={{ mt: '4rem' }}>
                                <LoadingButton
                                    variant='contained'
                                    sx={{ w: '25rem', minWidth: '25rem', height: '3rem', fontWeight: 'bold' }}
                                    disableElevation disableFocusRipple disableRipple disableTouchRipple
                                    loading={loading}
                                    color='secondary'
                                    type='submit'
                                // onClick={handleLogin}
                                // onMouseOver={handleLogin}
                                // onMouseOverCapture={(e) => {
                                //     console.log(e)
                                //     if (e.key === 'Enter') {
                                //         return {handleLogin}
                                //     }
                                // }}


                                >Login</LoadingButton>
                            </Grid>
                            <Grid container item justifyContent={'center'} sx={{ mt: '4rem' }}>{error && error}</Grid>
                            <Grid container item justifyContent={'center'} sx={{ mt: '4rem' }}>
                                <Button
                                    disableElevation disableFocusRipple disableRipple disableTouchRipple
                                    color='secondary'
                                    sx={{
                                        w: '25rem',
                                        minWidth: '25rem',
                                        height: '3rem',
                                        fontWeight: 'bold',
                                        textTransform: 'none'
                                    }}
                                    onClick={gotoSignup}
                                >
                                    Don't have an Account? SignUp
                                </Button>
                            </Grid>
                            <Grid container item></Grid>
                        </Grid>
                    </form>
                </Grid>
                {/* <Grid container item lg={8}>
                    <Grid container alignContent={'center'} spacing={2} lg={8} justifyContent='center'>
                        <Grid container item>
                            <Typography variant="body" fontSize={18}>
                                Option Pro is a complete package for option chain data analysis, where users can get 360 degree analysis of option chain data, Option pro analysis will help you to take decision for taking option, future and equity trades.
                            </Typography>
                        </Grid>
                        <Grid container item>
                            <Typography variant="h5">Features:</Typography>
                        </Grid>
                        <Grid container item>
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
                </Grid> */}
            </Grid>
        </React.Fragment>
    )
}