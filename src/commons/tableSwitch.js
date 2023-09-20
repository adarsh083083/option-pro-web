import { Stratergies } from "../components/tables/CallPanel";
import { GoldenRatio } from "../components/tables/GoldenRatio";
import { Indicators } from "../components/tables/Indicators";
import { OIAnalysis } from "../components/tables/OIAnalysisPanel";
import { OITableChart } from "../components/charts/OITableChart";
import OIDataTable from "../components/OITableGrid";
import OIVDataTable from "../components/tables/OIVTableGrid";
import DataTable from "../components/tables/SingleTable";
import { OIChangeAnalysis } from "../components/tables/OIChangeAnalysis";
import { SummaryPanel } from "../components/tables/SummaryPanel";
import { TimeReversal } from "../components/tables/TimeReversal";
import { VolumeTableChart } from "../components/charts/VolumeTableChart";
import VolumeDataTable from "../components/VolumeTableGrid";
import { PAGE_CODE_ALL_INDICATORS, PAGE_CODE_OI_CHANGE_ANALYSIS, PAGE_CODE_OIV_ANALYSIS_CHART, PAGE_CODE_OIV_ANALYSIS_CHART_TABLE, PAGE_CODE_OIV_ANALYSIS_TABLE, PAGE_CODE_OI_ANALYSIS_CHART, PAGE_CODE_OI_ANALYSIS_CHART_TABLE, PAGE_CODE_OI_ANALYSIS_TABLE, PAGE_CODE_OI_HIG_VOL_ANALYSIS, PAGE_CODE_OI_VOL_DIFF_ANALYSIS, PAGE_CODE_OPTION_DATA_ANALYSIS, PAGE_CODE_PCR_OVERVIEW, PAGE_CODE_RANGE_ANALYSIS, PAGE_CODE_STRATEGIES, PAGE_CODE_TIME_REVERSAL, PAGE_CODE_VOL_ANALYSIS_CHART, PAGE_CODE_VOL_ANALYSIS_CHART_TABLE, PAGE_CODE_VOL_ANALYSIS_TABLE, PAGE_CODE_WD_GANN, PAGE_CODE_ALL_CHARTS } from "./constants";
import { IndexSummary } from "../components/tables/IndexSummary"
import { VolumeChangeAnalysis } from "../components/tables/VolumeChangeAnalysis";
import { AllChartsOthers } from "../components/AllChartsOthers";

export const getTable = (tableId, props) => {
    switch (tableId) {
        case PAGE_CODE_PCR_OVERVIEW:
            return <IndexSummary {...props} />


        case PAGE_CODE_RANGE_ANALYSIS:
            return <SummaryPanel {...props} />


        case PAGE_CODE_TIME_REVERSAL:
            return <TimeReversal {...props} />


        case PAGE_CODE_WD_GANN:
            return <GoldenRatio {...props} />


        case PAGE_CODE_OI_HIG_VOL_ANALYSIS:
            return <VolumeChangeAnalysis {...props} />

        case PAGE_CODE_OI_CHANGE_ANALYSIS:
            return <OIChangeAnalysis {...props} />


        case PAGE_CODE_OI_VOL_DIFF_ANALYSIS:
            return <OIAnalysis {...props} />


        case PAGE_CODE_STRATEGIES:
            return <Stratergies {...props} />


        case PAGE_CODE_ALL_INDICATORS:
            return <Indicators {...props} />


        case PAGE_CODE_OPTION_DATA_ANALYSIS:
            return <DataTable {...props} />


        case PAGE_CODE_OI_ANALYSIS_CHART:
            return <OITableChart {...props} />


        case PAGE_CODE_OI_ANALYSIS_TABLE:
            return <OIDataTable {...props} /> 


        case PAGE_CODE_OIV_ANALYSIS_CHART:
            return <OITableChart {...props} />

        case PAGE_CODE_OIV_ANALYSIS_TABLE:
            return <OIVDataTable {...props} />


        case PAGE_CODE_VOL_ANALYSIS_CHART:
            return <VolumeTableChart {...props} />


        case PAGE_CODE_VOL_ANALYSIS_TABLE:
            return <VolumeDataTable {...props} />


        case PAGE_CODE_OI_ANALYSIS_CHART_TABLE:
            return <IndexSummary {...props} />


        case PAGE_CODE_OIV_ANALYSIS_CHART_TABLE:
            return <IndexSummary {...props} />


        case PAGE_CODE_VOL_ANALYSIS_CHART_TABLE:
            return <IndexSummary {...props} />

        case PAGE_CODE_ALL_CHARTS:
            return  <AllChartsOthers {...props}/>

        default:
            break;
    }
}