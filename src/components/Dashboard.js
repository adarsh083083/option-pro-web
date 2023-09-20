import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { StyledTableCell, StyledTableRow } from "./StyledTable";
import { useDispatch } from "react-redux";
import { setOptionCurrentSymbol } from "../redux/options";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { cleanUpData } from "../redux/tableData";
import { fontFamily } from "@mui/system";


export const Dashboard = () => {
  const theme = useTheme();
  const data = useSelector((state) => state.table.dashboard);
  // console.log(data)
  const indexData = data ? data.filter((k) => k.name.includes("NIFTY")) : [];
  const equityData = data ? data.filter((k) => !k.name.includes("NIFTY")) : [];
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    dispatch(cleanUpData());
    dispatch(setOptionCurrentSymbol(newValue));
  };

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
        lg={12}
        md={12}
        sm={12}
        sx={{
          flex: 1,
          backgroundColor: theme.palette.appbar,
          borderRadius: 5,
          mb: 3,
        }}
      >
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700 }}
            size="small"
            aria-label="customized table"
          >
            <TableHead>
              <TableRow sx={style.tableRow}>
                <StyledTableCell align="left">Stock Name</StyledTableCell>
                <StyledTableCell align="center">LTP</StyledTableCell>
                <StyledTableCell align="center">PE Range</StyledTableCell>
                <StyledTableCell align="center">CE Range</StyledTableCell>
                <StyledTableCell align="center">
                  Range Difference
                </StyledTableCell>
                <StyledTableCell align="center">
                  PE OI Change <br/><sub>(5min interval)</sub>
                </StyledTableCell>
                <StyledTableCell align="center">
                  CE OI Change  <br/><sub>(5min interval)</sub>
                </StyledTableCell>
                <StyledTableCell align="center">
                  Future Discount/<br/>
                  Premium
                </StyledTableCell>
                <StyledTableCell align="center">
                  OI Change At  <br/><sub>(5min interval)</sub> 
                </StyledTableCell>
                <StyledTableCell align="center">
                  PE & CE OI Difference
                </StyledTableCell>
              </TableRow>
            </TableHead>
            {data ? (
              <TableBody>
                {indexData.map((k, v) => (
                  <StyledTableRow key={v}>
                    <StyledTableCell
                      align="left"
                      sx={{ cursor: "pointer", fontWeight: "bold" }}
                      onClick={() => handleChange(k["name"])}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["name"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        backgroundColor:
                          k["analysis_data"]["prev_close"] > 0
                            ? theme.palette.success.main
                            : k["analysis_data"]["prev_close"] < 0
                            ? theme.palette.error.main
                            : "unset",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["ltp_futures"] >= 0
                          ? k["analysis_data"]["ltp_futures"]
                          : 0}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["pe_strike"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["ce_strike"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["ce_strike"] -
                          k["analysis_data"]["pe_strike"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color:
                          k["analysis_data"]["sum_of_pe_oi_change"] > 0
                            ? "green"
                            : k["analysis_data"]["sum_of_pe_oi_change"] < 0
                            ? "red"
                            : "#2452db",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["sum_of_pe_oi_change"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color:
                          k["analysis_data"]["sum_of_ce_oi_change"] > 0
                            ? "green"
                            : k["analysis_data"]["sum_of_ce_oi_change"] < 0
                            ? "red"
                            : "#2452db",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["sum_of_ce_oi_change"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color:
                          k["analysis_data"]["discount_premium"] == "Premium"
                            ? "#2452db"
                            : "red",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["discount_premium"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color:
                          k["analysis_data"]["high_oi_change"] == "CE"
                            ? "red"
                            : k["analysis_data"]["high_oi_change"] == "PE"
                            ? "green"
                            : "#2452db",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["high_oi_change"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color:
                          k["analysis_data"]["diff_oi"] > 0
                            ? "green"
                            : k["analysis_data"]["diff_oi"] < 0
                            ? "red"
                            : "#2452db",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["diff_oi"]}
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {equityData.map((k, v) => (
                  <StyledTableRow key={v}>
                    <StyledTableCell
                      align="left"
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleChange(k["name"])}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["name"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        backgroundColor:
                          k["analysis_data"]["prev_close"] > 0
                            ? theme.palette.success.main
                            : k["analysis_data"]["prev_close"] < 0
                            ? theme.palette.error.main
                            : "unset",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["ltp_futures"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["pe_strike"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["ce_strike"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["ce_strike"] -
                          k["analysis_data"]["pe_strike"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color:
                          k["analysis_data"]["sum_of_pe_oi_change"] > 0
                            ? "green"
                            : k["analysis_data"]["sum_of_pe_oi_change"] < 0
                            ? "red"
                            : "#2452db",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["sum_of_pe_oi_change"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color:
                          k["analysis_data"]["sum_of_ce_oi_change"] > 0
                            ? "green"
                            : k["analysis_data"]["sum_of_ce_oi_change"] < 0
                            ? "red"
                            : "#2452db",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["sum_of_ce_oi_change"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color:
                          k["analysis_data"]["discount_premium"] == "Premium"
                            ? "#2452db"
                            : "red",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["discount_premium"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color:
                          k["analysis_data"]["high_oi_change"] == "CE"
                            ? "red"
                            : k["analysis_data"]["high_oi_change"] == "PE"
                            ? "green"
                            : "#2452db",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["high_oi_change"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color:
                          k["analysis_data"]["diff_oi"] > 0
                            ? "green"
                            : k["analysis_data"]["diff_oi"] < 0
                            ? "red"
                            : "#2452db",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["diff_oi"]}
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
      <Grid
        container
        lg={12}
        md={12}
        sm={12}
        sx={{
          flex: 1,
          backgroundColor: theme.palette.appbar,
          borderRadius: 5,
          mb: 1,
          mt: 1,
        }}
      >
        <TableContainer component={Paper}> 
          <Table
            sx={{ minWidth: 700 }}
            size="small"
            aria-label="customized table"
          >
            <TableHead >
              <TableRow  sx={style.tableRow}>
                <StyledTableCell sx={{width:'150px'}} align="left">Stock Name</StyledTableCell>
                <StyledTableCell align="center">Bata High</StyledTableCell>
                <StyledTableCell align="center">Bata Low</StyledTableCell>
                <StyledTableCell align="center">OI Based PCR</StyledTableCell>
                <StyledTableCell align="center">Bullish</StyledTableCell>
                <StyledTableCell align="center">Bearish</StyledTableCell>
                <StyledTableCell align="center">Neutral</StyledTableCell>
                <StyledTableCell align="center">Overall</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {indexData.map((k, v) => {
                // console.log(k)
                // let buy_star = 0
                // let sell_star = 0
                // const oidata = k.oi
                // const oivdata = k.oiv
                // const oi_view = oidata ? oidata.length > 0 ? oidata[oidata.length - 1][1]['view'] : false : null
                // const oiv_view = oivdata ? oivdata.length > 0 ? oivdata[oivdata.length - 1][1]['view'] : false : null

                // const pcr_oibased = oidata ? oidata.length > 1 ? oidata[oidata.length - 1][1]['pcr'] - oidata[oidata.length - 2][1]['pcr'] > 0 ? true : false : null : null
                // const [total_, bullish_percentage, bearish_percentage, neutral_percentage, overallview, bullish, bearish, neutral, calway_bearish, calway_bullish, calway_neutral] = CalculateIndicatorPercentages(k['analysis_data'], oi_view, oiv_view, pcr_oibased)

                // console.log(oi_view,oiv_view,pcr_oibased,oidata,oivdata)
                return (
                  <StyledTableRow key={v}>
                    <StyledTableCell
                      align="left"
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleChange(k["name"])}
                    >
                      <Typography variant="p" sx={style.typography}>
                        {k["name"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="p" sx={style.typography}>
                        {k["analysis_data"]["bata_high"] ? "Yes" : "No"}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      > 
                      {k["analysis_data"]["bata_low"] ? "Yes" : "No"}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k["analysis_data"]["oi_based_pcr"].toFixed(2)}
                     </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {'bullish': 14.81, 'bearish': 48.15, 'neutral': 37.04, 'overallview': 'Bearish'} */}
                      <Typography
                        variant="p"
                        sx={style.typography}
                      >
                      {k.view.bullish}%
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k.view.bearish}%
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k.view.neutral}%
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{
                        backgroundColor:
                          k.view.overallview == "Bullish"
                            ? theme.palette.success.light
                            : k.view.overallview == "Bearish"
                            ? theme.palette.error.main
                            : "unset",
                      }}
                    >
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k.view.overallview}
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
              {equityData.map((k, v) => {
                // const oidata = k.oi
                // const oivdata = k.oiv
                // const oi_view = oidata ? oidata['view'] : false
                // const oiv_view = oivdata ? oivdata['view'] : false

                // console.log(oi_view,oiv_view)
                // const pcr_oibased = oidata ? oidata.length > 1 ? oidata[oidata.length - 1][1]['pcr'] - oidata[oidata.length - 2][1]['pcr'] > 0 ? true : false : null : null
                // const [total_, bullish_percentage, bearish_percentage, neutral_percentage, overallview, bullish, bearish, neutral, calway_bearish, calway_bullish, calway_neutral] = CalculateIndicatorPercentages(k['analysis_data'], oi_view, oiv_view, pcr_oibased)
                return (
                  <StyledTableRow key={v}>
                    <StyledTableCell
                      align="left"
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleChange(k["name"])}
                    >
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k["name"]}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k["analysis_data"]["bata_high"] ? "Yes" : "No"}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k["analysis_data"]["bata_low"] ? "Yes" : "No"}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography  
                      variant="p"
                      sx={style.typography}
                      >
                      {k["analysis_data"]["oi_based_pcr"].toFixed(2)}
                    </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k.view.bullish}%
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k.view.bearish}%
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k.view.neutral}%
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{
                        backgroundColor:
                          k.view.overallview == "Bullish"
                            ? theme.palette.success.light
                            : k.view.overallview == "Bearish"
                            ? theme.palette.error.main
                            : "unset",
                      }}
                    >
                      <Typography 
                      variant="p"
                      sx={style.typography}
                      >
                      {k.view.overallview}
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </React.Fragment>
  );
};
