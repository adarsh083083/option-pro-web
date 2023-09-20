import { createTheme } from '@mui/material/styles';

export const lighttheme = createTheme({
    palette: {
        type: 'light',
        mode: 'light',
        text:{
            primary:"#000000",
            secondary:"red"
        },
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#562456',
        },
        background: {
            default: '#f2f2f2',
            paper: '#ffffff',
        },
        appbar:'#011e3c',      //"#4d5f66",
        tableTextColor:'#050000',
        accent:'#ffffff',//'#33C2FF',
        accent2:'#CFCECE',//'#33C2FF',
        tableHighlightsGrey:"#D5DBE4",
        tableHighlightsBlue:"#D9E2F2",
        backgroundShade:'#38454a',
        textHighlightColor:'#fff',
        borderColorFocus:"#ffffff",
        // accent2:'#33C2FF90',
       // textColor:'#6d7080',
        // tableFontColor:"#595454",
        chartSplitColorTriad:{
            // 1:"#fee250",
            1:"#fee250",
            2:"#52c4ff",
            3:"#ff526e",
            4:"#52c4aa",
            5:"#52aa"
        }

    },
    typography: {
        fontFamily:['Roboto', 'sans-serif'],
    },
});
export const theme = createTheme({
    palette: {
        type: 'dark',
        mode: 'dark',
        primary: {
            main: '#151521',
            default: '#1e1e2d',
        },
        secondary: {
            main: '#33C2FF',
            default: '#1e1e2d',
        },
        background: {
           default: '#ffffff',
            default: '#1e1e2d',
            paper: '#18182b',
        },
        appbar:"#1E1E2D",
        accent:'rgb(51, 194, 255)',//'#33C2FF',
        accent2:'rgb(51, 194, 255,0.8)',//'#33C2FF',
        backgroundShade:'rgba(0,0,0,0.3)',
        tableHighlightsGrey:"#D5DBE4",
        tableHighlightsBlue:"#D9E2F2",
        textHighlightColor:'#fff',
        // accent2:'#33C2FF90',
        textColor:'#fff',
        chartSplitColorTriad:{
            1:"#fee250",
            2:"#52c4ff",
            3:"#ff526e",
            4:"#52c4aa",
            5:"#52aa"
        }

    },
    typography: {
        fontFamily:['Roboto', 'sans-serif'],
    
    },
});
// export const DynamicTheme =(mode,secondary)=> createTheme({
//     palette: {
//         type: mode,
//         mode: mode,
//         primary: {
//             main: '#151521',
//         },
//         secondary: {
//             main: secondary,
//         },
//         background: {
//             default: '#151521',
//             paper: '#18182b',
//         },
//         appbar:"#1E1E2D",
//         accent: secondary,
//         textColor:'#fff',

//     },
//     typography: {
//         fontFamily:['Roboto', 'sans-serif']
//     },
// });



// shadows: [
//     "none",
//     "0px 2px 1px -1px rgba(54,153,255,0.2),0px 1px 1px 0px rgba(54,153,255,0.14),0px 1px 3px 0px rgba(54,153,255,0.12)",
//     "0px 3px 1px -2px rgba(54,153,255,0.2),0px 2px 2px 0px rgba(54,153,255,0.14),0px 1px 5px 0px rgba(54,153,255,0.12)",
//     "0px 3px 3px -2px rgba(54,153,255,0.2),0px 3px 4px 0px rgba(54,153,255,0.14),0px 1px 8px 0px rgba(54,153,255,0.12)",
//     "0px 2px 4px -1px rgba(54,153,255,0.2),0px 4px 5px 0px rgba(54,153,255,0.14),0px 1px 10px 0px rgba(54,153,255,0.12)",
//     "0px 3px 5px -1px rgba(54,153,255,0.2),0px 5px 8px 0px rgba(54,153,255,0.14),0px 1px 14px 0px rgba(54,153,255,0.12)",
//     "0px 3px 5px -1px rgba(54,153,255,0.2),0px 6px 10px 0px rgba(54,153,255,0.14),0px 1px 18px 0px rgba(54,153,255,0.12)",
//     "0px 4px 5px -2px rgba(54,153,255,0.2),0px 7px 10px 1px rgba(54,153,255,0.14),0px 2px 16px 1px rgba(54,153,255,0.12)",
//     "0px 5px 5px -3px rgba(54,153,255,0.2),0px 8px 10px 1px rgba(54,153,255,0.14),0px 3px 14px 2px rgba(54,153,255,0.12)",
//     "0px 5px 6px -3px rgba(54,153,255,0.2),0px 9px 12px 1px rgba(54,153,255,0.14),0px 3px 16px 2px rgba(54,153,255,0.12)",
//     "0px 6px 6px -3px rgba(54,153,255,0.2),0px 10px 14px 1px rgba(54,153,255,0.14),0px 4px 18px 3px rgba(54,153,255,0.12)",
//     "0px 6px 7px -4px rgba(54,153,255,0.2),0px 11px 15px 1px rgba(54,153,255,0.14),0px 4px 20px 3px rgba(54,153,255,0.12)",
//     "0px 7px 8px -4px rgba(54,153,255,0.2),0px 12px 17px 2px rgba(54,153,255,0.14),0px 5px 22px 4px rgba(54,153,255,0.12)",
//     "0px 7px 8px -4px rgba(54,153,255,0.2),0px 13px 19px 2px rgba(54,153,255,0.14),0px 5px 24px 4px rgba(54,153,255,0.12)",
//     "0px 7px 9px -4px rgba(54,153,255,0.2),0px 14px 21px 2px rgba(54,153,255,0.14),0px 5px 26px 4px rgba(54,153,255,0.12)",
//     "0px 8px 9px -5px rgba(54,153,255,0.2),0px 15px 22px 2px rgba(54,153,255,0.14),0px 6px 28px 5px rgba(54,153,255,0.12)",
//     "0px 8px 10px -5px rgba(54,153,255,0.2),0px 16px 24px 2px rgba(54,153,255,0.14),0px 6px 30px 5px rgba(54,153,255,0.12)",
//     "0px 8px 11px -5px rgba(54,153,255,0.2),0px 17px 26px 2px rgba(54,153,255,0.14),0px 6px 32px 5px rgba(54,153,255,0.12)",
//     "0px 9px 11px -5px rgba(54,153,255,0.2),0px 18px 28px 2px rgba(54,153,255,0.14),0px 7px 34px 6px rgba(54,153,255,0.12)",
//     "0px 9px 12px -6px rgba(54,153,255,0.2),0px 19px 29px 2px rgba(54,153,255,0.14),0px 7px 36px 6px rgba(54,153,255,0.12)",
//     "0px 10px 13px -6px rgba(54,153,255,0.2),0px 20px 31px 3px rgba(54,153,255,0.14),0px 8px 38px 7px rgba(54,153,255,0.12)",
//     "0px 10px 13px -6px rgba(54,153,255,0.2),0px 21px 33px 3px rgba(54,153,255,0.14),0px 8px 40px 7px rgba(54,153,255,0.12)",
//     "0px 10px 14px -6px rgba(54,153,255,0.2),0px 22px 35px 3px rgba(54,153,255,0.14),0px 8px 42px 7px rgba(54,153,255,0.12)",
//     "0px 11px 14px -7px rgba(54,153,255,0.2),0px 23px 36px 3px rgba(54,153,255,0.14),0px 9px 44px 8px rgba(54,153,255,0.12)",
//     "0px 11px 15px -7px rgba(54,153,255,0.2),0px 24px 38px 3px rgba(54,153,255,0.14),0px 9px 46px 8px rgba(54,153,255,0.12)",
// ]

// dark color
// tableText:'#000000',
//borderColorFocus:"#ffffff",