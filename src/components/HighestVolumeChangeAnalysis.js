import { Grid, Typography } from "@mui/material"
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


const HighestVolumeChangeAnalysis = () => {
  return (
    <React.Fragment>
    <Grid 
       container
       justifyContent={"center"}
       alignContent="center"
       sx={{ display: "flex", flex: 1 }}
   >
    
   <Grid lg={7} sx={{
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
                            <StyledTableCell align="right">{}</StyledTableCell>
                            <StyledTableCell align="center">CE</StyledTableCell>
                            <StyledTableCell align="center">Volume</StyledTableCell>
                            <StyledTableCell align="center">Volume<sub>(in {}min interval)</sub></StyledTableCell>
                            <StyledTableCell align="center">{}</StyledTableCell>
                            <StyledTableCell align="center">PE</StyledTableCell>
                            <StyledTableCell align="center">Volume</StyledTableCell>
                            <StyledTableCell align="center">Volume<sub>(in {}min interval)</sub></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow key={'c'}>
                            <StyledTableCell align="right" >1<sup>st</sup></StyledTableCell>
                            <StyledTableCell align="center">hello</StyledTableCell>
                            {/* <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['first_volume_ce']}</StyledTableCell>
                            <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['first_column_change_ce']}</StyledTableCell> */}
                            <StyledTableCell align="center" >1<sup>st</sup></StyledTableCell>
                            {/* <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['first_strike_pe']}</StyledTableCell>
                            <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_volume_pe']}</StyledTableCell>
                            <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_column_change_pe']}</StyledTableCell> */}
                        </StyledTableRow>
                        <StyledTableRow key={'f'}>
                            <StyledTableCell align="right" >2<sup>nd</sup></StyledTableCell>
                            <StyledTableCell align="center">hello</StyledTableCell>
                            {/* <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['second_volume_ce']}</StyledTableCell>
                            <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['second_column_change_ce']}</StyledTableCell> */}
                            <StyledTableCell align="center" >2<sup>nd</sup></StyledTableCell>
                            {/* <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['second_strike_pe']}</StyledTableCell>
                            <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['second_volume_pe']}</StyledTableCell>
                            <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['second_column_change_pe']}</StyledTableCell> */}
                        </StyledTableRow>
                        <StyledTableRow key={'q'}>
                            <StyledTableCell align="right" >3<sup>rd</sup></StyledTableCell>
                            <StyledTableCell align="center">hello</StyledTableCell>
                            {/* <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['third_volume_ce']}</StyledTableCell>
                            <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['third_column_change_ce']}</StyledTableCell> */}
                            <StyledTableCell align="center">3<sup>rd</sup></StyledTableCell>
                            {/* <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['third_strike_pe']}</StyledTableCell>
                            <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['third_volume_pe']}</StyledTableCell>
                            <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['third_column_change_pe']}</StyledTableCell> */}
                        </StyledTableRow>
                        <StyledTableRow key={'s'}>
                            <StyledTableCell align="right" >4<sup>th</sup></StyledTableCell>
                            <StyledTableCell align="center">hello</StyledTableCell>
                            {/* <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['fourth_volume_ce']}</StyledTableCell>
                            <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['fourth_column_change_ce']}</StyledTableCell> */}
                            <StyledTableCell align="center">4<sup>th</sup></StyledTableCell>
                            {/* <StyledTableCell align="center" >{data['result']['analysis_data']['volume_analysis']['fourth_strike_pe']}</StyledTableCell>
                            <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['fourth_volume_pe']}</StyledTableCell>
                            <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['fourth_column_change_pe']}</StyledTableCell> */}
                        </StyledTableRow>
                    </TableBody>
        </Table>
        </TableContainer>
        
    </Grid>
    </Grid>
    </React.Fragment>
  )
}

export default HighestVolumeChangeAnalysis;
 