import TableRowsIcon from '@mui/icons-material/TableRows';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { styled, Switch } from '@mui/material';


export const ChartSwitch = styled(Switch)(({ theme }) => ({
  width: 70,
  height: 42,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(3px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(30px)',
      '& .MuiSwitch-thumb:before': {
        padding: 3,
        color: theme.palette.secondary.main,
        // backgroundColor: theme.palette.secondary.main,
        // backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><text x='0' y='0' fill='${theme.palette.secondary.main}' font-size='10'>5m</text></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : '#001e3c',
    width: 40,
    height: 40,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '90%',
      height: '90%',
      left: 0,
      top: 0,
      padding: 10,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : '#aab4be',
      // backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><text x='0' y='0' fill='${theme.palette.secondary.main}' font-size='5'>15m</text></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : '#aab4be',
    borderRadius: 20 / 2,
  },
}));