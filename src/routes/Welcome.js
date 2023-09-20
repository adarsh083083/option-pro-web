import {
  AppBar,
  Button,
  Card,
  CardHeader,
  Grid,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import YoutubeEmbed from "./YoutubeEmbed";
import { Link, useNavigate } from "react-router-dom";
// import { theme } from "../commons/theme"
import logo from "../commons/Option_Pro_Logo_v6.png";
import Logo from "../commons/Logo.jpeg";
import React from "react";
import { borderRadius, Box } from "@mui/system";
import { blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/login";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Gif } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Welcome = () => {
  const theme = useTheme();
  const MONTHLY = false;
  const YEARLY = true;
  const [subscriptionPeriod, setPeriod] = React.useState(YEARLY);
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const checkLogin = () => {
    const token = localStorage.getItem("token");
    const user_email = localStorage.getItem("user_email");
    const uid = localStorage.getItem("uid");
    const a = localStorage.getItem("a");
    const admin = a == 831 ? true : false;
    if (!token) {
      return;
    }
    dispatch(
      login({
        jwt: token,
        username: user_email,
        id: uid,
        isAdmin: admin,
      })
    );
  };
  React.useEffect(() => {
    checkLogin();
  }, []);
  React.useEffect(() => {
    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  const style = {
    container: {
      position: "relative",
      width: "100%",
      overflow: "hidden",
      paddingTop: "56.25%",
    },

    iframe: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: "100%",
      height: "100%",
      border: "none",
    },
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.primary.main,
        flex: 1,
        display: "grid",
      }}
    >
      <AppBar position="fixed" elevation={0}>
        <Toolbar
          style={{
            backgroundColor: theme.palette.primary.main,
            boxShadow: " 0 4px 6px -6px #222",
            backgroundColor: "#ffffff",
          }}
          elevation={0}
        >
          <Typography
            sx={{ ml: "1rem", textDecoration: "none", color: "inherit" }}
            component={Link}
            to="/"
            variant="h3"
            textAlign={"center"}
            fontFamily="Roboto"
            fontWeight={900}
          >
            <img
              src={Logo}
              alt="logo"
              style={{ height: "70px", marginTop: "2px" }}
            />
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
              sx={{
                ml: "5rem",
                textDecoration: "none",
                color: "inherit",
                fontSize: "16px",
              }}
              fontFamily="Roboto"
              //   fontWeight={"bold"}
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/terms"
              sx={{
                ml: "4rem",
                textDecoration: "none",
                color: "inherit",
                fontSize: "16px",
              }}
              fontFamily="Roboto"
              //   fontWeight={"bold"}
            >
              Terms and Conditions
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
              noWrap
              component={Link}
              to="/contactus"
              sx={{
                ml: "4rem",
                mr: "6rem",
                textDecoration: "none",
                color: "inherit",
                fontSize: "16px",
                fontFamily: "Roboto",
              }}
              fontFamily="Roboto"
            >
              Contact Us
            </Typography>
            <Button
              component={Link}
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
              to="/signup"
              variant="contained"
              color="secondary"
              sx={{
                ml: 2,
                mr: 2,
                fontSize: "13px",
                lineHeight: "20px",
                fontFamily: "Roboto",
              }}
            >
              Sign Up
            </Button>
            <Button
              component={Link}
              to="/login"
              disableElevation
              disableFocusRipple
              disableRipple
              disableTouchRipple
              variant="contained"
              color="secondary"
              sx={{
                ml: 2,
                mr: 2,
                fontSize: "13px",
                lineHeight: "20px",
                fontFamily: "Roboto",
              }}
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <Grid
          container
          item
          sx={{
            flex: 1,
            display: "flex",
            mt: "5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid sx={{ justifyContent: "center", alignItems: "center" }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "1.2rem",
                marginTop: "2.5rem",
                fontSize: {
                  xl: "4rem",
                  lg: "3.3rem",
                  sm: "2.3rem",
                  xs: "2.3rem",
                },
                justifyContent: {
                  xl: "space-evenly",
                  lg: "flex-start",
                  sm: "flex-start",
                },
                rowGap: {
                  xl: "unset",
                  lg: 4,
                  sm: 4,
                  xs: 3,
                },
                color: "#562456",
              }}
            >
              Option Pro
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "1rem",
                fontFamily: "inherit",
                fontFamily: "Roboto",
                marginBottom: "2rem",
              }}
            >
              Get Market Movment In Advance
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1.4rem",
                fontWeight: "1.8rem",
                fontFamily: "inherit",
                fontFamily: "Roboto",
                marginBottom: "2rem",
              }}
            >
              360 dgree analysis of Nifty, Banknifty and Stocks Option Chain
            </Typography>
            <Grid
              mt={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "lighter",
                  color: "#562456",
                  fontFamily: "Roboto",
                  marginBottom: "3rem",
                }}
              >
                Get 7 days free trial
              </Typography>
              <Grid ml={10}>
                <Button
                  component={Link}
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  to="/signup"
                  variant="contained"
                  color="secondary"
                  sx={{
                    textAlign: "center",
                    color: "black",
                    borderRadius: 2,
                    height: "2rem",
                    color: "white",
                    marginBottom: "1.5rem",
                    fontSize: {
                      xl: "1rem",
                      lg: "0.8rem",
                      xs: "0.6rem",
                    },
                    fontFamily: "Roboto",
                  }}
                >
                  signup for free
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <div style={{ marginTop: "1rem" }}>
          <Divider />

          <Box
            container
            sx={{
              flexGrow: 1,
              width: "100%",
              padding: "0.5rem 1rem 0.5rem 1rem",
              display: "flex",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Grid mt={1}>
                  <Typography
                    sx={{
                      paddingLeft: "2.5rem",
                      fontSize: "20px",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      backgroundColor: "#ebedf0",
                      paddingTop: "1rem",
                      marginRight: ".9rem",
                    }}
                  >
                    Subscription
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#ebedf0",
                    padding: "1rem",
                    height: "80%",
                    marginRight: ".9rem",
                  }}
                >
                  <Grid item xs={3}>
                    <Grid sx={{ paddingLeft: "20px" }}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "Roboto",
                          padding: "5px",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        Plan Discount
                      </Typography>
                    </Grid>

                    <Grid sx={{ paddingLeft: "20px" }}>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { sm: "normal", xs: "unset" },
                          fontFamily: "Roboto",
                          marginTop: "1.5rem",
                        }}
                      >
                        Yearly
                      </Typography>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { sm: "normal", xs: "unset" },
                          fontFamily: "Roboto",
                          marginTop: "1.5rem",
                        }}
                      >
                        Half Yearly
                      </Typography>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { sm: "normal", xs: "unset" },
                          fontFamily: "Roboto",
                          marginTop: "1.5rem",
                        }}
                      >
                        Quarterly
                      </Typography>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { sm: "normal", xs: "unset" },
                          marginTop: "1.5rem",
                          fontFamily: "Roboto",
                        }}
                      >
                        Monthly
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} ml={2}>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontFamily: "Roboto",
                        padding: "5px",
                        fontWeight: "bold",
                        paddingLeft: "0.6rem",
                      }}
                    >
                      Price
                    </Typography>
                    <Grid>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".8rem", md: "unset" },
                          fontWeight: { sm: "normal", xs: "unset" },
                          fontFamily: "Roboto",
                          marginTop: "1.5rem",
                        }}
                      >
                        INR <strike>18000</strike> 7600
                      </Typography>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { sm: "normal", xs: "unset" },
                          fontFamily: "Roboto",
                          marginTop: "1.5rem",
                        }}
                      >
                        INR <strike>9000</strike> 5400
                      </Typography>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { sm: "normal", xs: "unset" },
                          fontFamily: "Roboto",
                          marginTop: "1.5rem",
                        }}
                      >
                        INR <strike>4500</strike> 3150
                      </Typography>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { sm: "normal", xs: "unset" },
                          fontFamily: "Roboto",
                          marginTop: "1.5rem",
                        }}
                      >
                        INR <strike>1500</strike> 1500
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      padding: "5px",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      marginTop: "1.5rem",
                    }}
                  >
                    <Grid mt={4} ml={2}>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "green",

                          fontFamily: "Roboto",
                          marginTop: "1.2rem",
                        }}
                      >
                        60% Discount
                      </Typography>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "green",
                          fontFamily: "Roboto",
                          marginTop: "1.2rem",
                        }}
                      >
                        40% Discount
                      </Typography>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "green",
                          fontFamily: "Roboto",
                          marginTop: "1.2rem",
                        }}
                      >
                        30% Discount
                      </Typography>
                      <Typography
                        m={1}
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "green",
                          fontFamily: "Roboto",
                          marginTop: "1.2rem",
                        }}
                      >
                        No Discount
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid mt={1}>
                  <Typography
                    sx={{
                      paddingLeft: "2.5rem",
                      fontSize: "20px",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      backgroundColor: "#ebedf0",
                      paddingTop: "1rem",
                      marginLeft: ".9rem",
                    }}
                  >
                    Features
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#ebedf0",
                    paddingLeft: "2.5rem",
                    height: "80%",
                    marginLeft: ".9rem",
                  }}
                >
                  <Grid item>
                    <Grid>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "black",
                          fontFamily: "Roboto",
                        }}
                      >
                        Live Data Nifty , Banknifty and stocks option chain
                        <br />
                        analysis.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "black",
                          fontFamily: "Roboto",
                        }}
                      >
                        Custom Analysis View.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "black",
                          fontFamily: "Roboto",
                        }}
                      >
                        Put & Call Bullish / Bearish Signals.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "black",
                          fontFamily: "Roboto",
                        }}
                      >
                        Bullish / Bearish Indications (Different Strategies).
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "black",
                          fontFamily: "Roboto",
                        }}
                      >
                        PCR , PCR change.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "black",
                          fontFamily: "Roboto",
                        }}
                      >
                        Unwinding analysis.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "black",
                          fontFamily: "Roboto",
                        }}
                      >
                        OI difference Analysis with chart.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "black",
                          fontFamily: "Roboto",
                        }}
                      >
                        Volume Analysis.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "black",
                          fontFamily: "Roboto",
                        }}
                      >
                        Market Sentiment Analysis.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "unset" },
                          fontWeight: { md: "normal", xs: "unset" },
                          color: "black",
                          fontFamily: "Roboto",
                          marginTop: "0.3rem",
                        }}
                      >
                        Much More...
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box
            container
            sx={{
              flexGrow: 1,
              width: "100%",
              padding: "0.5rem 1rem 0.5rem 1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid sx={{ marginTop: "0.5rem" }}>
              <Grid>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    fontFamily: "Roboto",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Option Pro Features Tour
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            container
            sx={{
              flexGrow: 1,
              width: "100%",
              padding: "0.5rem 1rem 0.5rem 1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid>
              <YoutubeEmbed embedId="3rOmhkDgGTg" />
            </Grid>
          </Box>
          <Divider sx={{ marginTop: "10px" }} />
          <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{ marginTop: "0.5rem" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  fontFamily: "Roboto",
                  marginTop: ".5rem",
                }}
              >
                Contact Us
              </Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Grid item xs={6} md={5}>
                <Grid mt={2}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      fontFamily: "Roboto",
                      padding: "1px",
                    }}
                  >
                    Contact Address:
                  </Typography>
                </Grid>
                <Grid>
                  <Typography sx={{ fontFamily: "Roboto", padding: "2px" }}>
                    Scalable Application Solutions Pvt Ltd,
                  </Typography>
                  <Typography sx={{ fontFamily: "Roboto", padding: "2px" }}>
                    51/A, Ambikapuri Main, Airport Road,
                  </Typography>
                  <Typography sx={{ fontFamily: "Roboto", padding: "2px" }}>
                    Indore, 452005 (MP)
                  </Typography>
                  <Grid sx={{flexDirection:"row",display:"flex"}}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1rem",
                        fontFamily: "Roboto",
                        padding: "1px",
                        lineHeight:2
                      }}
                    >
                      Contact Number: 
                    </Typography>
                    <Typography sx={{justifyContent:"center",padding:"2.5px",lineHeight:2,fontWeight:30,fontSize:"16px"}}>0731-4985023</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} md={5}>
                <Grid
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    fontFamily: "Roboto",
                    padding: "2px",
                  }}
                >
                  Email:
                </Grid>
                <Grid>
                  <Typography sx={{ fontFamily: "Roboto", padding: "2px" }}>
                    optionpro@scalableapplication.com
                  </Typography>
                  <Typography sx={{ fontFamily: "Roboto", padding: "2px" }}>
                    optionproindia@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ marginTop: "2rem" }} />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={4}>
                <Grid>
                  <Typography ml={2} p={1} sx={{ fontFamily: "Roboto" }}>
                    &copy; 2023 All Right Reserved. Option Pro
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={6} md={8}>
                <Grid
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Grid>
                    <Typography ml={2} p={1} sx={{ fontFamily: "Roboto",fontWeight:"bold" }}>
                      Follow
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography ml={2} p={1} sx={{ fontFamily: "Roboto" }}>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://twitter.com/"
                      >
                        Twitter
                      </a>
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography ml={2} p={1} sx={{ fontFamily: "Roboto" }}>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://facebook.com/"
                      >
                        Facebook
                      </a>
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography ml={2} p={1} sx={{ fontFamily: "Roboto" }}>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://instagram.com/"
                      >
                        Instagram
                      </a>
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography ml={2} p={1} sx={{ fontFamily: "Roboto" }}>
                       
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://www.youtube.com/watch?v=3rOmhkDgGTg&t"
                      >
                        YouTub
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </Grid>
  );
};
