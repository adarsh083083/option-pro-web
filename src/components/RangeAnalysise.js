import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { theme } from "../commons/theme";
import { StyledTableCell, StyledTableRow } from "./StyledTable";
import { useSelector } from "react-redux";
import { getTableData } from "../redux/tableData"
 

const RangeAnalysise = ({ data }) => {
 
 
  return (
    <Grid container justifyContent={"center"} alignContent="center" sx={{ display: "flex", flex: 1 }} >
      <Grid container item justifyContent={"center"} sx={{ mb: 1 }}>
        <Typography variant="h4" align="center">
          Range Analysis
        </Typography>
      </Grid>
      <Grid
        lg={7}
        sx={{
          flex: 1,
          backgroundColor: theme.palette.appbar,
          // p:1,
          borderRadius: 5,
          mb: 3,
        }}
        container
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}  size='small' aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Future Price</StyledTableCell>
                <StyledTableCell align="right">
                  Range <sub>(Volume based)</sub>
                </StyledTableCell>
                <StyledTableCell align="right">
                  Shifted? <sub>(from yesterday)</sub>
                </StyledTableCell>
                <StyledTableCell align="right">PCR</StyledTableCell>
                <StyledTableCell align="right">
                  PCR Change <sub>({ }min interval)</sub>
                </StyledTableCell>
                <StyledTableCell align="right">
                  Range<sub>(OI Based)</sub>
                </StyledTableCell>
                <StyledTableCell align="right">
                  Range<sub>(OIC Based)</sub>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key={'nifty7'}>
                <StyledTableCell align="center" >hello</StyledTableCell>
                <StyledTableCell align="center">hello</StyledTableCell>
                <StyledTableCell align="center">hello</StyledTableCell>
                <StyledTableCell align="center">hello</StyledTableCell>
                <StyledTableCell align="center">hello </StyledTableCell>
                <StyledTableCell align="center">hello</StyledTableCell>
                <StyledTableCell align="center">hello</StyledTableCell>
                {/* this change by adarsh raj */}
                {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_strike_ce']}</StyledTableCell> */}
                {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_strike_ce']}</StyledTableCell> */}
                {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_column_change_ce']}</StyledTableCell> */}
                {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_strike_pe']}</StyledTableCell> */}
                {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_column_change_pe']}</StyledTableCell> */}
              </StyledTableRow>
              <StyledTableRow key={'nifty8'}>
                {/* <StyledTableCell align="right">{data.history["Futures LTP"]}</StyledTableCell> */}

                <StyledTableCell align="center">hello</StyledTableCell>
                <StyledTableCell align="center">hello</StyledTableCell>
                <StyledTableCell align="center">hello</StyledTableCell>
                <StyledTableCell align="center"> hello</StyledTableCell>
                <StyledTableCell align="center">hello</StyledTableCell>
                <StyledTableCell align="center"> hello</StyledTableCell>
                <StyledTableCell align="center">hello</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default RangeAnalysise;
