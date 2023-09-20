import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  AppBar,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { SIGNUP_ENDPOINT } from "../commons/constants";
import { theme } from "../commons/theme";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/login";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../commons/Logo.jpeg";

import { useTheme } from "@mui/material/styles";

export const SignUp = () => {
  const theme = useTheme();
  const [userData, setUserData] = React.useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    showPassword: false,
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [terms, setTerms] = React.useState(false);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  React.useEffect(() => {
    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/");
    }
  }, [isLoggedIn]);
  const handleChange = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };
  const handleChangeUsername = (e) => {
    setUserData({ ...userData, username: e.target.value });
  };
  const handleChangePhone = (e) => {
    setUserData({ ...userData, phone: e.target.value });
  };
  const handleClickShowPassword = (e) => {
    setUserData({ ...userData, showPassword: !userData.showPassword });
  };
  const handleChangeName = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };
  const handleLogin = () => {
    if (!terms) {
      setError("Please accept the terms and condition");
      return;
    }
    setLoading(true);
    setError(false);
    axios
      .post(
        SIGNUP_ENDPOINT,
        {
          username: userData.username,
          password: userData.password,
          name: userData.name,
          phone: userData.phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        // dispatch(login(res.data))
        setError(res.data.detail);
      })
      .catch((e) => {
        setLoading(false);
        if (e.response && e.response.status == 422) {
          setError(
            e.response.data.detail[0].loc[1] +
              " " +
              e.response.data.detail[0].msg
          );
        } else if (e.response) {
          setError(e.response.data.detail);
        } else {
          setError("Something went wrong");
        }
      });
  };
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: theme.palette.primary.main }}>
          <Typography
            sx={{ ml: "5rem", textDecoration: "none", color: "inherit" }}
            component={Link}
            to="/"
            variant="h3"
            textAlign={"center"}
            fontFamily="Roboto"
            fontWeight={900}
          >
            <img src={Logo} alt="logo" style={{ height: "70px" }} />
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "3rem",
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/aboutus"
              sx={{ ml: "5rem", textDecoration: "none", color: "inherit" }}
              fontFamily="Roboto"
              fontWeight={"bold"}
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/terms"
              sx={{ ml: "5rem", textDecoration: "none", color: "inherit" }}
              fontFamily="Roboto"
              fontWeight={"bold"}
            >
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
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/contactus"
              sx={{ ml: "5rem", textDecoration: "none", color: "inherit" }}
              fontFamily="Roboto"
              fontWeight={"bold"}
            >
              Contact Us
            </Typography>
            {/* <QuickSelect /> */}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container direction="row" alignContent={"center"}>
        <Grid container item lg={5}>
          <Grid container direction="column">
            <Grid
              container
              item
              justifyContent={"center"}
              sx={{ mt: "4rem" }}
            ></Grid>
            <Grid container item justifyContent={"center"} sx={{ mt: "4rem" }}>
              <Typography variant="h5" fontFamily="Roboto">
                Sign Up
              </Typography>
            </Grid>
            <Grid container item justifyContent={"center"} sx={{ mt: "3rem" }}>
              <TextField
                sx={{
                  width: "25rem",
                  minWidth: "25rem",
                  "& label.Mui-focused": {
                    color: "purple",
                    // fontWeight:'bold'
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "purple",
                    },
                  },
                }}
                label="Full Name"
                value={userData.name}
                onChange={handleChangeName}
              />
            </Grid>
            <Grid container item justifyContent={"center"} sx={{ mt: "2rem" }}>
              <TextField
                sx={{
                  width: "25rem",
                  minWidth: "25rem",
                  "& label.Mui-focused": {
                    color: "purple",
                    // fontWeight:'bold'
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "purple",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }}
                label="Phone"
                onChange={handleChangePhone}
              />
            </Grid>

            <Grid container item justifyContent={"center"} sx={{ mt: "2rem" }}>
              <TextField
                sx={{
                  width: "25rem",
                  minWidth: "25rem",
                  "& label.Mui-focused": {
                    color: "purple",
                    // fontWeight:'bold'
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "purple",
                    },
                  },
                }}
                label="Email"
                onChange={handleChangeUsername}
              />
            </Grid>

            <Grid container item justifyContent={"center"} sx={{ mt: "2rem" }}>
              <TextField
                id="outlined-adornment-password"
                sx={{
                  width: "25rem",
                  minWidth: "25rem",
                  "& label.Mui-focused": {
                    color: 'purple',
                    // fontWeight:'bold'
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "purple",
                    },
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
                        {userData.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              container
              item
              justifyContent={"center"}
              sx={{ mt: "2rem", alignItems: "center" }}
            >
              <Checkbox
                checked={terms}
                onChange={() => setTerms(!terms)}
                color="default"
              />{" "}
              I agree to accept the Terms and Conditions
            </Grid>
            <Grid container item justifyContent={"center"} sx={{ mt: "3rem" }}>
              <LoadingButton
                variant="contained"
                sx={{
                  w: "25rem",
                  minWidth: "25rem",
                  height: "3rem",
                  fontWeight: "bold",
                }}
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
                loading={loading}
                color="secondary"
                onClick={handleLogin}
              >
                Sing Up
              </LoadingButton>
            </Grid>
            <Grid container item justifyContent={"center"} sx={{ mt: "4rem" }}>
              {error && error}
            </Grid>
            <Grid container item justifyContent={"center"} sx={{ mt: "4rem" }}>
              <Button
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
                color="secondary"
                sx={{
                  w: "25rem",
                  minWidth: "25rem",
                  height: "3rem",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
                onClick={gotoLogin}
              >
                Have an Account? Login
              </Button>
            </Grid>
            <Grid container item></Grid>
          </Grid>
        </Grid>
        <Grid container item lg={7}>
          <Grid
            container
            alignContent={"center"}
            spacing={2}
            lg={8}
            justifyContent="center"
          >
            <Grid container item>
              {/* <Typography variant="body" fontSize={18}>
                            Option Pro is a complete package for option chain data analysis, where users can get 360 degree analysis of option chain data, Option pro analysis will help you to take decision for taking option, future and equity trades.
                        </Typography> */}
            </Grid>
            <Grid container item>
              {/* <Typography variant="h5">Features:</Typography> */}
            </Grid>
            <Grid container item>
              {/* <Typography fontSize={18}>
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
                        </Typography> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
