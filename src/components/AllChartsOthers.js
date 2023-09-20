import { Grid, Typography } from "@mui/material"
import { Area, Bar, BarChart, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useTheme } from '@mui/material/styles';
import { useSelector } from "react-redux";

export const AllChartsOthers = () => {
    const data = useSelector((state) => state.table.data)
    const symbol = useSelector((state) => state.options.currentSymbol)
    const theme = useTheme()
    console.log(data)
    if (symbol == "DASHBOARD") {
        return (null)
    }
    const ce_pe_oi = data ? data.option.result.data.map((k, v) => ({ ce_oi: Number(k.ce_oi), pe_oi: Number(k.pe_oi), strike: Number(k.ce_strike) }))  : []
    const ce_pe_vol = data ? data.option.result.data.map((k, v) => ({ ce_volume: Number(k.ce_volume), pe_volume: Number(k.pe_volume), strike: Number(k.ce_strike) }))  : []
    const ce_pe_oi_change = data ? data.option.result.data.map((k, v) => ({ ce_oi_change: Number(k.ce_oi_change), pe_oi_change: Number(k.pe_oi_change), strike: Number(k.ce_strike) }))  : []
    const ce_pe_vol_oi_change = data ? data.option.result.data.map((k, v) => ({ ce_oi: Number(k.ce_oi), pe_oi: Number(k.pe_oi), ce_oi_change: Number(k.ce_oi_change), pe_oi_change: Number(k.pe_oi_change), strike: Number(k.ce_strike) }))  : []
    const ce_pe_oi_analysis = data ? data.option.result.data.map((k, v) => ({ ce_oi: Number(k.ce_oi), pe_oi: Number(k.pe_oi), strike: Number(k.ce_strike), pcr: Number(k.pcr) }))  : []
    const ce_pe_oi_price = data ? data.option.result.data.map((k, v) => ({ ce_oi: Number(k.ce_oi), pe_oi: Number(k.pe_oi), strike: Number(k.ce_strike), pe_ltp: Number(k.pe_ltp), ce_ltp: Number(k.ce_ltp) }))  : []
    const ce_pe_vol_oi = data ? data.option.result.data.map((k, v) => ({ ce_oi: Number(k.ce_oi), pe_oi: Number(k.pe_oi), ce_volume: Number(k.ce_volume), pe_volume: Number(k.pe_volume), strike: Number(k.ce_strike) }))  : []


    return (
        <Grid container direction="column">
            <Grid container item>
                <Grid container direction="row">
                    <Grid container item lg={12}
                        md={12}
                        sm={12}
                        justifyContent="center"
                        sx={{
                            "& .recharts-tooltip-label": {
                                color: "#2452db"
                            },
                            mt: 10
                        }}>
                        <Typography align="center" fontWeight={"bold"} >Call and Put OI</Typography>
                        <ResponsiveContainer width="100%" height="100%" aspect={3}>
                            <BarChart
                                width={400}
                                height={300}
                                data={ce_pe_oi}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="2"/> */}
                                <XAxis dataKey="strike" />
                                <YAxis
                                    type="number"

                                // tickCount={8}
                                />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="ce_oi" fill={theme.palette.chartSplitColorTriad["1"]} />
                                <Bar dataKey="pe_oi" fill={theme.palette.chartSplitColorTriad["2"]} />
                                {/* <Line dataKey="difference" stroke={theme.palette.chartSplitColorTriad["1"]} />
                                <Line type="monotone" dataKey="avg_diff" stroke={theme.palette.chartSplitColorTriad["2"]} activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="wva" stroke={theme.palette.chartSplitColorTriad["3"]} /> */}
                            </BarChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <Grid container direction="row">
                    <Grid container item lg={12}
                        md={12}
                        sm={12}
                        justifyContent="center"
                        sx={{
                            "& .recharts-tooltip-label": {
                                color: "#2452db"
                            },
                            mt: 10
                        }}>
                        <Typography align="center" fontWeight={"bold"} >Call and Put Volume</Typography>
                        <ResponsiveContainer width="100%" height="100%" aspect={3}>
                            <BarChart
                                width={400}
                                height={300}
                                data={ce_pe_vol}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="2"/> */}
                                <XAxis dataKey="strike" />
                                <YAxis
                                    type="number"

                                // tickCount={8}
                                />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="ce_volume" fill={theme.palette.chartSplitColorTriad["1"]} />
                                <Bar dataKey="pe_volume" fill={theme.palette.chartSplitColorTriad["2"]} />
                                {/* <Line dataKey="difference" stroke={theme.palette.chartSplitColorTriad["1"]} />
                                <Line type="monotone" dataKey="avg_diff" stroke={theme.palette.chartSplitColorTriad["2"]} activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="wva" stroke={theme.palette.chartSplitColorTriad["3"]} /> */}
                            </BarChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <Grid container direction="row">
                    <Grid container item lg={12}
                        md={12}
                        sm={12}
                        justifyContent="center"
                        sx={{
                            "& .recharts-tooltip-label": {
                                color: "#2452db"
                            },
                            mt: 10
                        }}>
                        <Typography align="center" fontWeight={"bold"} >Call and Put OI Change</Typography>
                        <ResponsiveContainer width="100%" height="100%" aspect={3}>
                            <BarChart
                                width={400}
                                height={300}
                                data={ce_pe_oi_change}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="2"/> */}
                                <XAxis dataKey="strike" />
                                <YAxis
                                    type="number"

                                // tickCount={8}
                                />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="ce_oi_change" fill={theme.palette.chartSplitColorTriad["1"]} />
                                <Bar dataKey="pe_oi_change" fill={theme.palette.chartSplitColorTriad["2"]} />
                                {/* <Line dataKey="difference" stroke={theme.palette.chartSplitColorTriad["1"]} />
                                <Line type="monotone" dataKey="avg_diff" stroke={theme.palette.chartSplitColorTriad["2"]} activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="wva" stroke={theme.palette.chartSplitColorTriad["3"]} /> */}
                            </BarChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <Grid container direction="row">
                    <Grid container item lg={12}
                        md={12}
                        sm={12}
                        justifyContent="center"
                        sx={{
                            "& .recharts-tooltip-label": {
                                color: "#2452db"
                            },
                            mt: 10
                        }}>
                        <Typography align="center" fontWeight={"bold"} >Call and Put OI</Typography>
                        <ResponsiveContainer width="100%" height="100%" aspect={3}>
                            <ComposedChart
                                width={400}
                                height={300}
                                data={ce_pe_oi_analysis}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="2"/> */}
                                <XAxis dataKey="strike" />


                                <YAxis yAxisId="left" type="number" />
                                <YAxis yAxisId="right" type="number" orientation="right" />
                                <Tooltip />
                                <Legend />
                                <Area yAxisId="left" dataKey="ce_oi" fill={theme.palette.chartSplitColorTriad["1"]} />
                                <Area yAxisId="left" dataKey="pe_oi" fill={theme.palette.chartSplitColorTriad["2"]} />
                                <Line yAxisId="right" strokeWidth={2} type="monotone" dataKey="pcr" stroke={theme.palette.chartSplitColorTriad["3"]} activeDot={{ r: 8 }} />
                                {/* <Bar dataKey="pe_oi" fill={theme.palette.chartSplitColorTriad["2"]} /> */}
                                {/* <Line dataKey="difference" stroke={theme.palette.chartSplitColorTriad["1"]} />
                                <Line type="monotone" dataKey="wva" stroke={theme.palette.chartSplitColorTriad["3"]} /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <Grid container direction="row">
                    <Grid container item lg={12}
                        md={12}
                        sm={12}
                        justifyContent="center"
                        sx={{
                            "& .recharts-tooltip-label": {
                                color: "#2452db"
                            },
                            mt: 10
                        }}>
                        <Typography align="center" fontWeight={"bold"} >OI vs Price Analysis</Typography>
                        <ResponsiveContainer width="100%" height="100%" aspect={3}>
                            <ComposedChart
                                width={400}
                                height={300}
                                data={ce_pe_oi_price}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="2"/> */}
                                <XAxis dataKey="strike" />
                                <YAxis yAxisId="left" type="number" />
                                <YAxis yAxisId="right" type="number" orientation="right" />

                                <Tooltip />
                                <Legend />
                                <Bar yAxisId="left" dataKey="ce_oi" fill={theme.palette.chartSplitColorTriad["1"]} />
                                <Bar yAxisId="left" dataKey="pe_oi" fill={theme.palette.chartSplitColorTriad["2"]} />
                                <Line strokeWidth={2} yAxisId="right" type="monotone" dataKey="ce_ltp" stroke={theme.palette.chartSplitColorTriad["3"]} activeDot={{ r: 8 }} />
                                <Line strokeWidth={2} yAxisId="right" type="monotone" dataKey="pe_ltp" stroke={theme.palette.chartSplitColorTriad["2"]} activeDot={{ r: 8 }} />
                                {/* <Line dataKey="difference" stroke={theme.palette.chartSplitColorTriad["1"]} />
                                <Line type="monotone" dataKey="wva" stroke={theme.palette.chartSplitColorTriad["3"]} /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <Grid container direction="row">
                    <Grid container item lg={12}
                        md={12}
                        sm={12}
                        justifyContent="center"
                        sx={{
                            "& .recharts-tooltip-label": {
                                color: "#2452db"
                            },
                            mt: 10
                        }}>
                        <Typography align="center" fontWeight={"bold"} >Call and Put OI</Typography>
                        <ResponsiveContainer width="100%" height="100%" aspect={3}>
                            <ComposedChart
                                width={400}
                                height={300}
                                data={ce_pe_vol_oi}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="2"/> */}
                                <XAxis dataKey="strike" />
                                <YAxis yAxisId="left" type="number" />
                                <YAxis yAxisId="right" type="number" orientation="right" />

                                <Tooltip />
                                <Legend />
                                <Bar yAxisId="left" dataKey="ce_oi" fill={theme.palette.chartSplitColorTriad["1"]} />
                                <Bar yAxisId="left" dataKey="pe_oi" fill={theme.palette.chartSplitColorTriad["2"]} />
                                <Line strokeWidth={2} yAxisId="right" type="monotone" dataKey="ce_volume" stroke={theme.palette.chartSplitColorTriad["3"]} activeDot={{ r: 8 }} />
                                <Line strokeWidth={2} yAxisId="right" type="monotone" dataKey="pe_volume" stroke={theme.palette.chartSplitColorTriad["4"]} activeDot={{ r: 8 }} />
                                <Line strokeWidth={2} yAxisId="right" type="monotone" dataKey="strike" stroke={theme.palette.chartSplitColorTriad["5"]} activeDot={{ r: 8 }} />
                                {/* <Line dataKey="difference" stroke={theme.palette.chartSplitColorTriad["1"]} />
                                <Line type="monotone" dataKey="wva" stroke={theme.palette.chartSplitColorTriad["3"]} /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item>
                <Grid container direction="row">
                    <Grid container item lg={12}
                        md={12}
                        sm={12}
                        justifyContent="center"
                        sx={{
                            "& .recharts-tooltip-label": {
                                color: "#2452db"
                            },
                            mt: 10
                        }}>
                        <Typography align="center" fontWeight={"bold"} >OI vs OI Change</Typography>
                        <ResponsiveContainer width="100%" height="100%" aspect={3}>
                            <ComposedChart
                                width={400}
                                height={300}
                                data={ce_pe_vol_oi_change}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="2"/> */}
                                <XAxis dataKey="strike" />
                                <YAxis yAxisId="left" type="number" />
                                <YAxis yAxisId="right" type="number" orientation="right" />

                                <Tooltip />
                                <Legend />
                                <Bar yAxisId="left" dataKey="ce_oi" fill={theme.palette.chartSplitColorTriad["1"]} />
                                <Bar yAxisId="left" dataKey="pe_oi" fill={theme.palette.chartSplitColorTriad["2"]} />
                                <Line strokeWidth={2} yAxisId="right" type="monotone" dataKey="ce_oi_change" stroke={theme.palette.chartSplitColorTriad["3"]} activeDot={{ r: 8 }} />
                                <Line strokeWidth={2} yAxisId="right" type="monotone" dataKey="pe_oi_change" stroke={theme.palette.chartSplitColorTriad["4"]} activeDot={{ r: 8 }} />
                                {/* <Line dataKey="difference" stroke={theme.palette.chartSplitColorTriad["1"]} />
                                <Line type="monotone" dataKey="wva" stroke={theme.palette.chartSplitColorTriad["3"]} /> */}
                            </ComposedChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}