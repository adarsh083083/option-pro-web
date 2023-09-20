import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { StyledTableCell, StyledTableRow } from "../StyledTable";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";

export const OIChangeAnalysis = () => {
  const theme = useTheme();
  const data = useSelector((state) => state.table.data);
  const symbol = useSelector((state) => state.options.currentSymbol);

  const currentInterval = useSelector((state) => state.options.currentInterval);
  const oi_data = data
    ? data.option.result.analysis_data.oi_first_four_ce.map((k, v) => ({
        ...k,
        pe_oi: data.option.result.analysis_data.oi_first_four_pe[v]["pe_oi"],
        pe_strike:
          data.option.result.analysis_data.oi_first_four_pe[v]["ce_strike"],
        pe_oi_change:
          data.option.result.analysis_data.oi_first_four_pe[v]["pe_oi_change"],
      }))
    : false;
  const notations = [
    <>
      1<sup>st</sup>
    </>,
    <>
      2<sup>nd</sup>
    </>,
    <>
      3<sup>rd</sup>
    </>,
    <>
      4<sup>th</sup>
    </>,
    <>
      5<sup>th</sup>
    </>,
  ];

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

  return (
    <React.Fragment>
      <Grid
        container
        justifyContent={"center"}
        alignContent="center"
        sx={{ display: "flex", flex: 1 }}
      >
        <Grid
          lg={12}
          sm={12}
          md={12}
          sx={{
            flex: 1,
            backgroundColor: theme.palette.appbar,
            // p:1,
            borderRadius: 5,
            mb: 3,
          }}
          container
          direction={"row"}
          // justifyContent={'center'}
        >
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 700 }}
              size="small"
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={style.tableRow}>
                  <StyledTableCell align="right">{symbol}</StyledTableCell>
                  <StyledTableCell align="center">CE</StyledTableCell>
                  <StyledTableCell align="center">OI</StyledTableCell>
                  <StyledTableCell align="center">
                    OI<sub>(in {currentInterval}min interval)</sub>
                  </StyledTableCell>
                  <StyledTableCell align="center">{symbol}</StyledTableCell>
                  <StyledTableCell align="center">PE</StyledTableCell>
                  <StyledTableCell align="center">OI</StyledTableCell>
                  <StyledTableCell align="center">
                    OI<sub>(in {currentInterval}min interval)</sub>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              {oi_data ? (
                <TableBody>
                  {oi_data.map((k, v) => (
                    <StyledTableRow key={"c"}>
                      <StyledTableCell align="right">
                        {notations[v]}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Typography variant="p" sx={style.typography}>
                          {k.ce_strike}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Typography variant="p" sx={style.typography}>
                          {k.ce_oi}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Typography variant="p" sx={style.typography}>
                          {k.ce_oi_change}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Typography variant="p" sx={style.typography}>
                          {v}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Typography variant="p" sx={style.typography}>
                          {k.pe_strike}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Typography variant="p" sx={style.typography}>
                          {k.pe_oi}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Typography variant="p" sx={style.typography}>
                          {k.pe_oi_change}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              ) : (
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell colSpan={7}>
                      <LoadingButton
                        loading={true}
                        disabled
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                      >
                        Loading
                      </LoadingButton>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
