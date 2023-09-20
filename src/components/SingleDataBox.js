import { Box, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles';

export const DataBox = ({ title, data }) => {
    const theme = useTheme()
    return (
        <Box
            style={{ backgroundColor: theme.palette.appbar }}
            sx={{ p: 5, borderRadius: 3, mr: 1,ml:1 }}
        >
            <Box>
                <Typography
                // style={{fontWeight:'bold'}}
                >
                    {title}
                </Typography>
            </Box>
            <Box>
                <Typography
                    style={{ fontWeight: 'bold' }}
                >
                    {data}
                </Typography>
            </Box>
        </Box>
    )
}
