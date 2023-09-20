import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { theme ,lighttheme} from './commons/theme'
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Navigate } from "react-router-dom";
import PersistentDrawerLeft from './routes/Homepage';
import { Login } from './routes/Login';
import { useDispatch, useSelector } from 'react-redux';
import { SignUp } from './routes/SignUp';
import AdminDashboard from './routes/AdminDashboard';
import { Terms } from './routes/Terms';
import { Contact } from './routes/ContactUs';
import { About } from './routes/AboutUs';
import { Welcome } from './routes/Welcome';
import { ALL_PAGES, GUIDE, LOCAL_STORAGE_PAGE_SCHEMA, page_routes } from './commons/constants';
import { SnackbarProvider } from 'notistack';
import OiVolumeDifferenceAnalysis from './components/OiVolumeDifferenceAnalysis';
import HighestVolumeChangeAnalysis from './components/HighestVolumeChangeAnalysis';
import HighestOiChangeAnalysis from './components/HighestOiChangeAnalysis';
import OiAnalysisTable from './components/OiAnalysisTable';
import OiAndVolumeAnalysisTable from './components/ OiAndVolumeAnalysisTable';
import RangeAnalysise from './components/RangeAnalysise';
import { restoreSchema } from './redux/pageSetup';
// import OneSignal from 'react-onesignal';
function App() {
  const themes = useSelector((state) => state.theme);
  const login = useSelector(state => state.login.isLoggedIn)
  const uid = useSelector(state => state.login.uid)
  const dispatch = useDispatch()
  React.useEffect(()=>{
    // const uid = useSelector(state => state.login.uid)
    const data = localStorage.getItem(`${LOCAL_STORAGE_PAGE_SCHEMA}_${uid}`)
    if(data){
      dispatch(restoreSchema(JSON.parse(data)))
      
  }

  },[])
  
  // React.useEffect(() => {
  //   OneSignal.init({
  //     appId: "532eeb2a-320b-4333-8fd3-b8e154eddf11",
  //     allowLocalhostAsSecureOrigin: true
  //   });

  // }, []);
  return (
    <ThemeProvider theme={themes.darkTheme ? theme : lighttheme}>
      <CssBaseline />
      {}
      <Box className="App" style={{ minHeight: '100vh', minWidth: '1vw', margin: 0, padding: 0 }}>
        <SnackbarProvider maxSnack={3}>
          
          <Routes>
           
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {
              login && 
              <React.Fragment>
                <Route path="/dashboard" element={<PersistentDrawerLeft path="/dashboard"/>} />
                {/* <Route path="/consolidatedAnalysis" element={<PersistentDrawerLeft path="/consolidatedAnalysis"/>} />
                <Route path="/consolidatedVolumeAnalysis" element={<PersistentDrawerLeft path="/consolidatedVolumeAnalysis"/>} />
                <Route path="/consolidatedOIAnalysis" element={<PersistentDrawerLeft path="/consolidatedOIAnalysis"/>} /> */}
                <Route path="/consolidatedOIAnalysisCheck" element={<PersistentDrawerLeft path="/consolidatedOIAnalysisCheck"/>} />
                <Route path="/admin" element={<AdminDashboard />} />
                {
                  page_routes.map((k,v)=>(
                <Route path={`/${k.code}`} element={<PersistentDrawerLeft path={k.code} schemaData={k}
                
                />}/> 

                  ))
                }
                {/* <Route path="/rangeAnalysis" element={<RangeAnalysis/>}/>  */}
                <Route path="/rangeAnalysise" element={<RangeAnalysise/>}/> 
                <Route path="/oi&volDiffAnalysis" element={<OiVolumeDifferenceAnalysis/>} />
                <Route path="/highestVolumeChangeAnalysis" element={<HighestVolumeChangeAnalysis/>} />
                <Route path="/highestOIChangeAnalysis" element={<HighestOiChangeAnalysis/>} />
                <Route path="/oiAnalysisTable" element={<OiAnalysisTable/>} /> 
                <Route path="/oi&VolumeAnalysisTable" element={<OiAndVolumeAnalysisTable/>} />
                
              </React.Fragment>
            }
            <Route
              path="/terms"
              element={<Terms />}
            />
            <Route
              path="/guide"
              // element={<Guide/>}
              component={() => {
                window.location.href = GUIDE
                return null;
              }}
            />
            <Route
              path="/contactus"
              element={<Contact />}
            />
            <Route
              path="/aboutus"
              element={<About />}
            />
            <Route
              path="/welcome"
              element={<Welcome />}
            />
            <Route
              path="*"
              element={<Navigate to="/welcome" replace />}
            />
          </Routes>
        </SnackbarProvider>
      </Box>
    </ThemeProvider>

  );
}

export default App;



// import React from "react";
// import { Grid, Typography } from "@mui/material";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { theme } from "../commons/theme";
// import { StyledTableCell, StyledTableRow } from "./StyledTable";
// import { getTableData } from "../redux/tableData";
// // import { useSelector } from "react-redux";
// import { useSnackbar } from "notistack";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   setLastUpdated,
//   setOptionCurrentSymbol,
//   setOptionSymbols,
//   setTimeInterval15,
//   setTimeInterval5,
// } from "../redux/options";
// import { axios } from "axios";
// import {
//   GOLDEN_RATIO_ENDPOINT,
//   OPTION_TIME_REVERSAL_ENDPOINT,
//   SERVER,
// } from "../commons/constants";




// export const RangeAnalysis = (props) => {
//   const { enqueueSnackbar } = useSnackbar();
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.login.user_token);
//   const currentSymbol = useSelector((state) => state.options.currentSymbol);
//   const [Data,setData] = React.useState(false);
 

//   // console.log("rangeData",props)
  
//   const handleForcedLogout = () => {
//     enqueueSnackbar("Session Expired.", { variant: "warning" });
//   };
//     React.useEffect(() => {
//     let url = `${SERVER}/option_data?symbol=${currentSymbol}`;
//     const header = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     };
//     axios
//     .post(url, {}, header)
//     .then((res) => {
//       if (currentSymbol == "DASHBOARD") {
//         setData(res.data.result);
//         dispatch(setLastUpdated(res.data.timestamp)); 
//         //this is the new dispatch
//         dispatch(getTableData(res.data.result));
//         return;
//       }
//       setData(res.data);
      
//     })
//     .catch((e) => {
//       if (e.response) {
//         if (e.response.status == 401) {
//           handleForcedLogout();
//           // dispatch(logout());
//         }
//       }
//     });
//    }, [])
   
   

//    const data = useSelector((state) => state.getTableData.data);
//   // console.log(currentInterval,"range......")

// // console.log("current",data)