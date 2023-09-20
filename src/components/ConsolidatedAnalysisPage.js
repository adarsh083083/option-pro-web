import { Button, Grid } from "@mui/material"
import axios from "axios"
import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setOptionCurrentSymbol } from '../redux/options'
import { CONSOLIDATED_DATA_ENDPOINT } from "../commons/constants"
import CustomizedBreadcrumbs from "./Breadcrumb"

import InfoIcon from '@mui/icons-material/Info';
import { useTheme } from '@mui/material/styles';
import { logout } from "../redux/login"
import { useSnackbar } from 'notistack';
import { Straddle } from "./ConsolidatedAnalysis/Straddle"
import { COVolumeAnalysis } from "./ConsolidatedAnalysis/COVolumeAnalysis"
import { Advantage } from "./ConsolidatedAnalysis/Advantage"
import { cleanUpData } from "../redux/tableData"

const ConsolidatedAnalysisPage = () => {
    const dispatch = useDispatch()
    const currentSymbol = useSelector(state => state.options.currentSymbol)
    const [ConsolidatedAnalysis, setConsolidatedAnalysis] = React.useState(false)
    // const [charts, setCharts] = React.useState(false)
    const { enqueueSnackbar } = useSnackbar();
    // const [dataNifty, setDataNifty] = React.useState(false)
    // const [symbols, setSymbols] = React.useState(false)
    // const [currentSymbol, setCurrentSymbol] = React.useState(false)
    const [repeaterOI, setRepeaterOI] = React.useState(0)
    const token = useSelector(state => state.login.user_token)
    const header = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
    console.log(currentSymbol,currentSymbol=='NIFTY')
    const handleForcedLogout =()=>{
       
            enqueueSnackbar('Session Expired.',{variant:"warning"});
      
    }


   
    
    const getConsolidatedData = () => {
        if (!currentSymbol) { return false }
        if (!((currentSymbol === 'NIFTY') || (currentSymbol === 'BANKNIFTY')) ) {
            dispatch(setOptionCurrentSymbol('NIFTY'))
            dispatch(cleanUpData())

             setConsolidatedAnalysis(false); 
             enqueueSnackbar('Consolidated Analysis is available only for Index.',{variant:"warning"});
            return false 
        }
        axios.post(`${CONSOLIDATED_DATA_ENDPOINT}${currentSymbol}`, {}, header)
            .then(res => setConsolidatedAnalysis(res.data))
            .catch(e => { 
                if (e.response){
                    if(e.response.status ==401){
                        handleForcedLogout()
                        dispatch(logout())
                    }
                }

             })

    }

   
    React.useEffect(() => {
    
        getConsolidatedData()
        setTimeout(() => setRepeaterOI(prevState => prevState + 1), 60000);
    }, [currentSymbol
        , repeaterOI
    ])
    // React.useEffect(() => {
    //     getData()
    //     setTimeout(() => setRepeater(prevState => prevState + 1), 10000);
    // }, [currentSymbol
    //     , repeater
    // ])
    // React.useEffect(() => {
    //     callData()
    //     // callPeriodically()
    // }, [])
    // console.log(currentInterval)
    return (
       
        <Grid container lg={12} md={12} sm={12} direction="column">
            <Grid container item
                justifyContent={'center'}
                
                alignItems='center'
                direction={'row'}
                sx={{ 'flex': 1, mb: '1rem' }}
            >   <Grid container lg={7}>

                    <CustomizedBreadcrumbs symbol={currentSymbol ? currentSymbol : ''} />
                </Grid>
            </Grid>
            <Grid container direction="column"
                justifyContent={'center'}
                alignItems='center'
            >
                {ConsolidatedAnalysis &&
                    <Grid container item
                        justifyContent={'center'}
                        alignItems='center'
                        direction={'column'}
                    >   
                        <Straddle data={ConsolidatedAnalysis} />
                        <COVolumeAnalysis data={ConsolidatedAnalysis} />
                        <Advantage data={ConsolidatedAnalysis} />
                        
                    </Grid>
                }



       
                <Button
                    variant="contained"
                    disableElevation
                    disableFocusRipple
                    disableRipple
                    disableTouchRipple
                    disabled
                    color="warning"
                    style={{
                        textTransform: 'none', width: `${1100 / 12}%`,
                        marginTop: '1rem'
                        // color:theme.palette.warning.main
                    }}
                    startIcon={<InfoIcon />}
                >
                    {/* <strong> */}
                    Disclaimer:&nbsp;
                    {/* </strong> &nbsp; */}
                    This website is for educational purpose only.This website owner isnt SEBI registered and not responsible for any of your profit/loss with this website's views. Please consult your financial advisor and do your own research before taking any decision.

                </Button>
            </Grid>
        </Grid>
        // </Box>
    )
}

export default ConsolidatedAnalysisPage

