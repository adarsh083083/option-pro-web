import styled from "@emotion/styled";

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.accent,
        color: theme.palette.tableTextColor,
        fontWeight:'bold',
        fontFamily:'Roboto',
        padding:'15px',
        lineHeight:1,
        fontSize:'12px',
        
        
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        fontWeight:'bold',
        color: theme.palette.tableFontColor

    },
    
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

