import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { StyledTableCell, StyledTableRow } from "../StyledTable";
import { LoadingButton } from "@mui/lab";

import { useSelector } from "react-redux";

export const Stratergies = () => {
  const theme = useTheme();
  const data = useSelector((state) => state.table.data);

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
              <StyledTableCell align="center">Strategies</StyledTableCell>
              <StyledTableCell align="center">S1</StyledTableCell>
              <StyledTableCell align="center">S2</StyledTableCell>
              <StyledTableCell align="center">S3</StyledTableCell>
              <StyledTableCell align="center">VIX</StyledTableCell>
              <StyledTableCell align="center">BATA</StyledTableCell>
              <StyledTableCell align="center">High</StyledTableCell>
              <StyledTableCell align="center">Low</StyledTableCell>
            </TableRow>
          </TableHead>
          {data ? (
            <TableBody>
              <StyledTableRow key={"nifty1"}>
                <StyledTableCell align="center">
                <Typography variant="p" sx={style.typography}>
                    Buy
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: data.option["result"]["analysis_data"][
                      "call_startergies"
                    ]["s1"]
                      ? theme.palette.success.light
                      : "unset",
                  }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["call_startergies"][
                    "s1"
                  ]
                    ? "Buy"
                    : "No"}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: data.option["result"]["analysis_data"][
                      "call_startergies"
                    ]["s2"]
                      ? theme.palette.success.light
                      : "unset",
                  }}
                >
                 <Typography variant="p" sx={style.typography}> 
                  {data.option["result"]["analysis_data"]["call_startergies"][
                    "s2"
                  ]
                    ? "Buy"
                    : "No"}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: data.option["result"]["analysis_data"][
                      "call_startergies"
                    ]["s3"]
                      ? theme.palette.success.light
                      : "unset",
                  }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["call_startergies"][
                    "s3"
                  ]
                    ? "Buy"
                    : "No"}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ fontWeight: "900", fontSize: "3em" }}
                  style={{ fontSize: "1.3em" }}
                  // sx={{ backgroundColor: theme.palette.error.light, textAlign: 'center' }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["vix_ltp"]}
                </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                <Typography variant="p" sx={style.typography}>
                    Spot BATA
                </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["spot_bata_high"]
                    ? "Yes"
                    : "No"}
                </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["spot_bata_low"]
                    ? "Yes"
                    : "No"}
                </Typography>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={"nifty2"}>
                <StyledTableCell align="center">
                <Typography variant="p" sx={style.typography}>
                    Sell
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: data.option["result"]["analysis_data"][
                      "put_startergies"
                    ]["s1"]
                      ? theme.palette.error.main
                      : "unset",
                  }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["put_startergies"][
                    "s1"
                  ]
                    ? "Sell"
                    : "No"}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: data.option["result"]["analysis_data"][
                      "put_startergies"
                    ]["s2"]
                      ? theme.palette.error.main
                      : "unset",
                  }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["put_startergies"][
                    "s2"
                  ]
                    ? "Sell"
                    : "No"}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: data.option["result"]["analysis_data"][
                      "put_startergies"
                    ]["s3"]
                      ? theme.palette.error.main
                      : "unset",
                  }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["put_startergies"][
                    "s3"
                  ]
                    ? "Sell"
                    : "No"}
                 </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "5em",
                    color:
                      data.option["result"]["analysis_data"]["vix_change"] < 0
                        ? theme.palette.error.main
                        : theme.palette.success.main,
                  }}
                  style={{ fontSize: "1.3em" }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["vix_change"].toFixed(
                    2
                  )}
                  %
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                <Typography variant="p" sx={style.typography}>
                    Future BATA
                </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["bata_high"]
                    ? "Yes"
                    : "No"}
                </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                <Typography variant="p" sx={style.typography}>
                  {data.option["result"]["analysis_data"]["bata_low"]
                    ? "Yes"
                    : "No"}
                </Typography>
                </StyledTableCell>
              </StyledTableRow>
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
  );
};
