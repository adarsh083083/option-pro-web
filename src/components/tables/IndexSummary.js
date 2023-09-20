import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledTableCell, StyledTableRow } from "../StyledTable";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
// import { Button, Grid,  } from "@mui/material"
export const IndexSummary = () => {
  const theme = useTheme();
  const currentInterval = useSelector((state) => state.options.currentInterval);
  const data = useSelector((state) => state.table.data);
  const symbol = useSelector((state) => state.options.currentSymbol);
  const isIndex = symbol ? symbol.toLowerCase().includes("nifty") : null;
  // console.log(data, symbol, isIndex,data.option.result.analysis_data)

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
          position: "relative",
          borderRadius: 5,
          mb: 3,
        }}
        container
        direction={"row"}
        // justifyContent={'center'}
      >
        {isIndex == false && (
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 700 }}
              size="small"
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell align="center">Future Price</StyledTableCell>
                  <StyledTableCell align="center">
                    ATP<sub>(Vwap)</sub>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Near ATP<sub>(?)</sub>
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    More OI Change At{" "}
                    <sub>(in {currentInterval}min interval)</sub>
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    Future Discount / Premium
                  </StyledTableCell>
                  <StyledTableCell align="center">OI Based PCR</StyledTableCell>
                  <StyledTableCell align="center">Volume PCR</StyledTableCell>
                </TableRow>
              </TableHead>
              {data ? (
                <TableBody>
                  <StyledTableRow key={"nifty6"}>
                    <StyledTableCell align="right" component="th" scope="row">
                      Nifty
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{
                        backgroundColor:
                          data.option["nifty"]["analysis_data"]["prev_close"] >
                          0
                            ? theme.palette.success.main
                            : data.option["nifty"]["analysis_data"][
                                "prev_close"
                              ] < 0
                            ? theme.palette.error.main
                            : "unset",
                      }}
                    >
                      {data.option["nifty"]["analysis_data"]["ltp_futures"]}
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["nifty"]["analysis_data"]["atp_futures"]}
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["nifty"]["analysis_data"]["is_atp_near"]}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      colSpan={2}
                      sx={{
                        color:
                          data.option["nifty"]["analysis_data"][
                            "high_oi_change"
                          ] == "CE"
                            ? "red"
                            : data.option["nifty"]["analysis_data"][
                                "high_oi_change"
                              ] == "PE"
                            ? "green"
                            : "white",
                      }}
                    >
                      {data.option["nifty"]["analysis_data"]["high_oi_change"]}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      colSpan={2}
                      sx={{
                        color:
                          data.option["nifty"]["analysis_data"][
                            "discount_premium"
                          ] == "Premium"
                            ? "white"
                            : "red",
                      }}
                    >
                      {
                        data.option["nifty"]["analysis_data"][
                          "discount_premium"
                        ]
                      }
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["nifty"]["analysis_data"][
                        "oi_based_pcr"
                      ].toFixed(2)}
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["nifty"]["analysis_data"][
                        "volume_based_pcr"
                      ].toFixed(2)}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key={"banknifty"}>
                    <StyledTableCell align="right" component="th" scope="row">
                      BankNifty
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{
                        backgroundColor:
                          data.option["banknifty"]["analysis_data"][
                            "prev_close"
                          ] > 0
                            ? theme.palette.success.main
                            : data.option["banknifty"]["analysis_data"][
                                "prev_close"
                              ] < 0
                            ? theme.palette.error.main
                            : "unset",
                      }}
                    >
                      {data.option["banknifty"]["analysis_data"]["ltp_futures"]}
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["banknifty"]["analysis_data"]["atp_futures"]}
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["banknifty"]["analysis_data"]["is_atp_near"]}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      colSpan={2}
                      sx={{
                        color:
                          data.option["banknifty"]["analysis_data"][
                            "high_oi_change"
                          ] == "CE"
                            ? "red"
                            : data.option["banknifty"]["analysis_data"][
                                "high_oi_change"
                              ] == "PE"
                            ? "green"
                            : "white",
                      }}
                    >
                      {
                        data.option["banknifty"]["analysis_data"][
                          "high_oi_change"
                        ]
                      }
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      colSpan={2}
                      sx={{
                        color:
                          data.option["banknifty"]["analysis_data"][
                            "discount_premium"
                          ] == "Premium"
                            ? "white"
                            : "red",
                      }}
                    >
                      {
                        data.option["banknifty"]["analysis_data"][
                          "discount_premium"
                        ]
                      }
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["banknifty"]["analysis_data"][
                        "oi_based_pcr"
                      ].toFixed(2)}
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["banknifty"]["analysis_data"][
                        "volume_based_pcr"
                      ].toFixed(2)}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key={"stock"}>
                    <StyledTableCell align="right" component="th" scope="row">
                      {symbol}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{
                        backgroundColor:
                          data.option["result"]["analysis_data"]["prev_close"] >
                          0
                            ? theme.palette.success.main
                            : data.option["result"]["analysis_data"][
                                "prev_close"
                              ] < 0
                            ? theme.palette.error.main
                            : "unset",
                      }}
                    >
                      {data.option["result"]["analysis_data"]["ltp_futures"]}
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["result"]["analysis_data"]["atp_futures"]}
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["result"]["analysis_data"]["is_atp_near"]}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      colSpan={2}
                      sx={{
                        color:
                          data.option["result"]["analysis_data"][
                            "high_oi_change"
                          ] == "CE"
                            ? "red"
                            : data.option["result"]["analysis_data"][
                                "high_oi_change"
                              ] == "PE"
                            ? "green"
                            : "white",
                      }}
                    >
                      {data.option["result"]["analysis_data"]["high_oi_change"]}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      colSpan={2}
                      sx={{
                        color:
                          data.option["result"]["analysis_data"][
                            "discount_premium"
                          ] == "Premium"
                            ? "white"
                            : "red",
                      }}
                    >
                      {
                        data.option["result"]["analysis_data"][
                          "discount_premium"
                        ]
                      }
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["result"]["analysis_data"][
                        "oi_based_pcr"
                      ].toFixed(2)}
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                      {data.option["result"]["analysis_data"][
                        "volume_based_pcr"
                      ].toFixed(2)}
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
        )}
        {isIndex == true && (
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 700 }}
              size="small"
              aria-label="customized table"
            >
              <TableHead>
                <TableRow sx={style.tableRow}>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">Future Price</StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    More OI Change At
                    <sub>(in {currentInterval}min interval)</sub>
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    Future Discount / Premium
                  </StyledTableCell>
                  <StyledTableCell align="center">OI Based PCR</StyledTableCell>
                  <StyledTableCell align="center">
                    OIC Based PCR
                  </StyledTableCell>
                  <StyledTableCell align="center">Volume PCR</StyledTableCell>
                </TableRow>
              </TableHead>
              {data ? (
                <TableBody>
                  <StyledTableRow key={"stock"}>
                    <StyledTableCell align="right" component="th" scope="row">
                      {symbol}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{
                        backgroundColor:
                          data.option["result"]["analysis_data"]["prev_close"] >
                          0
                            ? theme.palette.success.main
                            : data.option["result"]["analysis_data"][
                                "prev_close"
                              ] < 0
                            ? theme.palette.error.main
                            : "unset",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {data.option["result"]["analysis_data"]["ltp_futures"]}
                      </Typography>
                    </StyledTableCell>
                    {/* HERE IS THE NEW CHANGES IN THE TABLES */}

                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      colSpan={2}
                      sx={{
                        color:
                          data.option["result"]["analysis_data"][
                            "high_oi_change"
                          ] == "CE"
                            ? "red"
                            : data.option["result"]["analysis_data"][
                                "high_oi_change"
                              ] == "PE"
                            ? "green"
                            : "#2452db",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {
                          data.option["result"]["analysis_data"][
                            "high_oi_change"
                          ]
                        }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                      colSpan={2}
                      sx={{
                        color:
                          data.option["result"]["analysis_data"][
                            "discount_premium"
                          ] == "Premium"
                            ? "#2452db"
                            : "red",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {
                          data.option["result"]["analysis_data"][
                            "discount_premium"
                          ]
                        }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                    <Typography variant="p" sx={style.typography}>
                      {data.option["result"]["analysis_data"][
                        "oi_based_pcr"
                      ].toFixed(2)}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                    <Typography variant="p" sx={style.typography}>
                      {data.option["result"]["analysis_data"][
                        "oic_based_pcr"
                      ].toFixed(2)}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center" component="th" scope="row">
                    <Typography variant="p" sx={style.typography}>
                      {data.option["result"]["analysis_data"][
                        "volume_based_pcr"
                      ].toFixed(2)}
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
        )}
      </Grid>
    </Grid>
  );
};
