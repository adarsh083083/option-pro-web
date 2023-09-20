import { Button, Grid, Typography } from "@mui/material";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { StyledTableCell, StyledTableRow } from './StyledTable';
import { theme } from '../commons/theme'

const OiAnalysisTable = () => {
  const theme = useTheme()
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignContent="center"
        sx={{ display: "flex", flex: 1 }}
      >
        <Grid container item justifyContent={"center"} sx={{ mb: 1 }}>
          <Typography variant="h4" align="center">
            OI Analysis Table
          </Typography>
        </Grid>
        <Grid lg={7} sx={{
          flex: 1,
          backgroundColor: theme.palette.appbar,
          // p:1,
          borderRadius: 5,
          mb: 2
        }}
          container
          direction={'row'}
        // justifyContent={'center'}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }}  size='small'  aria-label="customized table">
              <TableHead>
                <TableRow>

                  <StyledTableCell align="center">Time</StyledTableCell>
                  <StyledTableCell align="center">CE OI</StyledTableCell>
                  <StyledTableCell align="center">PE OI</StyledTableCell>
                  <StyledTableCell align="center">Difference</StyledTableCell>
                  <StyledTableCell align="center">View</StyledTableCell>
                  <StyledTableCell align="center">2 V Difference</StyledTableCell>
                  <StyledTableCell align="center">Average Difference</StyledTableCell>
                  <StyledTableCell align="center">WVA</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <StyledTableRow>
                  <StyledTableCell align="center" component="th" scope="row">HELLO</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">HELLO</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">HELLO</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">HELLO</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row"
                  // sx={{backgroundColor: k[1]['view'] == 'Bullish' ? theme.palette.success.main : theme.palette.error.main }}
                  >HELLO</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row"
                  // style={{color:k[1]['v_diff'] > 0 ? theme.palette.success.main : k[1]['v_diff'] ===0?'white': theme.palette.error.main}}
                  >HELLO</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row"
                  // style={{color:k[1]['avg_diff'] > 0 ? theme.palette.success.main : k[1]['avg_diff'] ===0?'white': theme.palette.error.main}}
                  >HELLO</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row"
                  // style={{color:k[1]['wva'] > 0 ? theme.palette.success.main : k[1]['wva'] ===0?'white': theme.palette.error.main}}
                  >HELLO</StyledTableCell>

                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        alignContent="center"
        sx={{ display: "flex", flex: 1 }}
      >
        <Grid container item justifyContent={"center"} sx={{ mb: 1 }}>
          <Typography variant="h4" align="center">
            OI Analysis Chart
          </Typography>
        </Grid>
        <Grid lg={7} sx={{
          flex: 1,
          backgroundColor: theme.palette.appbar,
          // p:1,
          borderRadius: 5,
          mb: 5
        }}
          container
          direction={'row'}
        // justifyContent={'center'}
        >
          <ResponsiveContainer width="80%" height="100%" aspect={2}>
            {/* <Typography>Helloooooo</Typography> */}
            <LineChart
              width={400}
              height={300}
              // data={}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {/* <CartesianGrid strokeDasharray="2"/> */}
              <XAxis dataKey="time" />
              <YAxis
              // tickCount={8}
              />
              <Tooltip />
              <Legend />
              <Line dataKey="difference" stroke={theme.palette.chartSplitColorTriad["1"]} />
              <Line type="monotone" dataKey="avg_diff" stroke={theme.palette.chartSplitColorTriad["2"]} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="wva" stroke={theme.palette.chartSplitColorTriad["3"]} />
            </LineChart>
          </ResponsiveContainer>

        </Grid>
      </Grid>
    </>
  )
}

export default OiAnalysisTable;
