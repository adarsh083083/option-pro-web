import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOptionCurrentSymbol } from "../redux/options";
import { CONSOLIDATED_OI_ENDPOINT } from "../commons/constants";

import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { logout } from "../redux/login";
import { useSnackbar } from "notistack";
import { DataGrid } from "@mui/x-data-grid";
import { cleanUpData } from "../redux/tableData";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const ConsolidatedOIAnalysisPage = () => {
  const theme = useTheme();
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
      dispatch(cleanUpData());

      setConsolidatedAnalysis(false);
      //  enqueueSnackbar('Consolidated Analysis is available only for Index.',{variant:"warning"});
      return false;
    }
    axios
      .post(
        `${CONSOLIDATED_OI_ENDPOINT}?symbol=${currentSymbol}&interval=5`,
        {},
        header
      )
      .then((res) => setConsolidatedAnalysis(res.data))
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

  const vol_data = ConsolidatedAnalysis
    ? ConsolidatedAnalysis.result.ce_oi.map((k, v) => ({
        ...k,
        pe_oi: ConsolidatedAnalysis.result.pe_oi[v].pe_oi,
        pe_strike: ConsolidatedAnalysis.result.pe_oi[v].ce_strike,
        pe_oi_change: ConsolidatedAnalysis.result.pe_oi[v].pe_oi_change,
      }))
    : [];

  const rows = vol_data.map((k, v) => ({
    id: v + 1,
    ce_oi: k.ce_oi,
    ce_strike: k.ce_strike,
    ce_oi_change: k.ce_oi_change,
    pe_oi: k.pe_oi,
    pe_strike: k.pe_strike,
    pe_oi_change: k.pe_oi_change,
  }));
  const columns = [
    {
      field: "id",
      headerName: "Position",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align:"center",
    },
    {
      field: "ce_strike",
      headerName: "CE Strike",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align:"center",
    },
    {
      field: "ce_oi",
      headerName: "CE OI",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align:"center",
    },
    {
      field: "ce_oi_change",
      headerName: "OI Change",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align:"center",
    },
    {
      field: "pe_strike",
      headerName: "PE Strike",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align:"center",
    },
    {
      field: "pe_oi",
      headerName: "PE OI",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align:"center",
    },
    {
      field: "pe_oi_change",
      headerName: "OI Change",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align:"center",
    },
  ];
  const GridCustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton
          style={{ color: theme.palette.secondary.main }}
        />
        <GridToolbarExport style={{ color: theme.palette.secondary.main }} />

        <GridToolbarColumnsButton
          style={{ color: theme.palette.secondary.main }}
        />
      </GridToolbarContainer>
    );
  };
  return (
    <Grid
      container
      item
      lg={12}
      justifyContent={"center"}
      alignContent="center"
      sx={{ display: "flex", flex: 1 }}
    >
      <Grid container item justifyContent={"center"} sx={{ mb: 5 }}>
        <Typography variant="h3" align="left">
          OI Analysis
        </Typography>
      </Grid>
      <Grid   
        container
        item
        justifyContent={"center"}
        lg={12}
        style={{ flex: 1, width: "100%", minHeight: "500px" }}
      >
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
              textAlign: "center",
              fontSize: "14px",
              boxShadow:"0 4px 6px -6px #222",
            },
          }}
          // component={Paper}
        >
          {
            <DataGrid
              size="small"
              sx={{ 
                width: "100%" ,
                tabSize: "small",
                fontWeight: 500,
                lineHeight: 1.4,
                fontFamily: "sans-serif",
                fontSize: "12px",
                letterSpacing: " 0.00938em",
            }}
              // components={{
              //     Toolbar: CustomToolbar
              // }}
              rowHeight={25}
              rows={rows}
              columns={columns}
              // pageSize={5}
              // rowsPerPageOptions={[20]}
              // checkboxSelection
              // hideFooterPagination
              // hideFooter
              density="comfortable"
              components={{
                Toolbar: GridCustomToolbar,
              }}
            />
          }
        </Box>
      </Grid>
    </Grid>
  );
};

// export default ConsolidatedVolumeAnalysisPage

export default ConsolidatedOIAnalysisPage;
