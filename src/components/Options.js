import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLastUpdated,
  setOptionCurrentSymbol,
  setOptionSymbols,
  setTimeInterval15,
  setTimeInterval5,
  setWeeklyExpiry,
  setMonthlyExpiry,
  setCombinedExpiry
} from "../redux/options";
import {
  BANKNIFTY_SYMBOL_COMBINED,
  COMBINED_EXPIRTY,
  GOLDEN_RATIO_ENDPOINT,
  MONTHLY_EXPIRTY,
  NIFTY_SYMBOL_COMBINED,
  OPTION_TIME_REVERSAL_ENDPOINT,
  SERVER,
  WEEKLY_EXPIRTY,
} from "../commons/constants";
import CustomizedBreadcrumbs from "./Breadcrumb";

import InfoIcon from "@mui/icons-material/Info";
import { Dashboard } from "./Dashboard";
import { ChartSwitch } from "./ChartTableSwitch";
import { Box } from "@mui/system";
import { logout } from "../redux/login";
import { useSnackbar } from "notistack";
import { cleanUpData, setDashboardData, setTableData, setTableGoldenRatio, setTableOIData, setTableOIVData, setTableTimeReversal, setTableVolData } from "../redux/tableData";
import { getTable } from "../commons/tableSwitch";
import addNotification from 'react-push-notification';



const Options = ({ schema }) => {
  const dispatch = useDispatch();

  const currentSymbol = useSelector((state) => state.options.currentSymbol);
  const currentInterval = useSelector((state) => state.options.currentInterval);



  const currentView = useSelector((state) => state.options.currentView);
  const symbolExpiry = useSelector((state) => state.options.symbolExpiry);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  const [repeater, setRepeater] = React.useState(0);
  const [repeaterOI, setRepeaterOI] = React.useState(0);

  const token = useSelector((state) => state.login.user_token);


  const changeToWeeklyExpiry = () => dispatch(setWeeklyExpiry())

  const changeToMonthlyExpiry = () => dispatch(setMonthlyExpiry())

  const changeToCombinedExpiry = () => dispatch(setCombinedExpiry())

  const showExpirySwitch = currentSymbol == "NIFTY" | currentSymbol == "NIFTYMONTHLY" | currentSymbol == "BANKNIFTY" | currentSymbol == "BANKNIFTYMONTHLY" | currentSymbol == NIFTY_SYMBOL_COMBINED | currentSymbol == BANKNIFTY_SYMBOL_COMBINED

  const changeto5minInterval = () => dispatch(setTimeInterval5());

  const changeto15minInterval = () => dispatch(setTimeInterval15());

  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const handleForcedLogout = () => enqueueSnackbar("Session Expired.", { variant: "warning" })


  const callData = () => {
    axios
      .post(`${SERVER}/getOptionSymbols`, {}, header)
      .then((res) => {
        dispatch(setOptionSymbols(res.data));
        dispatch(setOptionCurrentSymbol("DASHBOARD"));
        dispatch(cleanUpData())
      })
      .catch((e) => {
        if (e.response) {
          if (e.response.status == 401) {
            handleForcedLogout();
            dispatch(logout());
          }
        }
      });
  };

  // console.log(currentSymbol)
  const getData = () => {
    if (!currentSymbol) {
      return false;
    }
    let url = `${SERVER}/option_data?symbol=${currentSymbol}`;
    if (currentSymbol == "DASHBOARD") {
      url = `${SERVER}/dashboard_data`;
    }

    if (currentInterval == 15) {
      if (currentSymbol != "DASHBOARD") {
        url = `${SERVER}/option_data_15?symbol=${currentSymbol}`;
      }
    }
    axios
      .post(url, {}, header)
      .then((res) => {
        if (currentSymbol == "DASHBOARD") {
          // setData(res.data.result);
          dispatch(setLastUpdated(res.data.timestamp));
          //this is the new dispatch
          dispatch(setDashboardData(res.data.result));
          if (res.data.notification){
            showNotifications(res.data.notification)
          }
          return;
        }
        // console.log(
        //   res.data?.option?.result?.data, 
        //   Object.keys(res.data?.option?.result?.data).length === 0,
        //   Object.getPrototypeOf(res.data?.option?.result?.data) === Object.prototype,
        // )
        // if (!(
        //   res.data?.option?.result?.data // 👈 null and undefined check
        //   && Object.keys(res.data?.option?.result?.data).length === 0
        //   && Object.getPrototypeOf(res.data?.option?.result?.data) === Object.prototype
        // ))
        //  {
        dispatch(setTableData(res.data))
        // }

      })
      .catch((e) => {
        if (e.response) {
          if (e.response.status == 401) {
            handleForcedLogout();
            dispatch(logout());
          }
        }
      });
  };


  const getDataOI = () => {
    if (!currentSymbol) {
      return false;
    }
    if (currentSymbol == "DASHBOARD") {
      return false;
    }
    axios
      .post(`${SERVER}/doOiOptionanalysis?symbol=${currentSymbol}`, {}, header)
      .then((res) => {
        dispatch(setTableOIData(res.data));
      })
      .catch((e) => {
        if (e.response) {
          if (e.response.status == 401) {
            handleForcedLogout();
            dispatch(logout());
          }
        }
      });
  };

  const getDataOIV = () => {
    if (!currentSymbol) {
      return false;
    }
    if (currentSymbol == "DASHBOARD") {
      return false;
    }
    axios
      .post(`${SERVER}/doOivOptionanalysis?symbol=${currentSymbol}`, {}, header)
      .then((res) => dispatch(setTableOIVData(res.data)))
      .catch((e) => {
        if (e.response) {
          if (e.response.status == 401) {
            handleForcedLogout();
            dispatch(logout());
          }
        }
      });
  };

  const getDataVolume = () => {
    if (!currentSymbol) {
      return false;
    }
    if (currentSymbol == "DASHBOARD") {
      return false;
    }
    axios
      .post(`${SERVER}/doVolumeOptionanalysis?symbol=${currentSymbol}`, {}, header)
      .then((res) => dispatch(setTableVolData(res.data)))
      .catch((e) => {
        if (e.response) {
          if (e.response.status == 401) {
            handleForcedLogout();
            dispatch(logout());
          }
        }
      });
  };


  // Function Repeaters for updating data
  React.useEffect(() => {
    getDataOI();
    getDataOIV();
    getDataVolume();
    setTimeout(() => setRepeaterOI((prevState) => prevState + 1), 60000);
  }, [currentSymbol, repeaterOI]);

  // General Option Symbol
  React.useEffect(() => {
    getData();
    setTimeout(() => setRepeater((prevState) => prevState + 1), 10000);
  }, [currentSymbol, repeater]);

  // Update Option Symbols
  React.useEffect(() => {
    callData();
  }, []);

  // Once per symbol
  React.useEffect(() => {
    if (currentSymbol == "DASHBOARD") {
      return
    }
    axios
      .post(OPTION_TIME_REVERSAL_ENDPOINT + currentSymbol, {}, header)
      .then((r) => dispatch(setTableTimeReversal(r.data)))
      .catch((e) => console.log(e));

    axios
      .post(GOLDEN_RATIO_ENDPOINT + currentSymbol, {}, header)
      .then((r) => dispatch(setTableGoldenRatio(r.data)))
      .catch((e) => console.log(e));

  }, [currentSymbol]);

  // Set default interval to 15 for non index stocks
  React.useEffect(() => {
    if (!currentSymbol) {
      return;
    }
    if (!currentSymbol.includes("NIFTY")) {
      changeto15minInterval();
    } else {
      changeto5minInterval();
    }
  }, [currentSymbol]);



  const isIndex = currentSymbol
    ? currentSymbol.toLowerCase().includes("nifty")
    : false;
  const isDashboard = currentSymbol
    ? currentSymbol.toLowerCase().includes("dashboard")
    : false;


  const showNotifications = (notificaitonData) => {
    try {
      console.log(notificaitonData,'notificaition')
      if (notificaitonData['status'] == true) {
        const bullish = []
        const bearish = []
        const neutral = []
        notificaitonData.data.map(k => {
          if (k.newStatus.overallview == 'Bullish') {
            bullish.push(k.symbol)
          }
          else if (k.newStatus.overallview == 'Bearish') {
            bearish.push(k.symbol)
          }
          else if (k.newStatus.overallview == 'Neutral') {
            neutral.push(k.symbol)
          }
        })
        console.log(bullish, bearish, neutral)
        if (bullish.length > 0) {
          addNotification({
            title: 'Bullish',
            subtitle: 'The following stocks have turned bullish in the last 5 mins',
            message: bullish.join(),
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
          })
        }
        if (bearish.length > 0) {
          addNotification({
            title: 'Bearish',
            subtitle: 'The following stocks have turned bearish in the last 5 mins',
            message: bearish.join(),
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
          })
        }
        if (neutral.length > 0) {
          addNotification({
            title: 'Neutral',
            subtitle: 'The following stocks have turned neutral in the last 5 mins',
            message: neutral.join(),
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
          })
        }
      }
    }
    catch {
      console.log("failed to show notification",notificaitonData)
    }
  }
  return (
    <Grid container direction="column">
      <Grid
        container
        item
        justifyContent={"center"}
        // lg={11}
        alignItems="center"
        direction={"column"}
        sx={{ flex: 1, mb: "1rem" }}
      >
        <Grid container lg={7}>
          {/* <CustomizedBreadcrumbs symbol={currentSymbol ? currentSymbol : ""} /> */}
          {showExpirySwitch ?
            <div>
              <Button
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
                color="secondary"
                variant={symbolExpiry == WEEKLY_EXPIRTY ? "contained" : "text"}
                onClick={changeToWeeklyExpiry}
              >
                Weekly Expiry
              </Button>
              <Button
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={
                  {
                    ml: 5
                  }
                }
                color="secondary"
                variant={symbolExpiry == MONTHLY_EXPIRTY ? "contained" : "text"}
                onClick={changeToMonthlyExpiry}
              >
                Monthly Expiry
              </Button>
              <Button
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={
                  {
                    ml: 5
                  }
                }
                color="secondary"
                variant={symbolExpiry == COMBINED_EXPIRTY ? "contained" : "text"}
                onClick={changeToCombinedExpiry}
              >
                Combined (Weekly+Monthly)
              </Button>
            </div> : null}
          {currentSymbol !== "DASHBOARD" && (
            <Box sx={{ ml: "auto" }}>
              Interval &nbsp;
              {currentInterval == 5 ? <strong>5m</strong> : "5m"}
              &nbsp;
              <ChartSwitch
                checked={currentInterval == 15}
                onChange={() => {
                  if (currentInterval == 5) {
                    changeto15minInterval();
                  } else {
                    changeto5minInterval();
                  }
                }}
              />
              &nbsp;
              {currentInterval == 15 ? <strong>15m</strong> : "15m"}
              &nbsp;
            </Box>
          )}

        </Grid>
        <Grid container lg={7}>

        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent={"center"}
        alignItems="center"
      >
        {
          isDashboard &&
          <Grid lg={12} style={{ flex: 1 }} container justifyContent={"center"}>
            <Dashboard />
          </Grid>

        }
        <Grid
          container
          direction="column"
          justifyContent={"center"}
          alignItems="center"
        >
          {

            !isDashboard && schema.map((k, v) => (
              <Grid lg={11} style={{ display: 'flex', flex: 1, marginTop: 30 }} container
                direction={'column'}
                justifyContent={"center"}
                alignContent="center"
              >
                <Typography variant="h5" align="left" style={{ marginBottom: 10 }}>
                  {k.title}
                </Typography>
                {getTable(k.code, k)}
              </Grid>
            ))
          }
        </Grid>
        {/* getTable(PAGE_CODE_VOL_ANALYSIS_TABLE,{code:PAGE_CODE_OI_ANALYSIS_CHART}) */}
        <Button
          variant="contained"
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
          disabled
          color="warning"
          style={{
            textTransform: "none",
            width: `${1100 / 12}%`,
            marginTop: "1rem",
            // color:theme.palette.warning.main
          }}
          startIcon={<InfoIcon />}
        >
          {/* <strong> */}
          Disclaimer:&nbsp;
          {/* </strong> &nbsp; */}
          This website is for educational purpose only.This website owner isnt
          SEBI registered and not responsible for any of your profit/loss with
          this website's views. Please consult your financial advisor and do
          your own research before taking any decision.
        </Button>
      </Grid>
    </Grid>
  );
};

export default Options;
