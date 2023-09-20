import * as React from "react";
import { Grid, Typography } from "@mui/material";
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

export const SummaryPanel = (props) => {
  const theme = useTheme();

  const currentInterval = useSelector((state) => state.options.currentInterval);
  const data = useSelector((state) => state.table.data);
  // const symbol = useSelector((state) => state.options.currentSymbol)
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
      md={12}
      sm={12}
      container
      justifyContent={"center"}
      alignContent="center"
      sx={{ display: "flex", flex: 1 }}
    >
      <Grid
        lg={12}
        md={12}
        sm={12}
        sx={{
          flex: 1,
          backgroundColor: theme.palette.appbar,
          // p:1,
          borderRadius: 5,
          mb: 3,
        }}
        container

        // justifyContent={'center'}
      >
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700 }}
            size="small"
            aria-label="customized table"
          >
            <TableHead>
              <TableRow sx={style.tableRow}>
                <StyledTableCell align="center">Future Price</StyledTableCell>
                <StyledTableCell align="center">
                  Range <sub>(Volume based)</sub>
                </StyledTableCell>
                <StyledTableCell align="center">
                  Shifted? <sub>(from yesterday)</sub>
                </StyledTableCell>
                <StyledTableCell align="center">PCR</StyledTableCell>
                <StyledTableCell align="center">
                  PCR Change <sub>({currentInterval}min interval)</sub>
                </StyledTableCell>
                <StyledTableCell align="center">
                  Range<sub>(OI Based)</sub>
                </StyledTableCell>
                <StyledTableCell align="center">
                  Range<sub>(OIC Based)</sub>
                </StyledTableCell>
                {/* here is the new changes and that changes is remove both header   Adarsh raj                     */}
                {/* <StyledTableCell align="right" colSpan="2" sx={{ textAlign: 'center' }}>CE Volume Change</StyledTableCell> */}
                {/* <StyledTableCell align="right" colSpan="2" sx={{ textAlign: 'center' }}>PE Volume Change</StyledTableCell> */}
              </TableRow>
            </TableHead>
            {data ? (
              <TableBody>
                <StyledTableRow key={"nifty7"}>
                  <StyledTableCell align="center" rowSpan={2}>
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["ltp_futures"]}
                  </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {
                      data.option["result"]["analysis_data"]["volume_analysis"][
                        "first_strike_pe"
                      ]
                    }
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["pe_range_shifted"]
                      ? "No"
                      : "Yes"}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["pcr_pe"].toFixed(
                      2
                    )}
                  </Typography>
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{
                      color:
                        data.option["result"]["analysis_data"][
                          "pcr_change_pe"
                        ] > 0
                          ? "green"
                          : "red",
                      fontWeight: "bold",
                    }}
                  >
                     <Typography variant="p" sx={style.typography}> 
                    {data.option["result"]["analysis_data"][
                      "pcr_change_pe"
                    ].toFixed(2)}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["peoi_range"]}
                  </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {
                      data.option["result"]["analysis_data"][
                        "pe_strike_oi_change_based"
                      ]
                    }
                  </Typography>
                  </StyledTableCell>
                  {/* this change by adarsh raj */}
                  {/* <StyledTableCell align="center">{data.option['result']['analysis_data']['volume_analysis']['first_strike_ce']}</StyledTableCell> */}
                  {/* <StyledTableCell align="center">{data.option['result']['analysis_data']['volume_analysis']['first_strike_ce']}</StyledTableCell> */}
                  {/* <StyledTableCell align="center">{data.option['result']['analysis_data']['volume_analysis']['first_column_change_ce']}</StyledTableCell> */}
                  {/* <StyledTableCell align="center">{data.option['result']['analysis_data']['volume_analysis']['first_strike_pe']}</StyledTableCell> */}
                  {/* <StyledTableCell align="center">{data.option['result']['analysis_data']['volume_analysis']['first_column_change_pe']}</StyledTableCell> */}
                </StyledTableRow>
                <StyledTableRow key={"nifty8"}>
                  {/* <StyledTableCell align="right">{data.history["Futures LTP"]}</StyledTableCell> */}

                  <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {
                      data.option["result"]["analysis_data"]["volume_analysis"][
                        "first_strike_ce"
                      ]
                    }
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["ce_range_shifted"]
                      ? "No"
                      : "Yes"}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["pcr_ce"].toFixed(
                      2
                    )}
                  </Typography>
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{
                      color:
                        data.option["result"]["analysis_data"][
                          "pcr_change_ce"
                        ] > 0
                          ? "green"
                          : "red",
                      fontWeight: "bold",
                    }}
                  >
                <Typography variant="p" sx={style.typography}> 
                    {data.option["result"]["analysis_data"][
                      "pcr_change_ce"
                    ].toFixed(2)}
                </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["ceoi_range"]}
                  </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {
                      data.option["result"]["analysis_data"][
                        "ce_strike_oi_change_based"
                      ]
                    }
                 </Typography>
                  </StyledTableCell>
                  {/* <StyledTableCell align="center">{data.option['result']['analysis_data']['volume_analysis']['first_strike_pe']}</StyledTableCell> */}
                  {/* this change by adarsh raj */}
                  {/* <StyledTableCell align="center">{data.option['result']['analysis_data']['volume_analysis']['second_strike_ce']}</StyledTableCell>
                            <StyledTableCell align="center">{data.option['result']['analysis_data']['volume_analysis']['second_column_change_ce']}</StyledTableCell>
                            <StyledTableCell align="center">{data.option['result']['analysis_data']['volume_analysis']['second_strike_pe']}</StyledTableCell>
                            <StyledTableCell align="center">{data.option['result']['analysis_data']['volume_analysis']['second_column_change_pe']}</StyledTableCell> */}
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
    </Grid>
  );
};
