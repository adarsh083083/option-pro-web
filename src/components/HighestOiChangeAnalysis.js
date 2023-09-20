import { Grid, Typography,AppBar } from "@mui/material"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { theme } from '../commons/theme'
import { StyledTableCell, StyledTableRow } from './StyledTable';
import { useSelector } from "react-redux";


const HighestOiChangeAnalysis = () => {
  return (
    <React.Fragment>
      <Grid 
       container
       justifyContent={"center"}
       alignContent="center"
       sx={{ display: "flex", flex: 1 }}
   >
       <Grid container item justifyContent={"center"} sx={{ mb: 1 }}>
           <Typography variant="h4" align="center">
           Highest OI Change Analysis
           </Typography>
       </Grid> 
   <Grid lg={7} sx={{
       flex: 1,
       backgroundColor: theme.palette.appbar,
       // p:1,
       borderRadius: 5,
       mb: 50
   }}
       container
       direction={'row'}
   // justifyContent={'center'}
   >
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }}  size='small' aria-label="customized table">
                <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">{}NIFTY</StyledTableCell>
                            <StyledTableCell align="center">CE</StyledTableCell>
                            <StyledTableCell align="center">OI</StyledTableCell>
                            <StyledTableCell align="center">OI<sub>(in {}min interval)</sub></StyledTableCell>
                            <StyledTableCell align="center">{}</StyledTableCell>
                            <StyledTableCell align="center">PE</StyledTableCell>
                            <StyledTableCell align="center">OI</StyledTableCell>
                            <StyledTableCell align="center">OI<sub>(in {}min interval)</sub></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow key={'c'}>
                            <StyledTableCell align="right" >hello</StyledTableCell>
                            <StyledTableCell align="center" >hello</StyledTableCell>
                            <StyledTableCell align="center">hello</StyledTableCell>
                            <StyledTableCell align="center" >hello</StyledTableCell>
                            <StyledTableCell align="center" >hello</StyledTableCell>
                            <StyledTableCell align="center">hello</StyledTableCell>
                            <StyledTableCell align="center" >hello</StyledTableCell>
                            <StyledTableCell align="center">hello</StyledTableCell>
                        </StyledTableRow>
                      
                    </TableBody>
        </Table>
        </TableContainer>
        
    </Grid>
    </Grid>
   
    </React.Fragment>

  )
}

export default HighestOiChangeAnalysis;
