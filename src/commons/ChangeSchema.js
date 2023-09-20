import { Button, ButtonGroup, Card, CardContent, Dialog, Grid, IconButton, Tooltip, Typography } from "@mui/material"
import { useSelector, useDispatch } from "react-redux";
import { ALL_PAGES, DEFAULT_PAGE_SCHEMA } from "./constants";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddTableToLayout, hidePageSetup, moveDown, moveUp, RemoveTableToLayout, restoreToDefault } from "../redux/pageSetup";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import RestoreIcon from '@mui/icons-material/Restore';
// import moveUp from  from "../redux/pageSetup";
export const ChangeSchema = () => {
    const dispatch = useDispatch();
    const pageSetup = useSelector((state) => state.pageSetup.schema);
    const uid = useSelector((state) => state.login.uid);
    const show = useSelector((state) => state.pageSetup.showPageSetup);
    const currentPages = pageSetup.map(k => k.code)
    const leftOut = DEFAULT_PAGE_SCHEMA.filter(k => !currentPages.includes(k.code))
    const closeEditor = () => dispatch(hidePageSetup())


    const movePageUp = (page) => dispatch(moveUp({page:page,uid:uid}))
    const movePageDown = (page) => dispatch(moveDown({page:page,uid:uid}))
    const removePage = (page) => dispatch(RemoveTableToLayout({page:page,uid:uid}))
    const addPage = (page) => dispatch(AddTableToLayout({page:page,uid:uid}))
    const restoreSchema = () => dispatch(restoreToDefault({uid:uid}))
    // console.log(leftOut, currentPages)
    return (
        <Dialog open={show} onClose={closeEditor}
            fullWidth={true}
            maxWidth={'lg'}
        >
            <Box
                sx={{ p: 10 }}
            >

                <Grid container direction='row' lg={12} sx={{ mb: 4 }}>
                    <Typography align="center" variant="h4"> Layout Editor</Typography>
                    <Tooltip title={"Restore to default"} >

                    <IconButton onClick={restoreSchema}><RestoreIcon /></IconButton>
                    </Tooltip>
                    <IconButton onClick={closeEditor} sx={{ml:'auto'}}>
                        <CloseIcon/>
                    </IconButton>
                </Grid>
                <Grid container direction="row">
                    <Grid container item lg={6} direction='row' alignContent={'baseline'} sx={{ p: 1 }}>
                        <Typography align="center" variant="h5" sx={{ mb: 2 }}>
                            Available Tables/Chart
                        </Typography>
                        {
                            leftOut.map((k, v) => (
                                <Card variant="elevation" id={k.code}
                                    sx={{
                                        mt: 3,
                                        p: 1,
                                        height: '100px',
                                    }}
                                    component={Grid}
                                    lg={12}
                                    elevation={1}
                                >
                                    <CardContent>
                                        <Grid container direction={'row'}>
                                            <Grid container item lg={8} direction='column'>
                                                <Typography  fontWeight="bold" component="div">
                                                    {k.title}
                                                </Typography>
                                                <Typography>
                                                    Description goes here
                                                </Typography>
                                            </Grid>
                                            <Grid container item lg={4} direction='row'>

                                                <IconButton key="remove" onClick={() => addPage(k.code)}>
                                                    <AddIcon />
                                                </IconButton>

                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </Grid>
                    <Grid container item lg={6} direction='row' sx={{ p: 1 }}>
                        <Typography align="center" variant="h5" sx={{ mb: 2 }}>
                            Current Layout
                        </Typography>

                        {
                            pageSetup.map((k, v) => (
                                <Card variant="elevation" id={k.code}
                                    sx={{
                                        mt: 3,
                                        p: 1,
                                        height: '100px',
                                    }}
                                    component={Grid}
                                    lg={12}
                                    elevation={1}
                                >
                                    <CardContent>
                                        <Grid container direction={'row'}>
                                            <Grid container item lg={8} direction='column'>
                                                <Typography fontWeight="bold" component="div">
                                                    {k.title}
                                                </Typography>
                                                <Typography>
                                                    Description goes here
                                                </Typography>
                                            </Grid>
                                            <Grid container item lg={4} direction='row'>
                                                <ButtonGroup
                                                    // orientation="vertical"
                                                    aria-label="vertical contained button group"
                                                    variant="text"

                                                >
                                                    <IconButton key="up" onClick={() => movePageUp(k.code)}>
                                                        <KeyboardArrowUpIcon />
                                                    </IconButton>
                                                    <IconButton key="remove" onClick={() => removePage(k.code)}>
                                                        <CloseIcon />
                                                    </IconButton>
                                                    <IconButton key="down" onClick={() => movePageDown(k.code)}>
                                                        <KeyboardArrowDownIcon />
                                                    </IconButton>
                                                </ButtonGroup>
                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    )
}