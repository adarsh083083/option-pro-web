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
import { StyledTableCell, StyledTableRow } from "../StyledTable";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { theme } from "../../commons/theme";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

export const Straddle = ({ data }) => {
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

  const size = data.length - 1;
  console.log(data, "modData.........");
  const modData = data.map(
    (k, v) => (
      console.log(k, "k...", v, "v....."),
      {
        ...k,
        data: k.data.map(
          (r, s) => (
            console.log(
              v > 0 && data[v - 1].data[s]?.straddle,
              "....r",
              r?.straddle,
              "r...",
              s,
              "s....."
            ),
            {
              ...r,
              straddleColor:
                v > 0
                  ? data[v - 1].data[s]?.straddle > r?.straddle
                    ? false
                    : data[v - 1].data[s]?.straddle < r?.straddle
                    ? true
                    : null
                  : null,
            }
          )
        ),
      }
    )
  );
  // modData[2].data[1]['straddleColor']=false
  // console.log(modData[2].data[0]['straddleColor'])
  const columns = [
    {
      field: "time",
      headerName: "Time",
      headerAlign: "center",
      headerClassName: "super-app-theme--headertime",
      cellClassName: "super-app-theme--celltime",
      align: "center",
    },
    {
      field: "spotprice",
      headerName: "Spot Price",
      headerAlign: "center",
      headerClassName: "super-app-theme--header0",
      align: "center",
    },
    {
      field: "indiavix",
      headerName: "India VIX",
      headerAlign: "center",
      headerClassName: "super-app-theme--header0",
      align: "center",
    },
  ];
  const dynamicColumn = data[0].data.map((k, v) => [
    {
      field: `ce_ltp${k["ce_strike"]}`,
      headerName: "Call",
      headerAlign: "center",
      align: "center",
      headerClassName:
        v % 2 == 0 ? "super-app-theme--header0" : "super-app-theme--header1",
      cellClassName:
        v % 2 == 0 ? "super-app-theme--cell0" : "super-app-theme--cell1",
    },
    {
      field: `pe_ltp${k["ce_strike"]}`,
      headerName: "Put",
      headerAlign: "center",
      align: "center",
      headerClassName:
        v % 2 == 0 ? "super-app-theme--header0" : "super-app-theme--header1",
      cellClassName:
        v % 2 == 0 ? "super-app-theme--cell0" : "super-app-theme--cell1",
    },
    {
      field: `straddle${k["ce_strike"]}`,
      headerName: "Straddle",
      headerAlign: "center",
      align: "center",
      headerClassName:
        v % 2 == 0 ? "super-app-theme--header0" : "super-app-theme--header1",
      cellClassName: (params) =>
        clsx("super-app-theme--cell", {
          zero: v % 2 == 0,
          one: v % 2 != 0,
          // none: params.row[`straddleColor${k['ce_strike']}`] ==null,
          positive: params.row[`straddleColor${k["ce_strike"]}`] == true,
          negative: params.row[`straddleColor${k["ce_strike"]}`] == false,
        }),
      // 'cellClassName': v % 2 == 0 ? 'super-app-theme--cell0' : 'super-app-theme--cell1'
    },
  ]);
  dynamicColumn.map((k) => columns.push(...k));
  const groups = data[0].data.map((k, v) => ({
    groupId: k.ce_strike,
    children: [
      { field: `ce_ltp${k["ce_strike"]}` },
      { field: `pe_ltp${k["ce_strike"]}` },
      { field: `straddle${k["ce_strike"]}` },
    ],
    headerClassName:
      v % 2 == 0 ? "super-app-theme--header0" : "super-app-theme--header1",
    headerAlign: "center",
  }));
  groups.push({
    groupId: "main",
    headerName: "",
    children: [
      { field: "time" },
      { field: "spotprice" },
      { field: "indiavix" },
    ],
    headerClassName: "super-app-theme--header0",
    
  });
  const rows = modData.map((k, v) => ({
    id: v,
    time: k["time"],
    spotprice: k["spot_price"],
    indiavix: k["vix"],
    ...k.data.reduce(
      (acc, val, index) => ({
        ...{
          [`ce_ltp${val.ce_strike}`]: val["ce_ltp"]?.toFixed(2),
          [`pe_ltp${val.ce_strike}`]: val["pe_ltp"]?.toFixed(2),
          [`straddle${val.ce_strike}`]: val["straddle"]?.toFixed(2),
          [`straddleColor${val.ce_strike}`]: val["straddleColor"],
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
      <Grid container item justifyContent={"center"} sx={{ mb: 1 }}>
        <Typography variant="h4" align="center">
          Consolidated Data Analysis
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
            
            "& .super-app-theme--headertime": {
              backgroundColor: theme.palette.accent,
              color: theme.palette.common.black,
              fontFamily: "Roboto",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "14px",
            },
            "& .super-app-theme--celltime": {
              // position:'absolute',
              // marginLeft:'-100px'
             
            },
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
              
              
            },
            "& .super-app-theme--cell1": {
              // backgroundColor: theme.palette.backgroundShade,
              // opacity:0.1
              
            },
            "& .super-app-theme--cell.zero": {
              // color:'black',
              
            },
            "& .super-app-theme--cell.one": {
              // backgroundColor: theme.palette.backgroundShade,
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
      </Grid>
    </Grid>
  );
};
