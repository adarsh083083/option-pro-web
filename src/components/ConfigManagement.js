import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import axios from "axios"
import React from "react"
import { useSelector } from "react-redux"
import { ALL_USERS_ENDPOINT, EQUITY_EXPIRY, FINNIFTY_EXPIRY, GET_EXP_DATE_ADMIN_ENDPOINT, INDEX_EXPIRY, RESTART_ADMIN_ENDPOINT, SERVER_INFO_ADMIN_ENDPOINT, SET_EXP_DATE_ADMIN_ENDPOINT } from "../commons/constants"
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


export const ConfigManagement = () => {
    const token = useSelector(state => state.login.user_token)
    const header = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
    const [expinfo, setExpinfo] = React.useState(false)
    const [serverinfo, setServerinfo] = React.useState(false)
    const [errors, setError] = React.useState(false)
    const [menu, setMenu] = React.useState(false)
    const [dialog, OpenDialog] = React.useState(false)
    const [repeater, setRepeater] = React.useState(0)
    const getServerInfo = () => {
        axios.post(SERVER_INFO_ADMIN_ENDPOINT, {}, header).
            then(res => setServerinfo(res.data)).catch(e => setError('Failed to fetch users'))
    }
    const changeExpiry = () => {
        let url = ''
        if (menu.type == 'Weekly') {
            url = INDEX_EXPIRY
        }
        else if (menu.type == 'Monthly') {
            url = EQUITY_EXPIRY
        }
        else if (menu.type == 'Finnifty') {
            url = FINNIFTY_EXPIRY
        }
        else {
            return
        }
        const data = {
            year:menu.year,
            month:menu.month,
            day:menu.day,
        }
        axios.post(url,data,header).then(r=>{setError('Success');OpenDialog(false);getExpInfo()}).catch(e=>setError('Failed'))
    }
    const handleChangeExpiry = type => {
        if (type == 'Weekly') {
            OpenDialog(true)
            setMenu({
                type: type,
                year: expinfo.INDEX_DATE.year,
                month: expinfo.INDEX_DATE.month,
                day: expinfo.INDEX_DATE.day
            })
        }
        else if (type == 'Monthly') {
            OpenDialog(true)
            setMenu({
                type: type,
                year: expinfo.EQUITY_DATE.year,
                month: expinfo.EQUITY_DATE.month,
                day: expinfo.EQUITY_DATE.day
            })
        }
        else if (type == 'Finnifty') {
            OpenDialog(true)
            setMenu({
                type: type,
                year: expinfo.FINNIFTY_DATE.year,
                month: expinfo.FINNIFTY_DATE.month,
                day: expinfo.FINNIFTY_DATE.day
            })
        }
    }
    const getExpInfo = () => {
        axios.post(GET_EXP_DATE_ADMIN_ENDPOINT, {}, header).
            then(res => setExpinfo(res.data)).catch(e => setError('Failed to fetch users'))
    }
    React.useEffect(() => {
        
        getExpInfo()
    }, [])
    React.useEffect(() => {
        getServerInfo()
        setTimeout(() => setRepeater(prevState => prevState + 1), 2000);
    }, [repeater ])
    const handleRestart=()=>{
        axios.post(RESTART_ADMIN_ENDPOINT, {}, header).
        then(res => {getServerInfo()}).catch(e => setError('Failed to fetch users'))
    }
    return (
        <Grid container  justifyContent={'center'}
            alignContent='center'
            alignSelf={'center'}
            sx={{ display: 'flex' }}
        >
            <Grid container item justifyContent={'center'} sx={{ mb: 5 }}>
                <Typography variant='h3' align='center' >
                    Config Management

                </Typography>
            </Grid>
            <Grid container item justifyContent={'center'}
                lg={10} sm={12} md={12}
            >
                {
                    serverinfo && <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }}  size='small' aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="right" >Config</StyledTableCell>
                                    <StyledTableCell align="center" >Values</StyledTableCell>
                                    <StyledTableCell align="center" >Last Updated</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <StyledTableRow key={'status'}>
                                    <StyledTableCell align="right" component="th" scope="row">Docker Status </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">{serverinfo.docker_status.reason}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">{(new Date(serverinfo.docker_status.time)).toLocaleString()}</StyledTableCell>
                                    </StyledTableRow>
                            <StyledTableRow key={'retart'}>
                            <StyledTableCell align="right" component="th" scope="row">Restart Docker </StyledTableCell>
                            <StyledTableCell align="center" component="th" scope="row">{serverinfo.restart_command} </StyledTableCell>
                            <StyledTableCell align="center" component="th" scope="row"><Button variant='contained'
                            onClick={handleRestart}
                            > Restart Now</Button> </StyledTableCell>

                                    </StyledTableRow>

                                <StyledTableRow key={'restart'}>
                                    <StyledTableCell align="right" component="th" scope="row">Options Thread</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">{serverinfo.options_status.reason}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">{(new Date(serverinfo.options_status.time)).toLocaleString()}</StyledTableCell>

                                </StyledTableRow>
                                <StyledTableRow key={'status'}>
                                    <StyledTableCell align="right" component="th" scope="row">Future Thread Status </StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">{serverinfo.future_status.reason}</StyledTableCell>
                                    <StyledTableCell align="center" component="th" scope="row">{(new Date(serverinfo.future_status.time)).toLocaleString()}</StyledTableCell>

                                </StyledTableRow>
                                {expinfo &&
                                    <React.Fragment>
                                        <StyledTableRow key={'index'}>
                                            <StyledTableCell align="right" component="th" scope="row">Weekly Expiry </StyledTableCell>
                                            <StyledTableCell align="center" component="th" scope="row">{`${expinfo.INDEX_DATE.year}, ${expinfo.INDEX_DATE.month}, ${expinfo.INDEX_DATE.day}`}</StyledTableCell>
                                            <StyledTableCell align="center" component="th" scope="row"><Button onClick={() => handleChangeExpiry('Weekly')} variant='contained'>Change</Button></StyledTableCell>

                                        </StyledTableRow>
                                        <StyledTableRow key={'equity'}>
                                            <StyledTableCell align="right" component="th" scope="row">Monthly Expiry</StyledTableCell>
                                            <StyledTableCell align="center" component="th" scope="row">{`${expinfo.EQUITY_DATE.year}, ${expinfo.EQUITY_DATE.month}, ${expinfo.EQUITY_DATE.day}`}</StyledTableCell>
                                            <StyledTableCell align="center" component="th" scope="row"><Button onClick={() => handleChangeExpiry('Monthly')} variant='contained'>Change</Button></StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow key={'finnifty'}>
                                            <StyledTableCell align="right" component="th" scope="row">Finnity Expiry</StyledTableCell>
                                            <StyledTableCell align="center" component="th" scope="row">{`${expinfo.FINNIFTY_DATE.year}, ${expinfo.FINNIFTY_DATE.month}, ${expinfo.FINNIFTY_DATE.day}`}</StyledTableCell>
                                            <StyledTableCell align="center" component="th" scope="row"><Button onClick={() => handleChangeExpiry('Finnifty')} variant='contained'>Change</Button></StyledTableCell>
                                        </StyledTableRow>
                                        <Dialog
                                            open={dialog}
                                            onClose={() => { OpenDialog(false) }}
                                        >
                                            <DialogTitle>{`Change ${menu.type} Expiry`}</DialogTitle>
                                            <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <TextField
                                                    sx={{ mt: 3 }}
                                                    label='year'
                                                    id='year'
                                                    value={menu.year}
                                                    onChange={(e) => setMenu({ ...menu, year: e.target.value })}
                                                />
                                                <TextField
                                                    sx={{ mt: 3 }}
                                                    label='month'
                                                    id='month'
                                                    value={menu.month}
                                                    onChange={(e) => setMenu({ ...menu, month: e.target.value })}
                                                />
                                                <TextField
                                                    sx={{ mt: 3 }}
                                                    label='day'
                                                    id='day'
                                                    value={menu.day}
                                                    onChange={(e) => setMenu({ ...menu, day: e.target.value })}
                                                />
                                                {errors && errors}
                                            </DialogContent>
                                            <DialogActions>
                                                <Button
                                                    onClick={changeExpiry}
                                                >
                                                    Change
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </React.Fragment>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </Grid>

        </Grid>
    )
}