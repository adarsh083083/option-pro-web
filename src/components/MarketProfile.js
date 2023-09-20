import { Button, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import axios from "axios"
import React from "react"
import { useSelector } from "react-redux"
import { ALL_USERS_ENDPOINT, GET_EXP_DATE_ADMIN_ENDPOINT, MARKET_PROF_ADMIN_ENDPOINT, SERVER_INFO_ADMIN_ENDPOINT, WRITE_MARKET_PROF_ADMIN_ENDPOINT } from "../commons/constants"
import { StyledTableCell, StyledTableRow } from "./StyledTable"


const toIsoString = (date) => {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function (num) {
            return (num < 10 ? '0' : '') + num;
        };

    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(Math.floor(Math.abs(tzo) / 60)) +
        ':' + pad(Math.abs(tzo) % 60);
}


export const MarketProfileManagement = () => {
    const token = useSelector(state => state.login.user_token)
    const header = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }


    const [serverinfo, setServerinfo] = React.useState(false)
    const [errors, setError] = React.useState(false)
    const getServerInfo = () => {
        axios.post(MARKET_PROF_ADMIN_ENDPOINT, {}, header).
            then(res => setServerinfo(res.data)).catch(e => setError('Failed to fetch mpd'))
    }

    React.useEffect(() => {
        getServerInfo()

    }, [])
    const save = (v)=>{
        setError(false)
        const data = {
            name:serverinfo[v].name.split("_")[1],
            val:{
                ...serverinfo[v].val,
                timestamp:toIsoString(new Date())
            }
        }
        axios.post(
            WRITE_MARKET_PROF_ADMIN_ENDPOINT,
            data,
            header
        ).then(r=>setError('Sucess')).catch(e=>setError('Failed'))
    }
    const handleChange = (e, v) => {
        setError(false)
        const newData = {
            ...serverinfo[v],
            val: {
                ...serverinfo[v].val,
                [e.target.id]: e.target.value
            }
        }
        const newServerInfo = JSON.parse(JSON.stringify(serverinfo))
        newServerInfo[v] = newData
        console.log(newData, newServerInfo)
        setServerinfo(newServerInfo)
    }
    // const data = serverinfo ? serverinfo.map(k=>({"name":k.name,"val":JSON.parse(k.val.replaceAll("'",'""'))})) : false
    return (
        <Grid container item     lg={12} sm={12} md={12} justifyContent={'center'}
            alignContent='center'
            sx={{ display: 'flex' }}
        >
            <Grid container item justifyContent={'center'} sx={{ mb: 5 }}>
                <Typography variant='h3' align='center' >
                    Market Profile Management

                </Typography>
                
            </Grid>
            <Grid container item justifyContent={'center'} 
            alignContent='center'
            >
                
                <Button variant="contained" color='primary' disableElevation onClick={getServerInfo}>Refresh</Button> {errors && errors}
            </Grid>
            <Grid container item justifyContent={'center'}
                lg={12} sm={12} md={12}
            >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }}   size='small' aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="right" >SYMBOL</StyledTableCell>
                                <StyledTableCell align="center" >VAH</StyledTableCell>
                                <StyledTableCell align="center" >POC</StyledTableCell>
                                <StyledTableCell align="center" >VAL</StyledTableCell>
                                <StyledTableCell align="center" >Timestamp</StyledTableCell>
                                <StyledTableCell align="center" >Change</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {serverinfo && serverinfo.map((k, v) => (
                                <StyledTableRow key={v}>
                                    <StyledTableCell align="right" component="th" scope="row">{k.name} </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        <TextField
                                            id={'VAH'}
                                            value={k.val.VAH}
                                            onChange={(e) => handleChange(e, v)}
                                     
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        <TextField
                                            id={'POC'}
                                            value={k.val.POC}
                                            onChange={(e) => handleChange(e, v)}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        <TextField
                                            id={'VAL'}
                                            value={k.val.VAL}
                                            onChange={(e) => handleChange(e, v)}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">{(new Date(k.val.timestamp)).toLocaleString()}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        <Button
                                            disableElevation
                                            variant="contained"
                                            onClick={()=>save(v)}
                                        >
                                            Save
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}


                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>

        </Grid>
    )
}