import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { theme } from "../../commons/theme";
import { useTheme } from '@mui/material/styles';
import { StyledTableCell, StyledTableRow } from "../StyledTable";
import { useSelector } from "react-redux";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  useGridApiContext,
  useGridRootProps,
} from "@mui/x-data-grid";
import clsx from "clsx";
// import { useDemoData } from '@mui/x-data-grid-generator'; 

export const COVolumeAnalysis = ({ data }) => {
  const theme = useTheme()
  const [savedState, setSavedState] = React.useState({
    count: 0,
    initialState: data.initialState,
  });

  const style = {
    typography: {
      fontWeight: 500,
      lineHeight: 1.4,
      fontFamily: "sans-serif",
      fontSize: "12px",
      letterSpacing: " 0.00938em",
      
    },
    tableRow: {
      boxShadow: " 0 4px 6px -6px #222",
      backgroundColor: "#ffffff",
    },
  };


  const syncState = React.useCallback((newInitialState) => {
    setSavedState((prev) => ({
      ...prev,
      count: prev.count + 1,
      initialState: newInitialState,
    }));
  }, []);

  if (!data) {
    return null;
  }

  const modData = data.map((k, v) => ({
    ...k,
    data: k.data.map((r, s) => ({
      ...r,
      ce_diff: v > 0 ? data[v - 1]?.data[s]?.ce_oi - r["ce_oi"] : 0,
      pe_diff: v > 0 ? data[v - 1].data[s]?.pe_oi - r["e_oi"] : 0,
    })),
  }));
  const columns = [
    {
      field: "time",
      headerName: "Time",
      headerAlign: "center",
      headerClassName: "super-app-theme--header0",
      align: "center",
    },
    // { field: 'total', headerName: 'Total', headerAlign: 'center', headerClassName: "super-app-theme--header0" },
  ];
  // const dynamicColumn =
  data[0].data
    .map((k, v) => [
      {
        field: `change_diff_intraday${k["ce_strike"]}`,
        headerName: k["ce_strike"],
        headerAlign: "center",
        headerClassName: "super-app-theme--header0",
        align: "center",
        cellClassName: (params) =>
          clsx("super-app-theme--cell1", {
            negative: params.value < 0,
            positive: params.value > 0,
          }),
        width: 100,
      },
    ])
    .map((k) => columns.push(...k));

  data[0].data
    .map((k, v) => [
      {
        field: `change_diff_intrad${k["ce_strike"]}`,
        headerName: k["ce_strike"],
        headerAlign: "center",
        headerAlign: "center",
        headerClassName: "super-app-theme--header1",
        align: "center",
        cellClassName: (params) =>
          clsx("super-app-theme--cell1", {
            negative: params.value < 0,
            positive: params.value > 0,
          }),
        width: 130,
      },
    ])
    .map((k) => columns.push(...k));
  data[0].data
    .map((k, v) => [
      {
        field: `put_call_oi_diff${k["ce_strike"]}`,
        headerName: k["ce_strike"],
        headerAlign: "center",
        headerAlign: "center",
        headerClassName: "super-app-theme--header0",
        align: "center",
        cellClassName: (params) =>
          clsx("super-app-theme--cell0", {
            negative: params.value < 0,
            positive: params.value > 0,
          }),
        width: 130,
      },
    ])
    .map((k) => columns.push(...k));
  const groups = [
    {
      groupId: "Net Advantage",
      children: data[0].data.map(
        (k, v) => (
          console.log(k, "netAdv...."),
          { field: `change_diff_intraday${k["ce_strike"]}` }
        )
      ),
      headerClassName: "super-app-theme--header0",
      headerAlign: "center",
    },
    {
      groupId: "Intraday Change inPut Call in OI Difference",
      children: data[0].data.map(
        (k, v) => (
          console.log(k, "Intad...."),
          { field: `change_diff_intrad${k["ce_strike"]}` }
        )
      ),
      headerClassName: "super-app-theme--header1",
      headerAlign: "center",
    },
    {
      groupId: "Put Call in OI Difference",
      children: data[0].data.map((k, v) => ({
        field: `put_call_oi_diff${k["ce_strike"]}`,
      })),
      headerClassName: "super-app-theme--header0",
      headerAlign: "center",
    },
  ];

  groups.push({
    groupId: "main",
    headerName: "",
    children: [{ field: "time" }],
    headerClassName: "super-app-theme--header0",
  });
  const rows = modData.map((k, v) => ({
    id: v,
    time: k["time"],
    total: k["oi_sum"].toFixed(3),
    // 'indiavix': k['vix'],
    ...k.data.reduce(
      (acc, val, index) => (
        console.log(val, "valu......"),
        {
          ...{
            [`change_diff_intraday${val.ce_strike}`]:
              val["change_diff_intraday"]?.toFixed(0) > 0
                ? 500000 + val["change_diff_intraday"] ? val["change_diff_intraday"] : 0
                : val["change_diff_intraday"] ? val["change_diff_intraday"].toFixed(0) : 0 - 500000,
            [`change_diff_intrad${val.ce_strike}`]:
              val["change_diff_intraday"]?.toFixed(0),
            [`put_call_oi_diff${val.ce_strike}`]:
              val["put_call_oi_diff"]?.toFixed(0),
          },
          ...acc,
        }
      ),
      {}
    ),
  }));


  const GridCustomToolbar = ({ syncState }) => {
    const rootProps = useGridRootProps();
    const apiRef = useGridApiContext();

    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton style={{ color: "black" }} />
        <GridToolbarExport  style={{ color: "black" }}/>
        {/* <GridToolbarDensitySelector  style={{color:'white'}} /> */}
        <GridToolbarColumnsButton style={{ color: "black" }} />
        {/* <Button
                    size="small"
                    startIcon={<rootProps.components.ColumnSelectorIcon />}
                    onClick={() => syncState(apiRef.current.exportState())}
                    {...rootProps.componentsProps?.baseButton}
                 style={{color:'white'}} >
                    Recreate the 2nd grid
                </Button> */}
      </GridToolbarContainer>
    );
  };

  return (
    // <React.Fragment>
    <Grid container item lg={12} justifyContent={'center'}
      alignContent='center'
      sx={{ display: 'flex', flex: 1 }}
    >
      <Grid container item justifyContent={'center'} sx={{ mt: 5 }}>
        <Typography variant='h4' align='center' >
          Consolidated Volume Analysis 
        </Typography>
      </Grid>
      <Grid container item justifyContent={'center'}
        lg={12} style={{ flex: 1, width: "100%", minHeight: "500px" }}
      >
        {/* <br /><Typography variant="h6" align='center' width="100%"> Consolidated Data Analysis</Typography> */}

        <Box
          sx={{
            height: 750,
            flex: 1,
            width: '100%',
            "& .super-app-theme--header0": {
              backgroundColor: theme.palette.accent,
              color: theme.palette.common.black,
              fontFamily: "Roboto",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "14px",
            },
            "& .super-app-theme--header1": {
              backgroundColor: theme.palette.accent2,
              color: theme.palette.common.black,
              fontFamily: "Roboto",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "14px",
              // opacity:0.9
            },
            "& .super-app-theme--cell0": {
              // color:'black',
              // opacity:0.1
            },
            "& .super-app-theme--cell1.negative": {
              color: "red",
              // opacity:0.1
            },
            "& .super-app-theme--cell1.positive": {
              color: "green",
              // opacity:0.1
            },
            "& .super-app-theme--cell1": {
              color: "black",
              // backgroundColor: theme.palette.accent,
            },
            "& .super-app-theme--cell0.negative": {
              color: "red",
              // backgroundColor: theme.palette.backgroundShade,
            },
            "& .super-app-theme--cell0.positive": {
              color: "green",
              // backgroundColor: theme.palette.backgroundShade,
            },
          }}
        // component={Paper}
        >
          <DataGrid
            sx={{
               w: "100%",
              tabSize: 'small' ,
              fontWeight: 500,
              lineHeight: 1.4,
              fontFamily: "sans-serif",
              fontSize: "12px",
              letterSpacing: " 0.00938em",
              
              }}
            // initialState={{
            //     sorting: {
            //         sortModel: [{ field: 'strike', sort: 'asc' }],
            //     },
            // }}
            initialState={savedState.initialState}
            key={savedState.count}
            components={{ Toolbar: GridCustomToolbar }}
            componentsProps={{ toolbar: { syncState } }}
            experimentalFeatures={{ columnGrouping: true }}
            columnGroupingModel={groups}
            rowHeight={25}
            rows={rows}
            columns={columns}
            // pageSize={5}
            rowsPerPageOptions={[20]}
            // checkboxSelection
            hideFooterPagination
            hideFooter
            density="comfortable"
          />
        </Box>
        {/* <div style={{
                display: 'block',
                maxWidth: '90vw',
                overflowX: 'scroll',
                overflowY: 'scroll',
                position: 'relative',
                paddingLeft: '100px',
                maxHeight:'60vh',

            }}>

                <TableContainer component={Paper} style={{borderRadius:0}}>
                    <Table sx={{ minWidth: 700, }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center" style={{ position: 'absolute', width: '100px', backgroundColor: '#33C2FF', marginLeft: '-100px',borderBottom:'none',height:'59px'}}>Time</StyledTableCell>
                                <StyledTableCell align="center" rowSpan={2} >Spot Price</StyledTableCell>
                                <StyledTableCell align="center" rowSpan={2} >India VIX</StyledTableCell>

                                {
                                    data[size].data.map(k => (

                                        <StyledTableCell align="center" colSpan={3} style={{ borderLeft: 1, borderLeftStyle: 'solid', borderLeftWidth: 1 }} >{k['ce_strike']}</StyledTableCell>
                                    ))
                                }
                                <StyledTableCell align="center" colSpan={7} style={{ borderLeft: 1, borderLeftStyle: 'solid', borderLeftWidth: 1 }}>Intraday Change inPut Call in OI Difference</StyledTableCell>
                                <StyledTableCell align="center" colSpan={7} style={{ borderLeft: 1, borderLeftStyle: 'solid', borderLeftWidth: 1 }} >Put Call in OI Difference</StyledTableCell>
                              
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center" style={{
                                    position: 'absolute', backgroundColor: '#33C2FF', width: '100px', marginLeft: '-100px',
                                     height: '58px'
                                }}></StyledTableCell>


                                {
                                    data[size].data.map(k => (
                                        <React.Fragment>

                                            <StyledTableCell align="center" style={{ borderLeft: 1, borderLeftStyle: 'solid', borderLeftWidth: 1 }}>Call</StyledTableCell>
                                            <StyledTableCell align="center">Put</StyledTableCell>
                                            <StyledTableCell align="center">Straddle</StyledTableCell>
                                        </React.Fragment>
                                    ))
                                }
                                {
                                    data[size].data.map(k => (

                                        <StyledTableCell align="center" style={{ borderLeft: 1, borderLeftStyle: 'solid', borderLeftWidth: 1 }}>{k['ce_strike']}</StyledTableCell>
                                    ))
                                }
                                {
                                    data[size].data.map(k => (

                                        <StyledTableCell align="center" style={{ borderLeft: 1, borderLeftStyle: 'solid', borderLeftWidth: 1 }}>{k['ce_strike']}</StyledTableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody style={{height:'30rem',overflowY:'scroll'}}>
                            {
                                data.map((k, v) => (
                                    <React.Fragment>
                                        <StyledTableRow key={'c'}>




                                            <StyledTableCell align="center" style={{ position: 'absolute', width: '100px', backgroundColor: v % 2 == 0 ? '#393842' : 'rgba(24, 24, 43,1.0)', marginLeft: '-100px' }}>{k['time']}</StyledTableCell>
                                            <StyledTableCell align="center" >{k['spot_price']}</StyledTableCell>
                                            <StyledTableCell align="center" >{k['vix']}</StyledTableCell>
                                            {
                                                k.data.map(v => (

                                                    <React.Fragment>
                                                        <StyledTableCell align="center" >{parseFloat(v['ce_ltp']).toFixed(2)}</StyledTableCell>
                                                        <StyledTableCell align="center" >{parseFloat(v['pe_ltp']).toFixed(2)}</StyledTableCell>
                                                        <StyledTableCell align="center" >{parseFloat(v['straddle']).toFixed(2)}</StyledTableCell>
                                                    </React.Fragment>
                                                ))
                                            }
                                            {
                                                k.data.map(v => (

                                                    <React.Fragment>
                                                        <StyledTableCell align="center" style={{
                                                            color: v['change_diff_intraday'] > 0 ? theme.palette.success.main : v['change_diff_intraday'] < 0 ? theme.palette.error.main : 'unset'
                                                        }} >{v['change_diff_intraday']}</StyledTableCell>

                                                    </React.Fragment>
                                                ))
                                            }

                                            {
                                                k.data.map(v => (

                                                    <React.Fragment>
                                                        <StyledTableCell align="center" style={{
                                                            color: v['put_call_oi_diff'] > 0 ? theme.palette.success.main : v['put_call_oi_diff'] < 0 ? theme.palette.error.main : 'unset'
                                                        }} >{v['put_call_oi_diff']}</StyledTableCell>

                                                    </React.Fragment>
                                                ))
                                            }
                                        </StyledTableRow>

                                    </React.Fragment>
                                ))
                            }
                        </TableBody>

                    </Table>
                </TableContainer>
            </div> */}
      </Grid>


    </Grid>
  );
};
