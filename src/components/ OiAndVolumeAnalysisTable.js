import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
// import { useSelector } from 'react-redux';

import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const OiAndVolumeAnalysisTable = ({ data }) => {
  // const data = useSelector((state) => state.tableData.data)
  // console.log(data);
  // debugger
  const theme = useTheme();
  // console.log("APi data coming",data)
  // const rows = data.map(k=>(k.reduce((a,b,c)=> (console.log(a,b,c) , a), {})))
  // const rows = data.map((k,v)=>(k.reduce((a,b,c)=> (a[val_key[c]]=b , a), {"id":v})))
  const rows = data.map((k, v) => ({
    id: v,
    time: `${k[1]["hour"]}:${k[1]["min"] == 0 ? "00" : k[1]["min"]}`,
    ceoi: k[1]["ce_oi"].toFixed(),
    peoi: k[1]["pe_oi"].toFixed(),
    diff: k[1]["difference"].toFixed(2),
    view: k[1]["view"],
    vdiff: k[1]["v_diff"].toFixed(2),
    adiff: k[1]["avg_diff"].toFixed(2),
    wva: k[1]["wva"].toFixed(2),
    pcr: k[1]["pcr"],
  }));
  const columns = [
    {
      field: "hello",
      headerName: "Time",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "hello1",
      headerName: "CE OI & Volume Ratio",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "hello2",
      headerName: "PE OI & Volume Ratio",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "hello3",
      headerName: "PCR",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "hello4",
      headerName: "Difference",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "hello5",
      headerName: "View",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <p style={{ color: params.row.view == "Bullish" ? "green" : "red" }}>
          {params.row.view}
        </p>
      ),
    },
    {
      field: "hello6",
      headerName: "2 V Difference",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row.vdiff > 0
                ? "green"
                : params.row.vdiff < 0
                ? "red"
                : "white",
          }}
        >
          {params.row.vdiff}
        </p>
      ),
    },
    {
      field: "hello7",
      headerName: "Average Difference",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row.adiff > 0
                ? "green"
                : params.row.adiff < 0
                ? "red"
                : "white",
          }}
        >
          {params.row.adiff}
        </p>
      ),
    },
    {
      field: "hello7",
      headerName: "WVA",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row.wva > 0
                ? "green"
                : params.row.wva < 0
                ? "red"
                : "white",
          }}
        >
          {params.row.wva}
        </p>
      ),
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
  // val_key.map(k => ({ field: k, headerName: k.toUpperCase(), width: 70 }))
  // console.log(rows,columns)
  return (
    <Grid
      direction="row"
      container
      item
      lg={12}
      md={12}
      sm={12}
      sx={{ flex: 1, width: "100%", mt: 5 }}
    >
      {/* <Typography sx={{ mb: 5 }} style={{ width: "100%" }} variant='h4' align='center' fontFamily={'Roboto'}  >Option Data Analysis</Typography> */}
      <Box
        sx={{
          height: 650,
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
        <DataGrid
          sx={{ w: "100%" }}
          rowHeight={25}
          initialState={{
            sorting: {
              sortModel: [{ field: "strike", sort: "asc" }],
            },
          }}
          // rows={rows}
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
  );
};

export default OiAndVolumeAnalysisTable;
