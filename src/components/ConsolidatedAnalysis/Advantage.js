import { Box, Grid, Tooltip, Typography } from "@mui/material";
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
import { useTheme } from "@mui/material/styles";
import { StyledTableCell, StyledTableRow } from "../StyledTable";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import clsx from "clsx";

import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

export const Advantage = ({ data }) => {
  const theme = useTheme();
  if (!data) {
    return null;
  }

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

  const modData = data.map((k, v) => ({
    ...k,
    data: k.data.map((r, s) => ({
      ...r,
      ce_diff: v > 0 ? r?.ce_volume - data[v - 1].data[s]?.ce_volume : 0,
      pe_diff: v > 0 ? r?.pe_volume - data[v - 1].data[s]?.pe_volume : 0,
    })),
  }));
  const modData2 = modData.map((k, v) => ({
    ...k,
    data: k.data.map((r, s) => ({
      ...r,
      callColor:
        v > 0
          ? modData[v - 1].data[s]?.ce_diff > r?.ce_diff
            ? false
            : modData[v - 1].data[s]?.ce_diff < r?.ce_diff
            ? true
            : null
          : null,
      putColor:
        v > 0
          ? modData[v - 1].data[s]?.pe_diff > r?.pe_diff
            ? false
            : modData[v - 1].data[s]?.pe_diff < r.pe_diff
            ? true
            : null
          : null,
    })),
  }));
  // modData2[2].data[0]['callColor']=false
  // console.log(modData2[2].data[0]['callColor'])
  const columns = [
    {
      field: "time",
      headerName: "Time",
      headerAlign: "center",
      headerClassName: "super-app-theme--header0",
      align:"center"
    },
    // { field: 'total', headerName: 'Total', headerAlign: 'center', headerClassName: "super-app-theme--header0" },
  ];
  // const dynamicColumn =
  data[0].data
    .map((k, v) => [
      {
        field: `ce_volume${k["ce_strike"]}`,
        headerName: k["ce_strike"],
        headerAlign: "center",
        headerClassName: "super-app-theme--header0",
        align:"center",
        cellClassName: (params) =>
          clsx("super-app-theme--cell", {
            // zero:v%2==0,
            one: true,
            none: params.row[`callColor${k["ce_strike"]}`] == null,
            positive: params.row[`callColor${k["ce_strike"]}`] == true,
            negative: params.row[`callColor${k["ce_strike"]}`] == false,
          }),
        width: 130,
      },
    ])
    .map((k) => columns.push(...k));
  data[0].data
    .map((k, v) => [
      {
        field: `pe_volume${k["ce_strike"]}`,
        headerName: k["ce_strike"],
        headerAlign: "center",
        headerClassName: "super-app-theme--header1",
        align:"center",
        cellClassName: (params) =>
          clsx("super-app-theme--cell", {
            zero: true,
            // one:v%2!=0,
            none: params.row[`putColor${k["ce_strike"]}`] == null,
            positive: params.row[`putColor${k["ce_strike"]}`] == true,
            negative: params.row[`putColor${k["ce_strike"]}`] == false,
          }),
        width: 130,
      },
    ])
    .map((k) => columns.push(...k));
  columns.push({
    field: "tbull",
    headerName: "Total Bulls Advantage",
    headerAlign: "center",
    headerClassName: "super-app-theme--header0",
    cellClassName: "super-app-theme--cell0",
    width: 130,
    align:"center",
  });
  columns.push({
    field: "tbear",
    headerName: "Total Bears Advantage",
    headerAlign: "center",
    headerClassName: "super-app-theme--header0",
    cellClassName: "super-app-theme--cell0",
    width: 130,
    align:"center",
  });
  columns.push({
    field: "tpcdelta",
    headerName: "Total PC Delta Difference",
    headerAlign: "center",
    headerClassName: "super-app-theme--header0",
    cellClassName: "super-app-theme--cell0",
    width: 130,
    align:"center",
  });
  columns.push({
    field: "tpcdiff",
    headerName: "Total PC Difference",
    headerAlign: "center",
    headerClassName: "super-app-theme--header0",
    cellClassName: "super-app-theme--cell0",
    width: 130,
    align:"center",
  });
  const groups = [
    {
      groupId: "Call Volume",
      children: data[0].data
        .map((k, v) => ({ field: `ce_volume${k["ce_strike"]}` }))
        .concat([{ field: "total" }]),
      headerClassName: "super-app-theme--header0",
      headerAlign: "center",
      align:"center",
    },
    {
      groupId: "Put Volume",
      children: data[0].data.map((k, v) => ({
        field: `pe_volume${k["ce_strike"]}`,
        align:"center",
      })),
      headerClassName: "super-app-theme--header1",
      headerAlign: "center",
      align:"center",
    },
    {
      groupId: "Put Call in OI Difference",
      children: data[0].data.map((k, v) => ({
        field: `pe_diff${k["ce_strike"]}`,
        align:"center",
      })),
      headerClassName: "super-app-theme--header0",
      headerAlign: "center",
      align:"center",
    },
    {
      groupId: "main",
      headerName: "",
      children: [
        { field: "time" },
        { field: "tbull" },
        { field: "tbear" },
        { field: "tpcdelta" },
        { field: "tpcdiff" },
      ],
      headerClassName: "super-app-theme--header0",
      align:"center",
    },
  ];

  const rows = modData2.map((k, v) => ({
    id: v,
    time: k["time"],
    tpcdelta: k["total_pc_delta_diff"].toFixed(0),
    tpcdiff: k["oi_diff"].toFixed(0),
    tbear: k["ce_sum"].toFixed(0),
    tbull: k["pe_sum"].toFixed(0),
    // 'indiavix': k['vix'],
    ...k.data.reduce(
      (acc, val, index) => ({
        ...{
          [`ce_volume${val.ce_strike}`]: val?.ce_diff.toFixed(0),
          [`pe_volume${val.ce_strike}`]: val?.pe_diff.toFixed(0),
          [`callColor${val.ce_strike}`]: val["callColor"],
          [`putColor${val.ce_strike}`]: val["putColor"],
          // [`pe_diff${val.ce_strike}`]: val?.pe_diff.toFixed(2),
        },
        ...acc,
      }),
      {}
    ),
  }));

  console.log(rows, columns, groups);
  // const dupRow = [...rows,...rows]
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
      <Grid container item justifyContent={"center"} sx={{ mt: 5 }}>
        <Typography variant="h4" align="center">
          Advantage
        </Typography>
      </Grid>
      <Grid
        container
        item
        justifyContent={"center"}
        lg={12}
        style={{ flex: 1, width: "100%", minHeight: "500px" }}
      >
        {/* <br /><Typography variant="h6" align='center' width="100%"> Consolidated Data Analysis</Typography> */}

        <Box
          sx={{
            height: 650,
            flex: 1,
            width: "100%",
            "& .super-app-theme--header0": {
              backgroundColor: theme.palette.accent,
              color: theme.palette.common.black,
              fontFamily: "Roboto",
              fontWeight: "bold",
              align:"center",
              textAlign: "center",
              fontSize: "14px",
            },
            "& .super-app-theme--header1": {
              backgroundColor: theme.palette.accent2,
              color: theme.palette.common.black,
              fontFamily: "Roboto",
              fontWeight: "bold",
              align:"center",
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
              color: "white",
              backgroundColor: theme.palette.backgroundShade,
            },
            "& .super-app-theme--cell0.negative": {
              color: "red",
              backgroundColor: theme.palette.backgroundShade,
            },
            "& .super-app-theme--cell0.positive": {
              color: "green",
              backgroundColor: theme.palette.backgroundShade,
            },
            "& .super-app-theme--cell.zero": {
              // color:'black',
            },
            "& .super-app-theme--cell.one": {
              // color: 'whionee',
              backgroundColor: theme.palette.backgroundShade,
              // opacity:0.1
            },
            "& .super-app-theme--cell.negative": {
              backgroundColor: theme.palette.error.main,
            },
            "& .super-app-theme--cell.positive": {
              backgroundColor: theme.palette.success.main,
            },
            "& .super-app-theme--cell.none": {},
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
            components={{
              Toolbar: GridCustomToolbar,
            }}
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
