import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useTheme } from '@mui/material/styles';
import { useSelector } from "react-redux";



export const VolumeTableChart = () => {
    const theme = useTheme()
    const data = useSelector((state) => state.table.voldata)
    const rowData = data?data.map(k=>({...k[1],'time':`${k[1]['hour']}:${k[1]['min']}`})):[]
    const filterVal=(data1)=>{
        let d={}
        d.time = data1.time
        if(data1.difference != 0) {d.difference = data1.difference}
        if(data1.avg_diff != 0) {d.avg_diff = data1.avg_diff}
        if(data1.wva != 0) {d.wva = data1.wva}
        return d
    }
    const modData = rowData.map(k=>filterVal(k))
    // console.log(modData)
    return (
        <ResponsiveContainer width="80%" height="100%" aspect={2}>
            {/* <Typography>Helloooooo</Typography> */}
            <LineChart
                width={400}
                height={300}
                data={modData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="2"/> */}
                <XAxis dataKey="time" />
                <YAxis 
                // tickCount={8}
                 /> 
                <Tooltip />
                <Legend />
                <Line  dataKey="difference" stroke={theme.palette.chartSplitColorTriad["1"]}  />
                <Line type="monotone" dataKey="avg_diff" stroke={theme.palette.chartSplitColorTriad["2"]} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="wva" stroke={theme.palette.chartSplitColorTriad["3"]} />
            </LineChart>
        </ResponsiveContainer>
    )
}