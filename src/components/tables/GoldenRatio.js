import { Grid,Typography } from "@mui/material";
import * as React from "react";
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

export const GoldenRatio = () => {
  const theme = useTheme();
  const data = useSelector((state) => state.table.golden_ratio);

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
              <StyledTableCell
                align="center"
                style={{ backgroundColor: "#A7f1b1" }}
              >
                Sell At
              </StyledTableCell>
              <StyledTableCell align="center">SL</StyledTableCell>
              <StyledTableCell align="center">Target 1</StyledTableCell>
              <StyledTableCell align="center">Target 2</StyledTableCell>
              <StyledTableCell align="center">Target 3</StyledTableCell>
              <StyledTableCell align="center">Target 4</StyledTableCell>

              <StyledTableCell
                align="center"
                style={{ backgroundColor: "#Ff6b6b" }}
              >
                Buy At
              </StyledTableCell>
              <StyledTableCell align="center">SL</StyledTableCell>
              <StyledTableCell align="center">Target 1</StyledTableCell>
              <StyledTableCell align="center">Target 2</StyledTableCell>
              <StyledTableCell align="center">Target 3</StyledTableCell>
              <StyledTableCell align="center">Target 4</StyledTableCell>
            </TableRow>
          </TableHead>

          {data ? (
            <TableBody>
              <StyledTableRow key={"nifty7"}>
                <StyledTableCell
                  align="center"
                  style={{ backgroundColor: theme.palette.error.main }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.sell_at}
                </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                <Typography variant="p" sx={style.typography}> 
                    {data.sell_sl}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ color: theme.palette.error.main }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.sell_tg1}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ color: theme.palette.error.main }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.sell_tg2}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ color: theme.palette.error.main }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.sell_tg3}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ color: theme.palette.error.main }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.sell_tg4}
                </Typography>
                </StyledTableCell>

                <StyledTableCell
                  align="center"
                  style={{ backgroundColor: theme.palette.success.main }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.buy_at}
                </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                <Typography variant="p" sx={style.typography}>
                    {data.buy_sl}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ color: theme.palette.success.main }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.buy_tg1}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ color: theme.palette.success.main }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.buy_tg2}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ color: theme.palette.success.main }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.buy_tg3}
                </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ color: theme.palette.success.main }}
                >
                <Typography variant="p" sx={style.typography}>
                  {data.buy_tg4}
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
