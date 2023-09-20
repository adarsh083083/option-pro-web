//     });
//    }, [])
//   //  const data = useSelector((state) => state);
//   // console.log(data,)
   
//    // console.log(currentInterval,"range......")
//   // debugger

// // console.log("current",data)
// // let myData=Data.filter(item => item.name)
// // console.log(myData)

  // console.log(currentInterval,"range......")
  // debugger

  // console.log("current",data)

//   return (
//     <>
//       <h1>hey</h1>
//     </>
//     // <Grid
//     //   container
//     //   justifyContent={"center"}
//     //   alignContent="center"
//     //   sx={{ display: "flex", flex: 1 }}
//     // >
//     //   <Grid container item justifyContent={"center"} sx={{ mb: 1 }}>
//     //     <Typography variant="h4" align="center">
//     //       Range Analysis
//     //     </Typography>
//     //   </Grid>
//     //   <Grid lg={7} sx={{
//     //             flex: 1,
//     //             backgroundColor: theme.palette.appbar,
//     //             // p:1,
//     //             borderRadius: 5,
//     //             mb: 3
//     //         }}
//     //             container

//     //         // justifyContent={'center'}
//     //         >
          
//     //       <TableContainer component={Paper}>
//     //                 <Table sx={{ minWidth: 700 }} aria-label="customized table">
//     //                     <TableHead>
//     //                         <TableRow>
//     //                             <StyledTableCell align="right">Future Price</StyledTableCell>
//     //                             <StyledTableCell align="right">Range <sub>(Volume based)</sub></StyledTableCell>
//     //                             <StyledTableCell align="right">Shifted? <sub>(from yesterday)</sub></StyledTableCell>
//     //                             <StyledTableCell align="right">PCR</StyledTableCell>
//     //                             <StyledTableCell align="right">PCR Change <sub>({currentInterval}min interval)</sub></StyledTableCell>
//     //                             <StyledTableCell align="right">Range<sub>(OI Based)</sub></StyledTableCell>
//     //                             <StyledTableCell align="right">Range<sub>(OIC Based)</sub></StyledTableCell>
//     //                             {/* here is the new changes and that changes is remove both header   Adarsh raj                     */}
//     //                             {/* <StyledTableCell align="right" colSpan="2" sx={{ textAlign: 'center' }}>CE Volume Change</StyledTableCell> */}
//     //                             {/* <StyledTableCell align="right" colSpan="2" sx={{ textAlign: 'center' }}>PE Volume Change</StyledTableCell> */}
//     //                         </TableRow>
//     //                     </TableHead>
//     //                     <TableBody>
//     //                     <StyledTableRow key={'nifty7'}>
//     //                     <StyledTableCell align="center" rowSpan={2}>{data['result']['analysis_data']['ltp_futures']}</StyledTableCell>
//     //                             <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_strike_pe']}</StyledTableCell>
//     //                             <StyledTableCell align="center">{data['result']['analysis_data']['pe_range_shifted'] ? 'No' : 'Yes'}</StyledTableCell>
//     //                             <StyledTableCell align="center">{data['result']['analysis_data']['pcr_pe'].toFixed(2)}</StyledTableCell>
//     //                             <StyledTableCell align="center" sx={{ color: data['result']['analysis_data']['pcr_change_pe'] > 0 ? 'green' : 'red', fontWeight: 'bold' }}>
//     //                                 {data['result']['analysis_data']['pcr_change_pe'].toFixed(2)}
//     //                             </StyledTableCell>
//     //                             <StyledTableCell align="center">{data['result']['analysis_data']['peoi_range']}</StyledTableCell>
//     //                             {/* this change by adarsh raj */}
//     //                             {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_strike_ce']}</StyledTableCell> */}
//     //                             {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_strike_ce']}</StyledTableCell> */}
//     //                             {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_column_change_ce']}</StyledTableCell> */}
//     //                             {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_strike_pe']}</StyledTableCell> */}
//     //                             {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_column_change_pe']}</StyledTableCell> */}
//     //                         </StyledTableRow>
//     //                         <StyledTableRow key={'nifty8'}>
//     //                             {/* <StyledTableCell align="right">{data.history["Futures LTP"]}</StyledTableCell> */}

//     //                             <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_strike_ce']}</StyledTableCell>
//     //                             <StyledTableCell align="center">{data['result']['analysis_data']['ce_range_shifted'] ? 'No' : 'Yes'}</StyledTableCell>
//     //                             <StyledTableCell align="center">{data['result']['analysis_data']['pcr_ce'].toFixed(2)}</StyledTableCell>
//     //                             <StyledTableCell align="center" sx={{ color: data['result']['analysis_data']['pcr_change_ce'] > 0 ? 'green' : 'red', fontWeight: 'bold' }}>
//     //                             </StyledTableCell>
//     //                             <StyledTableCell align="center">{data['result']['analysis_data']['ceoi_range']}</StyledTableCell>
//     //                             {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['first_strike_pe']}</StyledTableCell> */}
//     //                             {/* this change by adarsh raj */}
//     //                             {/* <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['second_strike_ce']}</StyledTableCell>
//     //                         <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['second_column_change_ce']}</StyledTableCell>
//     //                         <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['second_strike_pe']}</StyledTableCell>
//     //                         <StyledTableCell align="center">{data['result']['analysis_data']['volume_analysis']['second_column_change_pe']}</StyledTableCell> */}
//     //                     </StyledTableRow>
//     //                     </TableBody>
//     //                 </Table>
//     //         </TableContainer>
//     //  </Grid>
//     // </Grid>
//   );
// };

//  export default RangeAnalysis;
