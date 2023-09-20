import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOptionCurrentSymbol } from "../redux/options";
import { CONSOLIDATED_VOLUME_ENDPOINT } from "../commons/constants";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { logout } from "../redux/login";
import { useSnackbar } from "notistack";
import { DataGrid } from "@mui/x-data-grid";
import { cleanUpData } from "../redux/tableData";

const ConsolidatedVolumeAnalysisPage = () => {
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

  const style = {
    typography: {
      fontWeight: 500,
      lineHeight: 1.4,
      fontFamily: "sans-serif",
      fontSize: "12px",
      letterSpacing: " 0.00938em",
    },
    tableRow: {
      boxShadow: "0 4px 6px -6px #222",
      backgroundColor: "#ffffff",
    },
  };

  console.log("thisiis sddfskldlfjlksdkjflkj");

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
        `${CONSOLIDATED_VOLUME_ENDPOINT}?symbol=${currentSymbol}&interval=5`,
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
    ? ConsolidatedAnalysis.result.volume_ce.map((k, v) => ({
        ...k,
        pe_volume: ConsolidatedAnalysis.result.volume_pe[v].pe_volume,
        pe_strike: ConsolidatedAnalysis.result.volume_pe[v].pe_strike,
        pe_volume_change:
          ConsolidatedAnalysis.result.volume_pe[v].pe_volume_change,
      }))
    : [];

  const rows = vol_data.map((k, v) => ({
    id: v + 1,
    ce_volume: k.ce_volume,
    ce_strike: k.ce_strike,
    ce_volume_change: k.ce_volume_change,
    pe_volume: k.pe_volume,
    pe_strike: k.pe_strike,
    pe_volume_change: k.pe_volume_change,
  }));
  const columns = [
    {
      field: "id",
      headerName: "Position",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: "center",
    },
    {
      field: "ce_strike",
      headerName: "CE Strike",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: "center",
    },
    {
      field: "ce_volume",
      headerName: "CE Volume",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: "center",
    },
    {
      field: "ce_volume_change",
      headerName: "Volume Change",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: "center",
    },
    {
      field: "pe_strike",
      headerName: "PE Strike",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: "center",
    },
    {
      field: "pe_volume",
      headerName: "PE Volume",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: "center",
    },
    {
      field: "pe_volume_change",
      headerName: "Volume Change",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: "center",
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
      justifyContent={"center"}
      alignContent="center"
      sx={{ display: "flex", flex: 1 }}
      style={{ width: "100%", minHeight: "500px" }}
    >
      <Grid container item justifyContent={"center"} sx={{ mb: 5 }}>
        <Typography variant="h3" align="center">
          Volume Analysis
        </Typography>
      </Grid>
      <Grid container item justifyContent={"center"} lg={12}>
        <Box
          sx={{
            height: 750,
            flex: 1,
            boxShadow:"0 4px 6px -6px #222",
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
              sx={{
                w: "100%",
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

export default ConsolidatedVolumeAnalysisPage;
