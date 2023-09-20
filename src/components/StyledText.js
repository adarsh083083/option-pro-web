import { TextField } from "@mui/material";
import { styled } from "@mui/system";



export const StyledText = styled(TextField)(({theme})=>({
    '& .MuiInputBase-input':{
        backgroundColor: theme.palette.mode === 'light' ?  '#2b2b2b' :'#fcfcfb' ,
        borderRadius:5,
    },
    color:'black',
    '&.Mui-focused': {
        borderColor: theme.palette.accent,
    },
    '& label.Mui-focused': {
        color: theme.palette.accent,
        fontWeight:'bold'
      },
      
}))
