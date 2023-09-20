import DoneIcon from '@mui/icons-material/Done';
import { DateTimePicker, LocalizationProvider } from "@mui/lab"
import { Button, ButtonGroup, Chip, Grid, IconButton, Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid"
import axios from "axios"
import React from "react"
import { useSelector } from "react-redux"
import { ALL_USERS_ENDPOINT, DEGRADE_ADMIN_ENDPOINT, DEGRADE_ENDPOINT, UPGRADE_ADMIN_ENDPOINT, UPGRADE_ENDPOINT } from "../commons/constants"
import { useTheme } from '@mui/material/styles';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const toIsoString = (date) => {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
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
  

export const UserManagement = () => {
    const theme = useTheme()
    const token = useSelector(state => state.login.user_token)
    const header = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
    const [users, setUsers] = React.useState(false)
    const [errors, setError] = React.useState(false)
    const getUsers = () => {
        axios.post(ALL_USERS_ENDPOINT, {}, header).then(res => setUsers(res.data)).catch(e => setError('Failed to fetch users'))
    }
    React.useEffect(() => {
        getUsers()
    }, [])
    const handleUpgrade = (row) => {
        axios.post(`${UPGRADE_ENDPOINT}${row.id}`, {}, header).then(res => getUsers()).catch(e => setError('Failed to approve users'))
        getUsers()
    }
    const handleUpgradeAdmin = (row) => {
        axios.post(`${UPGRADE_ADMIN_ENDPOINT}${row.id}`, {}, header).then(res => getUsers()).catch(e => setError('Failed to make admin'))
        getUsers()
    }
    const handleRevoke = (row) => {
        axios.post(`${DEGRADE_ENDPOINT}${row.id}`, {}, header).then(res => getUsers()).catch(e => setError('Failed to approve users'))
        getUsers()
    }
    const handleRevokeAdmin = (row) => {
        axios.post(`${DEGRADE_ADMIN_ENDPOINT}${row.id}`, {}, header).then(res => getUsers()).catch(e => setError('Failed to make admin'))
        getUsers()
    }
    const handleChange = (ate) => {

    }
    const rows = users ? users.map((k, v) => (
        {
            "id": k.id,
            "email": k.username,
            "name": k.name,
            "scopes": JSON.parse(k.scopes.replaceAll("'", '"').replaceAll("options:", "")),
            "is_active": k.is_active,
            "renew": k.renewal,
            "phone": k.phone,
        }
    )) : []
    const columns = [
        {
            field: 'name', headerName: 'Name',
            flex: 1,
            headerAlign: 'center', headerClassName: "super-app-theme--header"
        },
        {
            field: 'email', headerName: 'Email',
            flex: 1,
            headerAlign: 'center', headerClassName: "super-app-theme--header"
        },
        {
            field: 'phone', headerName: 'Phone',
            flex: 1,
            headerAlign: 'center', headerClassName: "super-app-theme--header"
        },
        {
            field: 'scopes', headerName: 'Scope',
            flex: 1,
            headerAlign: 'center', headerClassName: "super-app-theme--header",
            renderCell: (params) => (
                <Stack direction="row" spacing={1}>
                    {params.row.scopes.map(k => (
                        <Chip label={k}
                        // component="a" href="#basic-chip" clickable 
                        />
                    ))}
                </Stack>
            )
        },
        {
            field: 'is_active', headerName: 'Status',
            flex: 1,
            headerAlign: 'center', headerClassName: "super-app-theme--header",
            renderCell: (params) => (
                <div>
                    {
                        params.row.is_active ? <Button variant="contained" color="error" size='small' onClick={() => { handleRevoke(params.row) }}>Revoke</Button> :
                            <Button variant="contained" color="secondary" size='small' onClick={() => { handleUpgrade(params.row) }}>Approve</Button>
                    }
                </div>
            )
        },
        {
            field: 'id', headerName: 'Admin Privilege',
            flex: 1,
            headerAlign: 'center', headerClassName: "super-app-theme--header",
            renderCell: (params) => (
                <div>
                    {
                        params.row.scopes.includes('admin') ? <Button variant="contained" color="error" size='small' onClick={() => { handleRevokeAdmin(params.row) }}>Revoke</Button> :
                            <Button variant="contained" color="secondary" size='small' onClick={() => { handleUpgradeAdmin(params.row) }}>Add Admin</Button>
                    }
                </div>
            )
        },
        {
            field: 'renew', headerName: 'Renewal Date',
            flex: 1,
            headerAlign: 'center', headerClassName: "super-app-theme--header",
            renderCell: (params) => 
                {
                    const dt = params.row.renew ? new Date(params.row.renew)  : new Date
                    // console.log(params.row.renew, dt)
                    return(
                        <div style={{ display: 'flex', direction: 'row' }}>
                    <ButtonGroup>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DateTimePicker
                            // label="Date&Time picker"
                            value={dt }
                            // onChange={handleChange}
                            renderInput={(params) => <TextField variant="standard" {...params} />}

                        />
                        <IconButton>
                            <DoneIcon />
                        </IconButton>
                    </LocalizationProvider>
                    </ButtonGroup>
                </div>
            )}
        },

    ]
    function CustomToolbar() {
        return (
            <GridToolbarContainer >
                <ButtonGroup>

                    <GridToolbarColumnsButton variant='contained' />
                    <GridToolbarFilterButton variant='contained' />
                    <GridToolbarDensitySelector variant='contained' />
                    <GridToolbarExport variant='contained' />
                    <Button
                        variant='contained'
                        // color='error'
                        size='small'
                        onClick={getUsers}
                    >Refresh</Button>
                    <Button variant='text'>
                        {errors}
                    </Button>
                </ButtonGroup>
            </GridToolbarContainer>
        )
    }
    return (
        <Grid container justifyContent={'center'}
            alignContent='center'
            sx={{ display: 'flex' }}
        >
            <Grid container item justifyContent={'center'} sx={{ mb: 5 }}>
                <Typography variant='h3' align='center' >
                    User Management

                </Typography>
            </Grid>
            <Grid container item justifyContent={'center'}
                lg={10}
              
            >
                <Box
                    sx={{
                        height: 750,
                        flex: 1,
                        width: '100%',
                        '& .super-app-theme--header': {
                            backgroundColor: theme.palette.accent,
                            color: theme.palette.common.black,
                            fontFamily: 'Roboto',
                            fontWeight: 'bold'
                        },
                    }}
                // component={Paper}
                >
                    {rows.length > 0 && <DataGrid
                        sx={{ w: '100%' }}

                        components={{
                            Toolbar: CustomToolbar
                        }}
                        rowHeight={25}
                        rows={rows}
                        columns={columns}
                        // pageSize={5}
                        // rowsPerPageOptions={[20]}
                        // checkboxSelection
                        // hideFooterPagination
                        // hideFooter
                        density='comfortable'
                    />}
                </Box>
            </Grid>
            
        </Grid>
    )
}