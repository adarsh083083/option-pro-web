import { Grid, Tooltip, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { theme } from "../../commons/theme";
import { StyledTableCell, StyledTableRow } from "../StyledTable";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { LoadingButton } from "@mui/lab";

export const CalculateIndicatorPercentages = (
  analysis_data,
  oi_view,
  oiv_view,
  pcr_oibased
) => {
  let bullish = 0;
  let bearish = 0;
  let neutral = 0;
  let calway_bullish = "";
  let calway_bearish = "";
  let calway_neutral = "";
  // OI Analysis View
  if (oi_view == "Bullish") {
    bullish += 3;
    calway_bullish += "oi_view 3 \n";
  } else if (oi_view == "Bearish") {
    bearish += 3;
    calway_bearish += "oi_view 3 \n";
  } else if (oi_view == null) {
    calway_neutral += "oi_view 3 \n";
    neutral += 3;
  }

  // Volume & OI Ration Analysis view
  if (oiv_view == "Bullish") {
    bullish += 3;
    calway_bullish += "oiv_view 3 \n";
  } else if (oiv_view == "Bearish") {
    bearish += 3;
    calway_bearish += "oiv_view 3 \n";
  } else if (oiv_view == null) {
    neutral += 3;
    calway_neutral += "oiv_view 3 \n";
  }

  // PCR OI BASED
  if (pcr_oibased) {
    bullish += 1;
    calway_bullish += "pcr_oibased 1 \n";
  } else if (pcr_oibased == false) {
    bearish += 1;
    calway_bearish += "pcr_oibased 1 \n";
  } else if (pcr_oibased == null) {
    neutral += 1;
    calway_neutral += "pcr_oibased 1 \n";
  }

  // More OI change AT (in 5 mins / 15 mins)
  if (analysis_data["conditions"]["more_oi_change_pe"]) {
    bullish += 2;
    calway_bullish += "more_oi_change_pe 2 \n";
  } else if (analysis_data["conditions"]["more_oi_change_ce"]) {
    bearish += 2;
    calway_bearish += "more_oi_change_pe 2 \n";
  } else {
    neutral += 2;
    calway_neutral += "more_oi_change_pe 2 \n";
  }

  // Multiple unwidning (Near by future price
  if (analysis_data["conditions"]["cond_multiple_unwinding_ce"]) {
    bullish += 1;
    calway_bullish += "cond_multiple_unwinding_ce 1 \n";
  } else if (analysis_data["conditions"]["cond_multiple_unwinding_pe"]) {
    bearish += 1;
    calway_bearish += "cond_multiple_unwinding_ce 1 \n";
  } else {
    neutral += 1;
    calway_neutral += "cond_multiple_unwinding_ce 1 \n";
  }

  // Multiple PCR increasing (5 mins)

  if (
    analysis_data["conditions"]["pcr_change_increasing"] ==
    analysis_data["conditions"]["pcr_change_decreasing"]
  ) {
    neutral += 1;
    calway_neutral += "pcr_change_increasing 1 \n";
  } else if (
    analysis_data["conditions"]["pcr_change_increasing"] >
    analysis_data["conditions"]["pcr_change_decreasing"]
  ) {
    bullish += 1;
    calway_bullish += "pcr_change_increasing 1 \n";
  } else {
    bearish += 1;
    calway_bearish += "pcr_change_decreasing 1 \n";
  }

  // Highest volume increasing at

  if (analysis_data["conditions"]["highest_volume"] == "Bullish") {
    bullish += 6;
    calway_bullish += "highest_volume 6 \n";
  } else if (analysis_data["conditions"]["highest_volume"] == "Bearish") {
    bearish += 6;
    calway_bearish += "highest_volume 6 \n";
  } else {
    neutral += 6;
    calway_neutral += "highest_volume 6 \n";
  }

  // Future Discount / Premium
  if (analysis_data["conditions"]["future_premium_discount"] == "Premium") {
    bullish += 1;
    calway_bullish += "future_premium_discount 1 \n";
  } else if (
    analysis_data["conditions"]["future_premium_discount"] == "Discount"
  ) {
    bearish += 1;
    calway_bearish += "future_premium_discount 1 \n";
  } else {
    neutral += 1;
    calway_neutral += "future_premium_discount 1 \n";
  }

  // SI S2 S3

  if (analysis_data["conditions"]["S1_CE"]) {
    bullish += 3;
    calway_bullish += "s1 3 \n";
  } else if (analysis_data["conditions"]["S1_PE"]) {
    bearish += 3;
    calway_bearish += "s1 3 \n";
  } else {
    neutral += 3;
    calway_neutral += "s1 3 \n";
  }
  // s2
  if (analysis_data["conditions"]["S2_CE"]) {
    bullish += 3;
    calway_bullish += "s2 3 \n";
  } else if (analysis_data["conditions"]["S2_PE"]) {
    bearish += 3;
    calway_bearish += "s2 3 \n";
  } else {
    neutral += 3;
    calway_neutral += "s2 3 \n";
  }
  // s3
  if (analysis_data["conditions"]["S3_CE"]) {
    bullish += 3;
    calway_bullish += "s3 3 \n";
  } else if (analysis_data["conditions"]["S3_PE"]) {
    bearish += 3;
    calway_bearish += "s3 3 \n";
  } else {
    neutral += 3;
    calway_neutral += "s3 3 \n";
  }
  const total_ = bullish + bearish + neutral;
  const bullish_percentage = (bullish * 100) / total_;
  const bearish_percentage = (bearish * 100) / total_;
  const neutral_percentage = (neutral * 100) / total_;
  const overallview =
    bullish > bearish && bullish > neutral
      ? "Bullish"
      : bearish > bullish && bearish > neutral
      ? "Bearish"
      : "Neutral";
  return [
    total_,
    bullish_percentage,
    bearish_percentage,
    neutral_percentage,
    overallview,
    bullish,
    bearish,
    neutral,
    calway_bearish,
    calway_bullish,
    calway_neutral,
  ];
};

export const Indicators = () => {
  const theme = useTheme();

  const isAdmin = useSelector((state) => state.login.isAdmin);

  const data = useSelector((state) => state.table.data);
  const oidata = useSelector((state) => state.table.oidata);
  const oivdata = useSelector((state) => state.table.oivdata);
  if (!data || !oidata || !oivdata) {
    return (
      <LoadingButton
        loading={true}
        disabled
        disableElevation
        disableFocusRipple
        disableRipple
        disableTouchRipple
      >
        Loading
      </LoadingButton>
    );
  }

  // console.log(oidata, oivdata, "oooi",oidata[oidata.length - 1][1],oivdata[oivdata.length - 1][1])
  const oi_view = oidata
    ? oidata.length > 0
      ? oidata[oidata.length - 1][1]["view"]
      : false
    : null;
  const oiv_view = oivdata
    ? oivdata.length > 0
      ? oivdata[oivdata.length - 1][1]["view"]
      : false
    : null;

  const pcr_oibased = oidata
    ? oidata.length > 1
      ? oidata[oidata.length - 1][1]["pcr"] -
          oidata[oidata.length - 2][1]["pcr"] >
        0
        ? true
        : false
      : null
    : null;
  const [
    total_,
    bullish_percentage,
    bearish_percentage,
    neutral_percentage,
    overallview,
    bullish,
    bearish,
    neutral,
    calway_bearish,
    calway_bullish,
    calway_neutral,
  ] = CalculateIndicatorPercentages(
    data.option["result"]["analysis_data"],
    oi_view,
    oiv_view,
    pcr_oibased
  );

  const style = {
    typography: {
      fontWeight: 500,
      lineHeight: 1.4,
      fontFamily: "sans-serif",
      fontSize: "12px",
      letterSpacing: " 0.00938em",
    },
    tableRow: {
      boxShadow: " 0 4px 6px -6px #222",
      backgroundColor: "#ffffff",
    },
  };

  return (
    <React.Fragment>
      <Grid
        lg={12}
        sm={12}
        md={12}
        sx={{
          flex: 1,
          backgroundColor: theme.palette.appbar,
          // p:1,
          borderRadius: 5,
          mb: 3,
        }}
        container
        direction={"row"}
        // justifyContent={'center'}
      >
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700 }}
            size="small"
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={style.tableRow}>
                <Tooltip
                  style={{ whiteSpace: "pre-line" }}
                  title={
                    isAdmin ? (
                      <div style={{ whiteSpace: "pre-line" }}>
                        {calway_bullish + "Total:" + bullish.toString()}
                      </div>
                    ) : (
                      false
                    )
                  }
                >
                  <StyledTableCell align="center">
                    Number of Bullish{" "}
                  </StyledTableCell>
                </Tooltip>
                <Tooltip
                  style={{ whiteSpace: "pre-line" }}
                  title={
                    isAdmin ? (
                      <div style={{ whiteSpace: "pre-line" }}>
                        {calway_bearish + "Total:" + bearish.toString()}
                      </div>
                    ) : (
                      false
                    )
                  }
                >
                  <StyledTableCell align="center">
                    Number of Bearish
                  </StyledTableCell>
                </Tooltip>
                <Tooltip
                  style={{ whiteSpace: "pre-line" }}
                  title={
                    isAdmin ? (
                      <div style={{ whiteSpace: "pre-line" }}>
                        {calway_neutral + "Total:" + neutral.toString()}
                      </div>
                    ) : (
                      false
                    )
                  }
                >
                  <StyledTableCell align="center">Neutral</StyledTableCell>
                </Tooltip>
                <StyledTableCell align="center">Overall View</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key={"c"}>
                <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {bullish_percentage.toFixed(2)}%
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {bearish_percentage.toFixed(2)}%
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="p" sx={style.typography}>
                    {neutral_percentage.toFixed(2)}%
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor:
                      overallview == "Bullish"
                        ? theme.palette.success.light
                        : overallview == "Bearish"
                        ? theme.palette.error.main
                        : "unset",
                  }}
                >
                  <Typography variant="p" sx={style.typography}>
                    {overallview}
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid
        lg={12}
        md={12}
        sm={12}
        sx={{
          flex: 1,
          backgroundColor: theme.palette.appbar,
          // p:1,
          borderRadius: 5,
          mb: 3,
        }}
        container
        direction={"row"}
        // justifyContent={'center'}
      >
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700 }}
            size="small"
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={style.tableRow}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">Indicator</StyledTableCell>
                <StyledTableCell align="left">Indication</StyledTableCell>
                <StyledTableCell align="center">View</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key={"c"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    OI Change Analysis
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "more_oi_change_ce"
                    ]
                      ? "CE"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "more_oi_change_pe"
                        ]
                      ? "PE"
                      : "-"}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: data.option["result"]["analysis_data"][
                      "conditions"
                    ]["more_oi_change_ce"]
                      ? theme.palette.error.main
                      : data.option["result"]["analysis_data"]["conditions"][
                          "more_oi_change_pe"
                        ]
                      ? theme.palette.success.light
                      : "unset",
                  }}
                >
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "more_oi_change_ce"
                    ]
                      ? "Bearish"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "more_oi_change_pe"
                        ]
                      ? "Bullish"
                      : "-"}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>

              <StyledTableRow key={"cd"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    Unwinding Analysis
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "cond_multiple_unwinding_ce"
                    ]
                      ? "CE"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "cond_multiple_unwinding_pe"
                        ]
                      ? "PE"
                      : "No side"}
                  </Typography>
                </StyledTableCell>
                <Tooltip
                  title={
                    isAdmin
                      ? data.option["result"]["analysis_data"]["conditions"][
                          "ce_multiple_winding_status"
                        ] +
                        data.option["result"]["analysis_data"]["conditions"][
                          "pe_multiple_winding_status"
                        ]
                      : false
                  }
                >
                  <StyledTableCell
                    align="center"
                    style={{
                      backgroundColor: data.option["result"]["analysis_data"][
                        "conditions"
                      ]["cond_multiple_unwinding_pe"]
                        ? theme.palette.error.main
                        : data.option["result"]["analysis_data"]["conditions"][
                            "cond_multiple_unwinding_ce"
                          ]
                        ? theme.palette.success.light
                        : "unset",
                    }}
                  >
                    <Typography variant="p" sx={style.typography}>
                      {data.option["result"]["analysis_data"]["conditions"][
                        "cond_multiple_unwinding_ce"
                      ]
                        ? "Bullish"
                        : data.option["result"]["analysis_data"]["conditions"][
                            "cond_multiple_unwinding_pe"
                          ]
                        ? "Bearish"
                        : "Neutral"}
                    </Typography>
                  </StyledTableCell>
                </Tooltip>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>

              <StyledTableRow key={"dc"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    Strikes PCR Analaysis
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "pcr_change_increasing"
                    ] ==
                    data.option["result"]["analysis_data"]["conditions"][
                      "pcr_change_decreasing"
                    ]
                      ? "Neutral"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "pcr_change_increasing"
                        ] >
                        data.option["result"]["analysis_data"]["conditions"][
                          "pcr_change_decreasing"
                        ]
                      ? "Yes"
                      : "Nogit"}
                  </Typography>
                </StyledTableCell>
                <Tooltip
                  title={
                    isAdmin
                      ? data.option["result"]["analysis_data"]["conditions"][
                          "list_of_pcr_upside"
                        ] +
                        data.option["result"]["analysis_data"]["conditions"][
                          "list_of_pcr_down"
                        ]
                      : false
                  }
                >
                  <StyledTableCell
                    align="center"
                    style={{
                      backgroundColor:
                        data.option["result"]["analysis_data"]["conditions"][
                          "pcr_change_increasing"
                        ] ==
                        data.option["result"]["analysis_data"]["conditions"][
                          "pcr_change_decreasing"
                        ]
                          ? "unset"
                          : data.option["result"]["analysis_data"][
                              "conditions"
                            ]["pcr_change_increasing"] >
                            data.option["result"]["analysis_data"][
                              "conditions"
                            ]["pcr_change_decreasing"]
                          ? theme.palette.success.light
                          : theme.palette.error.main,
                    }}
                  >
                    <Typography variant="p" sx={style.typography}>
                      {data.option["result"]["analysis_data"]["conditions"][
                        "pcr_change_increasing"
                      ] ==
                      data.option["result"]["analysis_data"]["conditions"][
                        "pcr_change_decreasing"
                      ]
                        ? "Neutral"
                        : data.option["result"]["analysis_data"]["conditions"][
                            "pcr_change_increasing"
                          ] >
                          data.option["result"]["analysis_data"]["conditions"][
                            "pcr_change_decreasing"
                          ]
                        ? "Bullish"
                        : "Bearish"}
                    </Typography>
                  </StyledTableCell>
                </Tooltip>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>

              <StyledTableRow key={"cf"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    Option Volume Analysis
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "highest_volume"
                    ] == "Bullish"
                      ? "Higher Side"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "highest_volume"
                        ] == "Bearish"
                      ? "Lower Side"
                      : "-"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor:
                      data.option["result"]["analysis_data"]["conditions"][
                        "highest_volume"
                      ] == "Bullish"
                        ? theme.palette.success.light
                        : data.option["result"]["analysis_data"]["conditions"][
                            "highest_volume"
                          ] == "Bearish"
                        ? theme.palette.error.main
                        : "unset",
                  }}
                >
                  <Typography variant="p" sx={style.typography}>
                    {
                      data.option["result"]["analysis_data"]["conditions"][
                        "highest_volume"
                      ]
                    }
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>

              <StyledTableRow key={"cf"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    OI Analysis
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {oi_view ? oi_view : "-"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor:
                      oi_view == "Bullish"
                        ? theme.palette.success.light
                        : oi_view == "Bearish"
                        ? theme.palette.error.main
                        : "unset",
                  }}
                >
                  <Typography variant="p" sx={style.typography}>
                    {oi_view ? oi_view : "-"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>

              <StyledTableRow key={"cf"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    Volume & OI ratio analysis
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {oiv_view ? oiv_view : "-"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor:
                      oiv_view == "Bullish"
                        ? theme.palette.success.light
                        : oiv_view == "Bearish"
                        ? theme.palette.error.main
                        : "unset",
                  }}
                >
                  <Typography variant="p" sx={style.typography}>
                    {oiv_view ? oiv_view : "-"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>

              <StyledTableRow key={"c"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    Future Discount / Premium
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {
                      data.option["result"]["analysis_data"]["conditions"][
                        "future_premium_discount"
                      ]
                    }
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor:
                      data.option["result"]["analysis_data"]["conditions"][
                        "future_premium_discount"
                      ] == "Discount"
                        ? theme.palette.error.main
                        : theme.palette.success.light,
                  }}
                >
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "future_premium_discount"
                    ] == "Discount"
                      ? "Bearish"
                      : "Bullish"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>

              <StyledTableRow key={"cf"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    Overall PCR (OI) Analysis
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {pcr_oibased ? "Yes" : "No"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: pcr_oibased
                      ? theme.palette.success.light
                      : pcr_oibased == false
                      ? theme.palette.error.main
                      : "unset",
                  }}
                >
                  <Typography variant="p" sx={style.typography}>
                    {pcr_oibased
                      ? "Bullish"
                      : pcr_oibased == false
                      ? "Bearish"
                      : "-"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>

              <StyledTableRow key={"c"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    Supper Indicator 1
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "S1_CE"
                    ]
                      ? "Buy"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "S1_PE"
                        ]
                      ? "Sell"
                      : "No"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: data.option["result"]["analysis_data"][
                      "conditions"
                    ]["S1_CE"]
                      ? theme.palette.success.light
                      : data.option["result"]["analysis_data"]["conditions"][
                          "S1_PE"
                        ]
                      ? theme.palette.error.main
                      : "unset",
                  }}
                >
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "S1_CE"
                    ]
                      ? "Bullish"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "S1_PE"
                        ]
                      ? "Bearish"
                      : "Neutral"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>

              <StyledTableRow key={"c"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    Supper Indicator 2
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "S2_CE"
                    ]
                      ? "Buy"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "S2_PE"
                        ]
                      ? "Sell"
                      : "No"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: data.option["result"]["analysis_data"][
                      "conditions"
                    ]["S2_CE"]
                      ? theme.palette.success.light
                      : data.option["result"]["analysis_data"]["conditions"][
                          "S2_PE"
                        ]
                      ? theme.palette.error.main
                      : "unset",
                  }}
                >
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "S2_CE"
                    ]
                      ? "Bullish"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "S2_PE"
                        ]
                      ? "Bearish"
                      : "Neutral"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>

              <StyledTableRow key={"c"}>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    Supper Indicator 3
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "S3_CE"
                    ]
                      ? "Buy"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "S3_PE"
                        ]
                      ? "Sell"
                      : "No"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    backgroundColor: data.option["result"]["analysis_data"][
                      "conditions"
                    ]["S3_CE"]
                      ? theme.palette.success.light
                      : data.option["result"]["analysis_data"]["conditions"][
                          "S3_PE"
                        ]
                      ? theme.palette.error.main
                      : "unset",
                  }}
                >
                  <Typography variant="p" sx={style.typography}>
                    {data.option["result"]["analysis_data"]["conditions"][
                      "S3_CE"
                    ]
                      ? "Bullish"
                      : data.option["result"]["analysis_data"]["conditions"][
                          "S3_PE"
                        ]
                      ? "Bearish"
                      : "Neutral"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </React.Fragment>
  );
};
