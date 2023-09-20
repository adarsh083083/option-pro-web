import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setOptionCurrentSymbol,
} from "../redux/options";
import {
  MIXED_ANALYSIS,
} from "../commons/constants";
import { useTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import { logout } from "../redux/login";
import { useSnackbar } from "notistack";
import { DataGrid } from "@mui/x-data-grid";
import { cleanUpData } from "../redux/tableData";

const ConsolidatedOIAnalysisPageCheck = () => {
  const theme = useTheme()
  const dispatch = useDispatch();
  const currentSymbol = useSelector((state) => state.options.currentSymbol);
  const [ConsolidatedAnalysis, setConsolidatedAnalysis] = React.useState(false);
  // const [charts, setCharts] = React.useState(false)
  const { enqueueSnackbar } = useSnackbar();
  // const [dataNifty, setDataNifty] = React.useState(false)
  // const [symbols, setSymbols] = React.useState(false)
  // const [currentSymbol, setCurrentSymbol] = React.useState(false)
  const [repeater, setRepeater] = React.useState(0);
  const [repeaterOI, setRepeaterOI] = React.useState(0);
  const token = useSelector((state) => state.login.user_token);
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const handleForcedLogout = () => {
    enqueueSnackbar("Session Expired.", { variant: "warning" });
  };

  const getConsolidatedData = () => {
    if (!currentSymbol) {
      return false;
    }
    if (currentSymbol === "DASHBOARD") {
      dispatch(setOptionCurrentSymbol("NIFTY"));
        dispatch(cleanUpData())
        setConsolidatedAnalysis(false);
      //  enqueueSnackbar('Consolidated Analysis is available only for Index.',{variant:"warning"});
      return false;
    }
    axios
      .post(`${MIXED_ANALYSIS}`, {}, header)
      .then((res) => {
        console.log("resssss",res)
        setConsolidatedAnalysis(res?.data?.result)
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

  React.useEffect(() => {
    getConsolidatedData();
    setTimeout(() => setRepeaterOI((prevState) => prevState + 1), 60000);
  }, [currentSymbol, repeaterOI]);

  const vol_data = ConsolidatedAnalysis ? ConsolidatedAnalysis.map((k, v) => {
        console.log("k", k);

        return {
          ...k,
          id:k.id,
          date:k.date,
          time:k.time,
          ce_sp_volume:k.ce_sp_volume,
          pe_sp_volume:k.pe_sp_volume,
          vwap_vol_y:k.vwap_vol_y,
          ce_oi:k.ce_oi,
          pe_oi:k.pe_oi,
          ce_hv:k.ce_hv,
          pe_hv:k.pe_hv,
          ce_sp_oi:k.ce_sp_oi,
          pe_sp_oi:k.pe_sp_oi,
          vwap_oi_y:k.vwap_oi_y,
          ce_price_oi:k.ce_price_oi,
          pe_price_oi:k.pe_price_oi,
          oi_pcr:k.oi_pcr,
          times_oi:k.times_oi,
          ce_sp_coi:k.ce_sp_coi,
          pe_sp_coi:k.pe_sp_coi,
          vwap_coi_y:k.vwap_coi_y,
          ce_coi:k.ce_coi,
          pe_coi:k.pe_coi,
          coi_pcr:k.coi_pcr,
          times_coi:k.times_coi,
          vol_pcr:k.vol_pcr
          
          
        };
      })
    : [];
  let Temp = (props) => {
    console.log(props, "........aaaa");
    return (
      <>
        <span style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
          {props.row.pe_strike}
        </span>
        <br />
        <hr />
        <span>{props.row.pe_oi}</span>
      </>
    );
  };

  const rows = vol_data.map((k, v) => ({
    id: v + 1,
    date: k.date,
    time:k.time,
    ce_sp_volume: k.ce_sp_volume,
    pe_sp_volume: k.pe_sp_volume,
    vwap_vol_y:k.vwap_vol_y,
    ce_oi:k.ce_oi,
    ce_hv:k.ce_hv,
    pe_hv:k.pe_hv,
    ce_sp_coi:k.ce_sp_coi,
    pe_sp_coi:k.pe_sp_coi,
    vwap_coi_y:k.vwap_coi_y,
    ce_coi:k.ce_coi,
    pe_coi:k.pe_coi,
    ce_sp_oi:k.ce_sp_oi,
    pe_sp_oi:k.pe_sp_oi,
    vwap_oi_y:k.vwap_oi_y,
   
    pe_oi:k.pe_oi,
    ce_price_oi:k.ce_price_oi,
    pe_price_oi:k.pe_price_oi,
    oi_pcr:k.oi_pcr,
    times_oi:k.times_oi,
    coi_pcr:k.coi_pcr,
    times_coi:k.times_coi,
    vol_pcr:k.vol_pcr
 
  }));
  const columns = [
    {
      field: "id",
      headerName: "Positionfsdfsadf",
      flex: 4,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "date",
      headerName: "Date",
      flex: 4,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "time",
      headerName: "Time",
      flex: 4,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "ce_sp_volume",
      headerName: "SP Volume",
      renderCell: (params) => (
        <div>
          {console.log(params, "params.........")}
          <Typography>{params.row.ce_sp_volume} PE</Typography>
          <hr />
          <Typography>{params.row.pe_sp_volume } CE</Typography>
        </div>
      ),
      flex: 5,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "vwap_vol_y",
      headerName: "VWAP - Vol (Y)",
      flex: 5,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "ce_hv,pe_hv",
      headerName: "HV",
      renderCell: (params) => (
        <div>
          {console.log(params, "params.........")}
          <Typography>{params.row.pe_hv}PE</Typography>
          <hr />
          <Typography>{params.row.ce_hv}CE</Typography>
        </div>
      ),
      flex: 4,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "ce_sp_coi,pe_sp_coi",
      headerName: "SP - COI",
      flex: 4,
      renderCell: (params) => (
        <div>
          {console.log(params, "params.........")}
          <Typography>{params.row.pe_sp_coi} PE</Typography>
          <hr />
          <Typography>{params.row.ce_sp_coi} CE</Typography>
        </div>
      ),
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "vwap_coi_y",
      headerName: "VWAP - COI (Y)",
      flex: 5,

      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "pe_coi,ce_coi,",
      headerName: "COI",
      flex: 4,
      renderCell: (params) => (
        <div>
          {console.log(params, "params.........")}
          <Typography>{params.row.pe_coi}PE </Typography>
          <hr />
          <Typography>{params.row.ce_coi}CE </Typography>
        </div>
      ),
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "ce_sp_oi,pe_sp_oi",
      headerName: "SP - OI",
      flex: 3,
      renderCell: (params) => (
        <div>
          {console.log(params, "params.........")}
          <Typography>{params.row.pe_sp_oi}PE </Typography>
          <hr />
          <Typography>{params.row.ce_sp_oi}CE </Typography>
        </div>
      ),
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "vwap_oi_y",
      headerName: "VWAP - OI(Y)",
      flex: 4,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "ce_oi,pe_oi",
      headerName: "OI",
      flex: 4,
      renderCell: (params) => (
        <div>
          {console.log(params, "params.........")}
          <Typography>{params.row.pe_oi} </Typography>
          <hr />
          <Typography>{params.row.ce_oi} </Typography>
        </div>
      ),
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "ce_price_oi,pe_price_oi",
      headerName: "Price (OI)",
      flex: 4,
      renderCell: (params) => (
        <div>
          {console.log(params, "params.........")}
          <Typography>{params.row.ce_price_oi} </Typography>
          <hr />
          <Typography>{params.row.pe_price_oi} </Typography>
        </div>
      ),
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "oi_pcr",
      headerName: "OI PCR",
      flex: 3,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "times_oi",
      headerName: "Times - OI",
      flex: 4,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "coi_pcr",
      headerName: "COI PCR",
      flex: 4,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "times_coi",
      headerName: "Times - COI",
      flex: 4,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "vol_pcr", 
      headerName: "Vol PCR",
      flex: 4,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
  ];
  return (
    <Grid
      container 
      justifyContent={"center"}
      alignContent="center"
      sx={{ display: "flex", flex: 1 }}
    >
      <Grid container item justifyContent={"center"} sx={{ mb: 5 }}>
        <Typography variant="h4" align="center">
          Mixed Analysis
        </Typography>
      </Grid>  
      <Grid container item justifyContent={"center"} lg={12}>
        <Box
          sx={{
            height: 750,
            flex: 1,
            width: "100%",
            "& .super-app-theme--header": {
              backgroundColor: theme.palette.accent,
              color: theme.palette.common.black,
              fontFamily: "Roboto",
              fontWeight: "bold",
            },
          }}
          // component={Paper}
        >
          {
            <DataGrid
              sx={{ w: "100%" }}
              // components={{
              //     Toolbar: CustomToolbar
              // }}
              rowHeight={25}
              rows={rows}
              columns={columns}
              experimentalFeatures={{ newEditingApi: true }}
              // pageSize={5}
              // rowsPerPageOptions={[20]}
              // checkboxSelection
              // hideFooterPagination
              // hideFooter
              density="comfortable"
            />
          }
        </Box>
      </Grid>
    </Grid>
  );
};

export default ConsolidatedOIAnalysisPageCheck;

//This is the header parts
// import { Button, Grid, Typography } from "@mui/material"
// import axios from "axios"
// import React from "react"
// import { useSelector, useDispatch } from 'react-redux'
// import { setOptionCurrentSymbol, setOptionSymbols, setTimeInterval15, setTimeInterval5 } from '../redux/options'
// import DataTable from "./SingleTable"
// import { CONSOLIDATED_DATA_ENDPOINT, CONSOLIDATED_OI_ENDPOINT, CONSOLIDATED_VOLUME_ENDPOINT, GOLDEN_RATIO_ENDPOINT, OPTION_TIME_REVERSAL_ENDPOINT, SERVER } from "../commons/constants"
// import CustomizedBreadcrumbs from "./Breadcrumb"
// import { SummaryPanel } from './SummaryPanel'
// import { Stratergies } from "./CallPanel"

// import InfoIcon from '@mui/icons-material/Info';
// import { StockSummary } from "./StockSummary"
// import { IndexSummary } from "./IndexSummary"
// import { StockData } from "./StockData"
// import { OIAnalysis } from "./OIAnalysisPanel"
// import { Dashboard } from "./Dashboard"
// import { theme } from "../commons/theme"
// import { OITable } from "./OITable"
// import { OITableChart } from "./OITableChart"
// import OIDataTable from "./OITableGrid"
// import OIVDataTable from "./OIVTableGrid"
// import { ChartSwitch } from "./ChartTableSwitch"
// import { Box } from "@mui/system"
// import { AllChartsOthers } from "./AllChartsOthers"
// import { logout } from "../redux/login"
// import { useSnackbar } from 'notistack';
// import { Indicators } from "./Indicators"
// import { TimeReversal } from "./TimeReversal"
// import { GoldenRatio } from "./GoldenRatio"
// import { Straddle } from "./ConsolidatedAnalysis/Straddle"
// import { COVolumeAnalysis } from "./ConsolidatedAnalysis/COVolumeAnalysis"
// import { Advantage } from "./ConsolidatedAnalysis/Advantage"
// import { DataGrid } from "@mui/x-data-grid"

//const ConsolidatedOIAnalysisPageCheck = () => {

//**************************************************************** */
// console.log("ConsolidatedOIAnalysisPageCheck")
// const dispatch = useDispatch()
// const currentSymbol = useSelector(state => state.options.currentSymbol)
// const [ConsolidatedAnalysis, setConsolidatedAnalysis] = React.useState(false)
// // const [charts, setCharts] = React.useState(false)
// const { enqueueSnackbar } = useSnackbar();
// // const [dataNifty, setDataNifty] = React.useState(false)
// // const [symbols, setSymbols] = React.useState(false)
// // const [currentSymbol, setCurrentSymbol] = React.useState(false)
// const [repeater, setRepeater] = React.useState(0)
// const [repeaterOI, setRepeaterOI] = React.useState(0)
// const token = useSelector(state => state.login.user_token)
// const header = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
// const handleForcedLogout =()=>{

//         enqueueSnackbar('Session Expired.',{variant:"warning"});

// }

// const getConsolidatedData = () => {
//     if (!currentSymbol) { return false }
//     if (currentSymbol === 'DASHBOARD') {
//         dispatch(setOptionCurrentSymbol('NIFTY'))
//          setConsolidatedAnalysis(false);
//         //  enqueueSnackbar('Consolidated Analysis is available only for Index.',{variant:"warning"});
//         return false
//     }
//     axios.post(`${CONSOLIDATED_OI_ENDPOINT}?symbol=${currentSymbol}&interval=5`, {}, header)
//         .then(res => setConsolidatedAnalysis(res.data))
//         .catch(e => {
//             if (e.response){
//                 if(e.response.status ==401){
//                     handleForcedLogout()
//                     dispatch(logout())
//                 }
//             }

//          })

// }

// React.useEffect(() => {

//     getConsolidatedData()
//     setTimeout(() => setRepeaterOI(prevState => prevState + 1), 60000);
// }, [currentSymbol
//     , repeaterOI
// ])

// const vol_data = ConsolidatedAnalysis?ConsolidatedAnalysis.result.ce_oi.map((k,v)=>({
//     ...k,
//     pe_oi: ConsolidatedAnalysis.result.pe_oi[v].pe_oi,
//     pe_strike: ConsolidatedAnalysis.result.pe_oi[v].ce_strike,
//     pe_oi_change: ConsolidatedAnalysis.result.pe_oi[v].pe_oi_change,
// })) :[]

// const rows = vol_data.map((k,v)=>(
//     {
//         id : v+1,
//         ce_oi : k.ce_oi,
//         ce_strike : k.ce_strike,
//         ce_oi_change : k.ce_oi_change,
//         pe_oi : k.pe_oi,
//         pe_strike : k.pe_strike,
//         pe_oi_change : k.pe_oi_change,
//         pe_oi2 : k.pe_oi,
//         pe_strike2 : k.pe_strike,
//         pe_oi_change2 : k.pe_oi_change,
//     }
// ))

// const columns = [
//     {
//         field: 'ce_strike', headerName: 'Time',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },{
//         field: 'ce_oi', headerName: 'Total',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },{
//         field: 'ce_oi_change', headerName: '43100',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },{
//         field: 'pe_strike', headerName: '43200',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },{
//         field: 'pe_oi', headerName: '43300',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },{
//         field: 'pe_oi_change', headerName: '43400',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },{
//         field: 'pe_oi2', headerName: '43500',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },{
//         field: 'pe_strike2', headerName: '43600',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },{
//         field: 'pe_oi_change2', headerName: '43700',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },

//     {
//         field: 'pe_oi_change2', headerName: '43100',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },
//     {
//         field: 'pe_oi_change2', headerName: '43200',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },
//     {
//         field: 'pe_oi_change2', headerName: '43300',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },
//     {
//         field: 'pe_oi_change2', headerName: '43400',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },
//     {
//         field: 'pe_oi_change2', headerName: '43500',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },
//     {
//         field: 'pe_oi_change2', headerName: '43500',
//         flex: 1,
//         headerAlign: 'start', headerClassName: "super-app-theme--header"
//     },

//     // {
//     //     field: 'ce_strike', headerName: 'CE Strike',
//     //     flex: 1,
//     //     headerAlign: 'center', headerClassName: "super-app-theme--header"
//     // },
//     // {
//     //     field: 'ce_oi', headerName: 'CE OI',
//     //     flex: 1,
//     //     headerAlign: 'center', headerClassName: "super-app-theme--header"
//     // },
//     // {
//     //     field: 'ce_oi_change', headerName: 'OI Change',
//     //     flex: 1,
//     //     headerAlign: 'center', headerClassName: "super-app-theme--header"
//     // },
//     // {
//     //     field: 'pe_strike', headerName: 'PE Strike',
//     //     flex: 1,
//     //     headerAlign: 'center', headerClassName: "super-app-theme--header"
//     // },
//     // {
//     //     field: 'pe_oi', headerName: 'PE OI',
//     //     flex: 1,
//     //     headerAlign: 'center', headerClassName: "super-app-theme--header"
//     // },
//     // {
//     //     field: 'pe_oi_change', headerName: 'OI Change',
//     //     flex: 1,
//     //     headerAlign: 'center', headerClassName: "super-app-theme--header"
//     // },
// ]

// return (
//     <Grid container justifyContent={'center'}
//         alignContent='center'
//         sx={{ display: 'flex',flex:1 }}
//     >
//         <Grid container item justifyContent={'center'} sx={{ mb: 5 }}>
//             <Typography variant='h3' align='center' >
//                 Volume Analysis Check

//             </Typography>
//         </Grid>
//         <Grid container item justifyContent={'center'}
//             lg={10}
//         >
//             <Box
//                 sx={{
//                     height: 750,
//                     flex: 1,
//                     width: '100%',
//                     '& .super-app-theme--header': {
//                         backgroundColor: theme.palette.accent,
//                         color: theme.palette.common.black,
//                         fontFamily: 'Roboto',
//                         fontWeight: 'bold'
//                     },
//                 }}
//             // component={Paper}
//             >
//                 {<DataGrid
//                     sx={{ w: '100%' }}

//                     // components={{
//                     //     Toolbar: CustomToolbar
//                     // }}
//                     rows={rows}
//                     columns={columns}
//                     // pageSize={5}
//                     // rowsPerPageOptions={[20]}
//                     // checkboxSelection
//                     // hideFooterPagination
//                     // hideFooter
//                     density='comfortable'
//                 />}
//             </Box>
//         </Grid>

//     </Grid>
// )
//}
// export default ConsolidatedVolumeAnalysisPage
// export default ConsolidatedOIAnalysisPageCheck