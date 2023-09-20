import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { StyledTableCell, StyledTableRow } from "../StyledTable";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";

const StyledTableCellSecond = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const OIAnalysis = () => {
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
      backgroundColor: "red",
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
          // p:1,
          borderRadius: 5,
          mb: 1,
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
              {data ? (
                <>
                  <TableRow sx={style.tableRow}>
                    <StyledTableCell
                      align="center"
                      rowSpan={2}
                      style={{ backgroundColor: "#D0aee2" }}
                    >
                      OI Difference Analysis
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      
                    >
                      CE OI
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      
                    >
                      PE OI
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                       
                    >
                      Difference
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      rowSpan={2}
                      style={{ backgroundColor: "#D0aee2" }}
                    >
                      Volume Difference Analysis
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      
                    >
                      CE Volume
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                       
                    >
                      PE Volume
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      
                    >
                      Difference
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      rowSpan={2}
                      style={{ backgroundColor: "#D0aee2"}}
                    >
                      OI & Volume Ratio Analysis
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                       
                    >
                      CE (OI & Volume Ratio)
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                       
                    >
                      PE (OI & Volume Ratio)
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                       
                    >
                      Difference
                    </StyledTableCell>
                  </TableRow>

                  <StyledTableRow key={"nifty4"}>
                    <StyledTableCellSecond
                      align="center"
                      component="th"
                      scope="row"
                    >
                      <Typography variant="p" sx={style.typography}>
                        {data.option["result"]["analysis_data"]["sum_of_ce_oi"]}
                      </Typography>
                    </StyledTableCellSecond>
                    <StyledTableCellSecond
                      align="right"
                      component="th"
                      scope="row"
                    >
                      <Typography variant="p" sx={style.typography}>
                        {data.option["result"]["analysis_data"]["sum_of_pe_oi"]}
                      </Typography>
                    </StyledTableCellSecond>
                    <StyledTableCellSecond
                      align="center"
                      component="th"
                      scope="row"
                      sx={{
                        color:
                          data.option["result"]["analysis_data"]["diff_oi"] > 0
                            ? "green"
                            : "red",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {data.option["result"]["analysis_data"]["diff_oi"]}
                      </Typography>
                    </StyledTableCellSecond>

                    <StyledTableCellSecond
                      align="center"
                      component="th"
                      scope="row"
                    >
                      <Typography variant="p" sx={style.typography}>
                        {data.option["result"]["analysis_data"]["ce_vol_ratio"]
                          ? data.option["result"]["analysis_data"][
                              "ce_vol_ratio"
                            ].toFixed(2)
                          : 0}
                      </Typography>
                    </StyledTableCellSecond>
                    <StyledTableCellSecond
                      align="center"
                      component="th"
                      scope="row"
                    >
                      <Typography variant="p" sx={style.typography}>
                        {data.option["result"]["analysis_data"]["pe_vol_ratio"]
                          ? data.option["result"]["analysis_data"][
                              "pe_vol_ratio"
                            ].toFixed(2)
                          : 0}
                      </Typography>
                    </StyledTableCellSecond>
                    <StyledTableCellSecond
                      align="center"
                      component="th"
                      scope="row"
                      sx={{
                        color:
                          data.option["result"]["analysis_data"][
                            "difference_pe_ce_volume"
                          ] > 0
                            ? "green"
                            : "red",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {data.option["result"]["analysis_data"][
                          "difference_pe_ce_volume"
                        ]
                          ? data.option["result"]["analysis_data"][
                              "difference_pe_ce_volume"
                            ].toFixed(2)
                          : 0}
                      </Typography>
                    </StyledTableCellSecond>

                    <StyledTableCellSecond
                      align="center"
                      component="th"
                      scope="row"
                    >
                      <Typography variant="p" sx={style.typography}>
                        {data.option["result"]["analysis_data"][
                          "ce_oi_vol_ratio"
                        ].toFixed(2)}
                      </Typography>
                    </StyledTableCellSecond>
                    <StyledTableCellSecond
                      align="center"
                      component="th"
                      scope="row"
                    >
                      <Typography variant="p" sx={style.typography}>
                        {data.option["result"]["analysis_data"][
                          "pe_oi_vol_ratio"
                        ].toFixed(2)}
                      </Typography>
                    </StyledTableCellSecond>
                    <StyledTableCellSecond
                      align="center"
                      component="th"
                      scope="row"
                      sx={{
                        color:
                          data.option["result"]["analysis_data"][
                            "difference_pe_ce_oi_vol"
                          ] > 0
                            ? "green"
                            : "red",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {data.option["result"]["analysis_data"][
                          "difference_pe_ce_oi_vol"
                        ].toFixed(2)}
                      </Typography>
                    </StyledTableCellSecond>
                  </StyledTableRow>
                </>
              ) : (
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
              )}
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

{
  /* <StyledTableCell align="center" rowSpan={2}>
                  OI Analysis
                </StyledTableCell>
                <StyledTableCell align="center">CE OI</StyledTableCell>
                <StyledTableCell align="center">PE OI</StyledTableCell>
                <StyledTableCell align="center">Difference</StyledTableCell>
                <StyledTableCell align="center" rowSpan={2}>
                  OI & Volume Ratio Analysis
                </StyledTableCell>
                <StyledTableCell align="center">
                  CE <sub>(OI & Volume Ratio)</sub>
                </StyledTableCell>
                <StyledTableCell align="center">
                  PE <sub>(OI & Volume Ratio)</sub>
                </StyledTableCell>
                <StyledTableCell align="center">Difference</StyledTableCell>
                <StyledTableCell align="center">
                  Change <sub>in {currentInterval}min interval</sub>
                </StyledTableCell> */
}


