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
import { theme } from "../commons/theme";

import { StyledTableCell, StyledTableRow } from "./StyledTable";
import { useSelector } from "react-redux";

const StyledTableCellSecond = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const OiVolumeDifferenceAnalysis = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent="center"
      sx={{ display: "flex", flex: 1 }}
    >
      <Grid container item justifyContent={"center"} sx={{ mb: 1 }}>
        <Typography variant="h4" align="center">
          OI and Volume Difference Analysis
        </Typography>
      </Grid>
      <Grid
        lg={7}
        sx={{
          flex: 4,
          backgroundColor: theme.palette.appbar,
          // p:1,
          borderRadius: 5,
          mb: 50,
        }}
        container
        direction={"row"}
      // justifyContent={'center'}
      >
         <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}  size='small' aria-label="customized table">
            <TableHead>
              <TableRow>
                 <StyledTableCell align="center" rowSpan={2}>
                  OI Difference Analysis
                </StyledTableCell>
                <StyledTableCell align="center">CE OI</StyledTableCell>
                <StyledTableCell align="center">PE OI</StyledTableCell>
                <StyledTableCell align="center">Difference</StyledTableCell>
                <StyledTableCell align="center" rowSpan={2}>
                  Volume Difference Analysis
                </StyledTableCell>
                <StyledTableCell align="center">CE Volume</StyledTableCell>
                <StyledTableCell align="center">PE Volume</StyledTableCell>
                <StyledTableCell align="center">Difference</StyledTableCell>
                <StyledTableCell align="center" rowSpan={2}>
                  OI & Volume Ratio Analysis
                </StyledTableCell>
                <StyledTableCell align="center">
                  CE (OI & Volume Ratio)
                </StyledTableCell>
                <StyledTableCell align="center">
                  PE (OI & Volume Ratio)
                </StyledTableCell>
                <StyledTableCell align="center">Difference</StyledTableCell>
              </TableRow>
          </TableHead>
          <StyledTableRow key={"nifty4"}>
                <StyledTableCellSecond align="center" component="th" scope="row">
                {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
                <StyledTableCellSecond align="center" component="th" scope="row">
                  {/* {data["result"]["analysis_data"]["sum_of_ce_oi"]} */}hello
                </StyledTableCellSecond>
          </StyledTableRow>
          
          </Table>
          </TableContainer>
          
      </Grid>
    </Grid>

  )
}

export default OiVolumeDifferenceAnalysis; 
