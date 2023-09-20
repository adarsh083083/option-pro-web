import { Box, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles';
export const DualDataBox = ({ title, data1, data2, data1title, data2title }) => {
    const theme = useTheme()
    return (
        <Box
            style={{ backgroundColor: theme.palette.appbar }}
            sx={{ pt: 1, borderRadius: 3, mr: 1,ml:1 }}
        >
            <Box sx={{ pl: 3, pr: 5, pt: 1 }}>
                <Typography
                    style={{ textTransform: 'uppercase' }}
                >
                    {title}
                </Typography>
            </Box>
            <Box
                sx={{ pl: 3, pr: 5, pt: 1, display: 'flex', flexDirection: 'row' }}
            >
                <Typography sx={{ mr: data1title?2:0,color:'lightgray' }}>
                    {data1title}
                </Typography>
                <Typography
                    style={{ fontWeight: 'bold' }}
                >
                    {data1}
                </Typography>
            </Box>
            {/* <Divider style={{ width: '100%', height: '1px', backgroundColor: "rgba(254, 249, 239,10%)" }} sx={{ pl: 2, pr: 2 }} /> */}
            <Box
                sx={{ pl: 3, pr: 5, pt: 1, display: 'flex', flexDirection: 'row' }}
            //  sx={{borderTop:'1px solid '}}
            >
                <Typography sx={{ mr: data2title?2:0,color:'lightgray' }}>
                    {data2title}
                </Typography>
                <Typography
                    style={{ fontWeight: 'bold' }}
                >
                    {data2}
                </Typography>
            </Box>
        </Box>
    )
}