import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Menu, MenuItem, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setOptionCurrentSymbol } from '../redux/options';
import SensorsIcon from '@mui/icons-material/Sensors';
import { cleanUpData } from '../redux/tableData';
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


export default function CustomizedBreadcrumbs({symbol}) {
  const symbols = useSelector(state => state.options.symbols)
  const lastUpdated = useSelector(state => state.options.lastUpdated)
  const currentSymbol = useSelector(state => state.options.currentSymbol)

  const [menu,OpenMenu] = React.useState(false)
    const dispatch = useDispatch()
    function handleClick(event) {
    OpenMenu(event.currentTarget);
    // event.preventDefault();
  }
    const ldate = new Date(lastUpdated)
    const current = new Date()
    const live = (current - ldate)/1000 < 70
    return (
    <div role="presentation" 
    // onClick={handleClick}
    style={{marginBottom:20, flex:1,flexDirection:'row', display:'flex'}}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Home"
          icon={<HomeIcon fontSize="small" color='secondary' />}
        />
        <StyledBreadcrumb component="a" href="#" label="Options" />
        <StyledBreadcrumb
          label={symbol}
          deleteIcon={<ExpandMoreIcon />}
          onDelete={handleClick}
        />
      </Breadcrumbs>
      <Menu
      anchorEl={menu}
      open={menu}
      onClose={()=>OpenMenu(false)}
      // anchorOrigin={{
      //   vertical: 'top',
      //   horizontal: 'left',
      // }}
      // transformOrigin={{
      //   vertical: 'top',
      //   horizontal: 'left',
      // }}
      >
        {
        
        symbols && symbols.map(k=><MenuItem onClick={()=>{dispatch(setOptionCurrentSymbol(k));dispatch(cleanUpData());OpenMenu(false)}}>{k}</MenuItem>)
        }
      </Menu>
      {currentSymbol=='DASHBOARD' && 
      <Tooltip title={`Last Updated : `+ ldate.toString()}>
        <SensorsIcon color={live?'success':'error'} sx={{ml:5}}/>
      </Tooltip>
}
    </div>
  );
}