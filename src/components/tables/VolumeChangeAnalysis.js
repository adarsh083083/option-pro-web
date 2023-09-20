import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { StyledTableCell, StyledTableRow } from "../StyledTable";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";

export const VolumeChangeAnalysis = () => {
  const theme = useTheme();
  const data = useSelector((state) => state.table.data);
  const symbol = useSelector((state) => state.options.currentSymbol);

  const currentInterval = useSelector((state) => state.options.currentInterval);

  const style = {
    typography: {
      fontWeight: 500,
      lineHeight: 1.4,
      fontFamily: "sans-serif",
      fontSize: "12px",
      letterSpacing: " 0.00938em",
    },
    tableRow:{
      boxShadow:' 0 4px 6px -6px #222',
      backgroundColor:'#ffffff'
    }
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
                  <StyledTableCell align="center">Volume</StyledTableCell>
                  <StyledTableCell align="center">
                    Volume<sub>(in {currentInterval}min interval)</sub>
                  </StyledTableCell>
                  <StyledTableCell align="center">{symbol}</StyledTableCell>
                  <StyledTableCell align="center">PE</StyledTableCell>
                  <StyledTableCell align="center">Volume</StyledTableCell>
                  <StyledTableCell align="center">
                    Volume<sub>(in {currentInterval}min interval)</sub>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              {data ? (
                <TableBody>
                  <StyledTableRow key={"c"}>
                    <StyledTableCell align="right">
                      1<sup>st</sup>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["first_strike_ce"]
                      }
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["first_volume_ce"]
                      }
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["first_column_change_ce"]
                      }
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      1<sup>st</sup>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["first_strike_pe"]
                      }
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["first_volume_pe"]
                      }
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["first_column_change_pe"]
                      }
                    </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key={"f"}>
                    <StyledTableCell align="right">
                      2<sup>nd</sup>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["second_strike_ce"]
                      }
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["second_volume_ce"]
                      }
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["second_column_change_ce"]
                      }
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      2<sup>nd</sup>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["second_strike_pe"]
                      }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["second_volume_pe"]
                      }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["second_column_change_pe"]
                      }
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key={"q"}>
                    <StyledTableCell align="right">
                      3<sup>rd</sup>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["third_strike_ce"]
                      }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["third_volume_ce"]
                      }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["third_column_change_ce"]
                      }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      3<sup>rd</sup>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["third_strike_pe"]
                      }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["third_volume_pe"]
                      }
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["third_column_change_pe"]
                      }
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key={"s"}>
                    <StyledTableCell align="right">
                      4<sup>th</sup>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["fourth_strike_ce"]
                      }
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["fourth_volume_ce"]
                      }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["fourth_column_change_ce"]
                      }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      4<sup>th</sup>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["fourth_strike_pe"]
                      }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["fourth_volume_pe"]
                      }
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <Typography variant="p" sx={style.typography}>
                      {
                        data.option["result"]["analysis_data"][
                          "volume_analysis"
                        ]["fourth_column_change_pe"]
                      }
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
      </Grid>
    </React.Fragment>
  );
};
