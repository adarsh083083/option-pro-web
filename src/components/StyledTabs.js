import { Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import { theme } from '../commons/theme';

export const StyledTab = styled((props) => <Tab disableRipple {...props} />) ({
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '1.1em',
        fontFamily:'Roboto',
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: theme.palette.textColor,
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }
);

export const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        // justifyContent: 'center',
        marginLeft: '1em',
        backgroundColor: 'transparent',
        height: '.4rem',
        borderRadius: '1rem'
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        borderRadius: '1rem',
        width: '100%',
        backgroundColor: theme.palette.accent,
    },
});