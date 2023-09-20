import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.accent,
        color: theme.palette.common.black,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export const LiveData = ({ data, symbol }) => {
    const theme = useTheme()

    // Object.keys(data.result.data[0]).filter(k => !k.includes('prev'))
    const columns = ["ce_symbol", "ce_strike",
        // "ce_type",
        // "ce_ltp",
        // "ce_ltt",
        // "ce_ltq",
        "ce_volume",
        // "ce_price_change",
        // "ce_price_change_perc",
        "ce_oi",
        // "ce_prev_oi",
        // "ce_oi_change",
        // "ce_oi_change_perc",
        // "pe_symbol",
        // "pe_strike",
        // "pe_type",
        // "pe_ltp",
        // "pe_ltt",
        // "pe_ltq",
        "pe_volume",
        // "pe_price_change",
        // "pe_price_change_perc",
        "pe_oi",
        // "pe_prev_oi","pe_oi_change",
        "pcr",
        "prev_pcr",
        "pcr_change",
        "ce_volume_change",
        "pe_volume_change",
        "ce_winding_status",
        "pe_winding_status",
    ]

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
                            {
                                columns.map(k => (

                                    <StyledTableCell align="center">{k}</StyledTableCell>
                                ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.result.data.map((k,v) => (
                                <StyledTableRow key={`nifty3${v}`}>
                                    {columns.map(v => (<StyledTableCell align="right" component="th" scope="row">
                                    {
                                            v.includes('winding') ? <div>
                                                {k[v] ? 'Yes' : 'No'}
                                            </div>
                                                :
                                                k[v]
                                    
                                    }
                                            </StyledTableCell>
                                    ))}
                                    </StyledTableRow>
                                    ))
                                    }

                                </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}