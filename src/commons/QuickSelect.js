import { Button, ListItemText, Menu, MenuItem } from "@mui/material"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDashboard, setDataView, setOptionCurrentSymbol } from "../redux/options"
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledTab, StyledTabs } from "../components/StyledTabs"
import { useLocation, useNavigate } from "react-router-dom"
import { Box } from "@mui/system"
import { cleanUpData } from "../redux/tableData";
import { page_routes } from "./constants";


import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export const QuickSelect = () => {
    const theme = useTheme()
    const symbols = useSelector(state => state.options.symbols)
    const currentSymbol = useSelector(state => state.options.currentSymbol)
    // const currentView = useSelector(state => state.options.currentView)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [value, setValue] = React.useState(0);


    // const [valueStock, setValueStock] = React.useState(currentSymbol);
    const [inputValue, setInputValue] = React.useState('');


    const handleClick = (event) => {
        // console.log(event, event.currentTarget)
        setAnchorEl(event.currentTarget);
    };

    const changeStockSymbol = (symbol) => {
        dispatch(setOptionCurrentSymbol(symbol))
        dispatch(cleanUpData())
    }

    const handleRouteConsolidated = (k) => {
        setAnchorEl(null);
        navigate(k)

    }
    const location = useLocation()

    let navigate = useNavigate();
    // console.log(location)
    React.useEffect(() => {
        if (currentSymbol == "DASHBOARD") { setValue("DASHBOARD") }
        else if (currentSymbol == "NIFTY") { setValue("NIFTY") }
        else if (currentSymbol == "BANKNIFTY") { setValue("BANKNIFTY") }
        else { setValue(0) }
    }, [currentSymbol])
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue == "DASHBOARD") {
            if (location.pathname != '/dashboard') {
                dispatch(cleanUpData())
                navigate('/dashboard')
                return
            }
            dispatch(setDashboard()); return
        }
        navigate('/dashboard')
        dispatch(setOptionCurrentSymbol(newValue))
        dispatch(cleanUpData())
    };
    const showconsolidatedAnalysis = () => {
        navigate('/consolidatedAnalysis')
    }
    // console.log(page_routes)
    const ITEM_HEIGHT = 120;
    const page_routes_ = page_routes.filter(k => k.title != "")
    return (
        <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}>

            <StyledTabs value={value} onChange={handleChange}
                indicatorColor={theme.palette.accent}
            >
                {
                    <StyledTab
                        value={"DASHBOARD"}
                        label='Dashboard'
                    />}
                <StyledTab value={"NIFTY"} label='NIFTY' style={{ 'textTransform': 'none' }} />
                <StyledTab value={"BANKNIFTY"} label='BANK NIFTY' style={{ 'textTransform': 'none' }} />
            </StyledTabs>
            {
                symbols &&
                <Autocomplete
                    value={currentSymbol}
                    onChange={(event, newValue) => {
                        changeStockSymbol(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-stock"
                    options={symbols}
                    sx={{
                        width: 175,
                        ml: { md: 5, xs: 0 },
                        mr: { md: 5, xs: 0 },
                        "& .MuiInputLabel-root": {
                            color: theme.palette.accent,
                        },
                        "& .MuiAutocomplete-popupIndicator": {
                            color: theme.palette.accent,
                        },
                        "& .MuiAutocomplete-clearIndicator": {
                            color: theme.palette.accent,
                        }

                    }}
                    renderInput={(params) => <TextField
                        variant="filled"
                        // color={theme.palette.accent}
                        sx={{
                            // backgroundColor:theme.palette.secondary.main,
                            backgroundColor: "transparent",
                            "& .MuiAutocomplete-input": {
                                color: "#fff",
                            }
                        }}
                        {...params} label="Symbol" />}
                />
            }
            {<Button
                variant='contained'
                onClick={handleClick}
                label={currentSymbol}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    color: "#fff",
                    backgroundColor: "transparent",
                    fontWeight: 'bold',
                    "& ::hover": {
                        backgroundColor: "transparent",
                    },
                    mr: 'auto'
                }}
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
            >
                Pages
            </Button>
            }


            <Menu open={open}
                onClose={() => setAnchorEl(false)}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                    //   width: '20ch',
                    },
                  }}
            >
                <Box
                    sx={{
                        width: { md: '25vw', xs: '70vw' }, flex: 1, flexDirection: 'row', display: 'flex',

                    }}
                >

                    <Box sx={{ width: '100%' }}>


                        {
                            page_routes_.map((k, v) => (
                                <MenuItem>
                                    <ListItemText inset onClick={() => {
                                        if (!k.individualPage && currentSymbol == "DASHBOARD") {
                                            dispatch(setOptionCurrentSymbol('NIFTY'))
                                            dispatch(cleanUpData())
                                        }
                                        handleRouteConsolidated(`/${k.code}`)
                                    }}>
                                        {k.title}
                                    </ListItemText>
                                </MenuItem>
                            ))
                        }
                    </Box>

                </Box>


            </Menu>



        </Box>
    )
}