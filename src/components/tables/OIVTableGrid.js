import * as React from "react";
import {
  DataGrid,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

export default function OIVDataTable() {
  const theme = useTheme();
  const data = useSelector((state) => state.table.oivdata);

  const style = {
    typography: {
      fontWeight: 500,
      lineHeight: 1.4,
      fontFamily: "sans-serif",
      fontSize: "12px",
      letterSpacing: " 0.00938em",
    },
    tableRow:{
      boxShadow:'0 4px 6px -6px #222',
      backgroundColor:'#ffffff'
    }
  };

  const rows = data
    ? data.map((k, v) => ({
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
      }))
    : [];
  const columns = [
    {
      field: "time",
      headerName: "Time",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: 'center',
    },
    {
      field: "ceoi",
      headerName: "CE OI & Volume Ratio",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: 'center',
    },
    {
      field: "peoi",
      headerName: "PE OI & Volume Ratio",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: 'center',
    },
    {
      field: "pcr",
      headerName: "PCR",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: 'center',
    },
    {
      field: "diff",
      headerName: "Difference",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: 'center',
    },
    {
      field: "view",
      headerName: "View",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: 'center',
      renderCell: (params) => (
        <p style={{ color: params.row.view == "Bullish" ? "green" : "red" }}>
           <Typography variant="p" sx={style.typography}> 
          {params.row.view}
        </Typography>
        </p>
      ),
    },
    {
      field: "vdiff",
      headerName: "2 V Difference",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: 'center',
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row.vdiff > 0
                ? "green"
                : params.row.vdiff < 0
                ? "red"
                : "blue",
          }}
        >
           <Typography variant="p" sx={style.typography}>
          {params.row.vdiff}
          </Typography>
        </p>
      ),
    },
    {
      field: "adiff",
      headerName: "Average Difference",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: 'center',
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row.adiff > 0
                ? "green"
                : params.row.adiff < 0
                ? "red"
                : "blue",
          }}
        >
           <Typography variant="p" sx={style.typography}> 
          {params.row.adiff}
          </Typography>
        </p>
      ),
    },
    {
      field: "wva",
      headerName: "WVA",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: 'center',
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row.wva > 0
                ? "green"
                : params.row.wva < 0
                ? "red"
                : "blue",
          }}
        >
           <Typography variant="p" sx={style.typography}> 
          {params.row.wva}
          </Typography>
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
            textAlign:'center',
            fontSize: "14px",
            boxShadow:'0 4px 6px -6px #222',
          },
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
          initialState={{
            sorting: {
              sortModel: [{ field: "strike", sort: "asc" }],
            },
          }}
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
  );
}
