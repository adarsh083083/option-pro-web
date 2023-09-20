import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const LONG_UNWINDING = "Long Unwinding";
const SHORT_BUILDUP = "Short Buildup";
const LONG_BUILDUP = "Long Buildup";
const SHORT_COVERING = "Short Covering";

export default function DataTable() {
  const theme = useTheme();
  const data = useSelector((state) => state.table.data);

  const style = {
    typography: {
      fontWeight: 500,
      lineHeight: 1.4,
      fontFamily: "sans-serif",
      fontSize: "11px",
      letterSpacing: " 0.00938em",
    },
    tableRow: {
      boxShadow: "0 4px 6px -6px #222",
      backgroundColor: "#ffffff",
    },
  };

  const currentInterval = useSelector((state) => state.options.currentInterval);
  const rows = data
    ? data.option.result.data.map((k, v) => ({
        id: v,
        strike: k.ce_strike,
        pcr: k.pcr.toFixed(2),
        pcr_change: k.pcr_change.toFixed(2),
        "ceun/n": k.ce_winding_status ? "Un-Winding" : "No",
        ceoic: k.ce_volume_change,
        "peun/n": k.pe_winding_status ? "Un-Winding" : "No",
        peoic: k.pe_oi_change,
        "ceoic%": k.ce_oi_change_perc,
        "peoic%": k.pe_oi_change_perc,
        ce_w_strategy: k.ce_winding_strategy,
        pe_w_strategy: k.pe_winding_strategy,
      }))
    : [];

  const groups = [
    {
      groupId: "CALLS",
      children: [
        { field: "ceoic" },
        { field: "ceoic%" },
        { field: "ceun/n" },
        { field: "ce_w_strategy" },
      ],
      headerClassName: "super-app-theme--Upperheader",
      headerAlign: "center",
      
    },
    {
      groupId: "-",
      // field:"",
      children: [
        { field: "strike" },
        { field: "pcr" },
        { field: "pcr_change" },
      ],
      headerClassName: "super-app-theme--Upperheader",
      align: "center",
      headerAlign: "center",
    },
    {
      groupId: "PUTS",
      children: [
        { field: "peoic" },
        { field: "peoic%" },
        { field: "peun/n" },
        { field: "pe_w_strategy" },
      ],
      headerClassName: "super-app-theme--Upperheader",
      headerAlign: "center",
      align: "center",
    },
  ];
  const columns = [
    {
      field: "ce_w_strategy",
      headerName: "CE Strategy",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "normalColumn",
      align: "center",
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row["ce_w_strategy"] == LONG_UNWINDING
                ? "red"
                : params.row["ce_w_strategy"] == SHORT_BUILDUP
                ? "red"
                : params.row["ce_w_strategy"] == LONG_BUILDUP
                ? "green"
                : params.row["ce_w_strategy"] == SHORT_COVERING
                ? "green"
                : "inherit",
          }}
        >
          <Typography variant="p" sx={style.typography}>
            {params.row["ce_w_strategy"]}
          </Typography>
        </p>
      ),
    },
    {
      field: "ceoic",
      headerName: `CE OI Change (${currentInterval}min interval)`,
      flex: 1,
      headerAlign: "center",
      cellClassName: "normalColumn",
      headerClassName: "super-app-theme--header",
      align: "center",
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row.ceoic > 0
                ? "green"
                : params.row.ceoic < 0
                ? "red"
                : "#2452db",
          }}
        >
          <Typography variant="p" sx={style.typography}>
            {params.row.ceoic}
          </Typography>
        </p>
      ),
    },
    {
      field: "ceoic%",
      headerName: "CE OI Change %",
      flex: 1,
      headerAlign: "center",
      cellClassName: "normalColumn",
      headerClassName: "super-app-theme--header",
      align: "center",
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row["ceoic%"] > 0
                ? "green"
                : params.row["ceoic%"] < 0
                ? "red"
                : "#2452db",
          }}
        >
          <Typography variant="p" sx={style.typography}>
            {params.row["ceoic%"]}
          </Typography>
        </p>
      ),
    },
    {
      field: "ceun/n",
      headerName: "CE Un-winding",
      flex: 1,
      headerAlign: "center",
      cellClassName: "normalColumn",
      headerClassName: "super-app-theme--header",
      align: "center",
      
      renderCell: (params) => (
        <p
          style={{
            color: params.row["ceun/n"] == "Un-Winding" ? "green" : "#2452db",
          }}
        >
          <Typography variant="p" sx={style.typography}>
            {params.row["ceun/n"]}
          </Typography>
        </p>
      ),
    },
    {
      field: "strike",
      headerName: "Strike",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--Upperheader",
      cellClassName: "strikeColumn",
      align: "center",
    },
    {
      field: "pcr",
      headerName: "PCR",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--Upperheader",
      cellClassName: "centerColumn",
      align: "center",
    },
    {
      field: "pcr_change",
      headerName: `Change in PCR (${currentInterval}min interval)`,
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--Upperheader",
      cellClassName: "centerColumn",
      align: "center",
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row.pcr_change > 0
                ? "green"
                : params.row.pcr_change < 0
                ? "red"
                : "#2452db",
          }}
        >
          <Typography variant="p" sx={style.typography}>
            {params.row.pcr_change}
          </Typography>
        </p>
      ),
    },

    {
      field: "peun/n",
      headerName: "PE Un-winding",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "normalColumn",
      align: "center",
      renderCell: (params) => (
        <p
          style={{
            color: params.row["peun/n"] == "Un-Winding" ? "red" : "#2452db",
          }}
        >
          <Typography variant="p" sx={style.typography}>
            {params.row["peun/n"]}
          </Typography>
        </p>
      ),
    },
    {
      field: "peoic%",
      headerName: "PE OI Change %",
      flex: 1,
      cellClassName: "normalColumn",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      align: "center",
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row["peoic%"] > 0
                ? "green"
                : params.row["peoic%"] < 0
                ? "red"
                : "#2452db",
          }}
        >
          <Typography variant="p" sx={style.typography}>
            {params.row["peoic%"]}
          </Typography>
        </p>
      ),
    },
    {
      field: "peoic",
      headerName: `PE OI Change (${currentInterval}min interval)`,
      flex: 1,
      headerAlign: "center",
      cellClassName: "normalColumn",
      headerClassName: "super-app-theme--header",
      align: "center",
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row.peoic > 0
                ? "green"
                : params.row.peoic < 0
                ? "red"
                : "#2452db",
          }}
        >
          <Typography variant="p" sx={style.typography}>
            {params.row.peoic}
          </Typography>
        </p>
      ),
    },
    {
      field: "pe_w_strategy",
      headerName: "PE Strategy",
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "normalColumn",
      align: "center",
      renderCell: (params) => (
        <p
          style={{
            color:
              params.row["pe_w_strategy"] == LONG_UNWINDING
                ? "red"
                : params.row["pe_w_strategy"] == SHORT_BUILDUP
                ? "red"
                : params.row["pe_w_strategy"] == LONG_BUILDUP
                ? "green"
                : params.row["pe_w_strategy"] == SHORT_COVERING
                ? "green"
                : "inherit",
          }}
        >
          <Typography variant="p" sx={style.typography}>
            {params.row["pe_w_strategy"]}
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
      rowHeight={25}
      sx={{
        flex: 1,
        width: "100%",
        mt: 5,
      }}
    >
      <Box
        sx={{
          height: 650,
          flex: 1,
          justifyContent: "center",
          width: "100%",
          align: "center",
          "& .super-app-theme--header": {
            backgroundColor: theme.palette.accent,
            color: theme.palette.common.black,
            fontFamily: "Roboto",
            fontWeight: "bold",
            textAlign:'center',
            fontSize: "14px",

          },
          "& .super-app-theme--Upperheader": {
            backgroundColor: theme.palette.accent2,
            color: theme.palette.common.black,
            fontFamily: "Roboto",
            fontWeight: "bold",
            textAlign:'center',
            fontSize: "14px",
          },
          "& .centerColumn": {
            backgroundColor: theme.palette.tableHighlightsBlue,
            justifyContent: "center",
            // color:theme.palette.textHighlightColor
            color: theme.palette.common.black,
            border: `1px solid ${
              theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
            }`,
             
          },
          "& .normalColumn": {
            justifyContent: "center",
            alignContent: "center",
            textAlign:'center',
            fontSize: "14px",
            border: `1px solid ${
              theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
            }`,
          },
          "& .strikeColumn": {
            backgroundColor: theme.palette.tableHighlightsGrey,
            justifyContent: "center",
            fontWeight: "bold",
            color: theme.palette.common.black,
            align: "center",
            
            
          },
        }}
        // component={Paper}
      >
        <>
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
            experimentalFeatures={{ columnGrouping: true }}
            rowsPerPageOptions={[20]}
            columnGroupingModel={groups}
            // checkboxSelection
            hideFooterPagination
            hideFooter
            density="comfortable"
            components={{
              Toolbar: GridCustomToolbar,
            }}
          />
        </>
      </Box>
    </Grid>
  );
}
