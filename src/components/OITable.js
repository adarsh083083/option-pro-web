import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledTableCell, StyledTableRow } from './StyledTable';



export const OITable = ({ data }) => {

const theme = useTheme()

    return (
        <Grid lg={12} sm={12} md={12} sx={{
            flex: 1,
            backgroundColor: theme.palette.appbar,
            // p:1,
            borderRadius: 5,
            mb: 3
        }}
            container
            direction={'row'}
        // justifyContent={'center'}
        >   
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }}  size='small' aria-label="customized table">
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

                        {
                            data.map((k, v) => (
                                <StyledTableRow key={v}>
                                    <StyledTableCell align="center" component="th" scope="row">{`${k[1]['hour']}:${k[1]['min']==0?"00":k[1]['min']}`}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">{k[1]['ce_oi']}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">{k[1]['pe_oi']}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">{k[1]['difference']}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row"
                                        sx={{backgroundColor: k[1]['view'] == 'Bullish' ? theme.palette.success.main : theme.palette.error.main }}
                                    >{k[1]['view']}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row"
                                    style={{color:k[1]['v_diff'] > 0 ? theme.palette.success.main : k[1]['v_diff'] ===0?'white': theme.palette.error.main}}
                                    >{k[1]['v_diff'].toFixed()}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row"
                                    style={{color:k[1]['avg_diff'] > 0 ? theme.palette.success.main : k[1]['avg_diff'] ===0?'white': theme.palette.error.main}}
                                    >{k[1]['avg_diff'].toFixed()}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row"
                                    style={{color:k[1]['wva'] > 0 ? theme.palette.success.main : k[1]['wva'] ===0?'white': theme.palette.error.main}}
                                    >{k[1]['wva'].toFixed()}</StyledTableCell>

                                </StyledTableRow>

                            )

                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}