import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { setOptionCurrentSymbol } from '../redux/options'

import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import Label from '@mui/icons-material/Label';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useDispatch, useSelector } from 'react-redux';
import { ButtonBase } from '@mui/material';
import { logout } from '../redux/login';
import { cleanUpData } from '../redux/tableData';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontFamily: 'Roboto',
    [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: 'var(--tree-view-color)',
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

function StyledTreeItem(props) {

    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelInfo,
        labelText,
        onC,
        ...other
    } = props;

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                    <ButtonBase onClick={onC}>
                        <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
                        <Typography
                            fontFamily='Roboto'
                            variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                            {labelText}
                        </Typography>
                        <Typography variant="caption" color="inherit"
                            fontFamily='Roboto'
                        >
                            {labelInfo}
                        </Typography>
                    </ButtonBase>
                </Box>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};

export default function DrawerTreeView() {
    const symbols = useSelector(state => state.options.symbols)
    const dispatch = useDispatch()
    // console.log(symbols, 'drawer')
    return (
        <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flex: 1 }}>

                <TreeView
                    aria-label="gmail"
                    defaultExpanded={['1']}
                    defaultCollapseIcon={<ArrowDropDownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    defaultEndIcon={<div style={{ width: 24 }} />}
                    sx={{
                        height: 264,
                        flexGrow: 1,
                        maxWidth: 400,
                        overflowY: 'auto',
                        height: '100%',
                        flex: 1
                    }}

                >
                    <StyledTreeItem nodeId="1" labelText="Options" labelIcon={Inventory2Icon} >
                        {
                            symbols && symbols.map((k, v) => (

                                <StyledTreeItem nodeId={`${v}+1`} labelText={k} onC={() => {
                                    dispatch(setOptionCurrentSymbol(k))
                                    dispatch(cleanUpData())
                                }

                                } />
                            ))
                        }
                    </StyledTreeItem>


                </TreeView>
            </div>
            <div style={{ justifyContent: 'flex-end' }}>

                <TreeView
                    aria-label="gmail"
                    defaultExpanded={['1']}
                    defaultCollapseIcon={<ArrowDropDownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    defaultEndIcon={<div style={{ width: 24 }} />}
                    sx={{
                        height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto',
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
                    }}
                >

                    <StyledTreeItem nodeId="1" labelText="Logout" onC={() => dispatch(logout())} ></StyledTreeItem>
                    <StyledTreeItem nodeId="1" labelText="Guide"  ></StyledTreeItem>
                    <StyledTreeItem nodeId="1" labelText="About Us" ></StyledTreeItem>
                    <StyledTreeItem nodeId="1" labelText="Terms and Conditions" ></StyledTreeItem>
                    <StyledTreeItem nodeId="1" labelText="About Us" ></StyledTreeItem>

                </TreeView>
            </div>
        </div>
    );
}
