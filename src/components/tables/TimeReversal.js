import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from '@mui/material/styles';
import { StyledTableCell, StyledTableRow } from "../StyledTable";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";

export const TimeReversal = () => {
  const theme = useTheme()
  const data = useSelector((state) => state.table.time_reversal)

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "Asia/Kolkata",
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

      // justifyContent={'center'}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} size='small' aria-label="customized table">
            <TableHead>
              <TableRow sx={style.tableRow}>
                <StyledTableCell align="center">Time Reversal</StyledTableCell>
                {Array.apply(null, Array(data?.time_series?.at(-1)))
                  ?.map(function () { })
                  .map((k) => (
                    <StyledTableCell align="center"></StyledTableCell>
                  ))}
              </TableRow>
            </TableHead>
            {
              data ?
                <TableBody>
                  <StyledTableRow key={"nifty7"}>
                    {data?.time_series?.map((k, v) => (
                      <StyledTableCell align="center">
                        <Typography variant="p" sx={style.typography}> 
                        {new Intl.DateTimeFormat("en-US", options).format(
                          new Date(k)

                        )}
                        {/* {console.log(new Intl.DateTimeFormat("en-US", options).format(new Date(k)), "........time revert")} */}
                     </Typography>
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                </TableBody>
                :
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
                      >Loading</LoadingButton>
                    </StyledTableCell>
                  </StyledTableRow>

                </TableBody>
            }
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
