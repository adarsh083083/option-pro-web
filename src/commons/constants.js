// export const SERVER = "http://139.59.67.49:8000"
export const SERVER = "https://staging.optionpro.in"
export const INDEX_SYMBOLS = ["NIFTY", "BANKNIFTY"]
export const LOGIN_ENDPOINT = SERVER + '/login/token'
export const SIGNUP_ENDPOINT = SERVER + '/login/create_user'
export const ALL_USERS_ENDPOINT = SERVER + '/all_users'
export const UPGRADE_ENDPOINT = SERVER + '/upgrade_user/'
export const UPGRADE_ADMIN_ENDPOINT = SERVER + '/upgrade_admin/'
export const DEGRADE_ENDPOINT = SERVER + '/degrade_user/'
export const DEGRADE_ADMIN_ENDPOINT = SERVER + '/degrade_admin/'
export const OPTION_TIME_REVERSAL_ENDPOINT = SERVER + '/time_reversal?symbol='
export const GOLDEN_RATIO_ENDPOINT = SERVER + '/golden_ratio?symbol='
export const CONSOLIDATED_DATA_ENDPOINT = SERVER + '/consolidated_analysis?symbol='
export const CONSOLIDATED_VOLUME_ENDPOINT = SERVER + '/consolidated_volume'
export const CONSOLIDATED_OI_ENDPOINT = SERVER + '/consolidated_oi'

export const SET_EXP_DATE_ADMIN_ENDPOINT = SERVER + '/expiry_date/'
export const RESTART_ADMIN_ENDPOINT = SERVER + '/restart'
export const SERVER_INFO_ADMIN_ENDPOINT = SERVER + '/ser_info'
export const INDEX_EXPIRY = SET_EXP_DATE_ADMIN_ENDPOINT + 'index_expiry'
export const EQUITY_EXPIRY = SET_EXP_DATE_ADMIN_ENDPOINT + 'equity_expiry'
export const FINNIFTY_EXPIRY = SET_EXP_DATE_ADMIN_ENDPOINT + 'finnifty_expiry'
// export const SERVER_INFO_ADMIN_ENDPOINT = SERVER + '/server_info'
export const GET_EXP_DATE_ADMIN_ENDPOINT = SERVER + '/get_expiry_date'
export const MARKET_PROF_ADMIN_ENDPOINT = SERVER + '/read_profile_data'
export const WRITE_MARKET_PROF_ADMIN_ENDPOINT = SERVER + '/write_profile_data'
export const RENEWAL_ADMIN_ENDPOINT = SERVER + '/renewal/'
export const EQUITY_DATE = 'equity_expiry'
export const INDEX_DATE = 'index_expiry'
export const MIXED_ANALYSIS = SERVER + '/mixed_analysis'
export const WEEKLY_EXPIRTY = ""
export const MONTHLY_EXPIRTY = "MONTHLY"
export const COMBINED_EXPIRTY = "COMBINED"
export const NIFTY_SYMBOL_WEEKLY = "NIFTY"
export const NIFTY_SYMBOL_MONTHLY = "NIFTYMONTHLY"
export const BANKNIFTY_SYMBOL_WEEKLY = "BANKNIFTY"
export const BANKNIFTY_SYMBOL_MONTHLY = "BANKNIFTYMONTHLY"
export const NIFTY_SYMBOL_COMBINED = "NIFTYCOMBINED"
export const BANKNIFTY_SYMBOL_COMBINED = "BANKNIFTYCOMBINED"


// ADMIN PAGE

export const CONFIG_MANAGEMENT_PAGE = 'config'
export const USER_MANAGEMENT_PAGE = 'user'
export const MARKET_PROFILE_PAGE = 'market'

export const GUIDE = "https://optionpro.notion.site/optionpro/Option-Pro-Guide-53002e193b0d463c9e6729968dac78a2"



// PAGE SETUP
export const PAGE_CODE_PCR_OVERVIEW = 'pcrOverview'
export const PAGE_CODE_RANGE_ANALYSIS = 'rangeAnalysis'
export const PAGE_CODE_TIME_REVERSAL = 'timeReversal'
export const PAGE_CODE_WD_GANN = 'WDGandGridLevels'
export const PAGE_CODE_OI_VOL_DIFF_ANALYSIS = 'oiVolumeDifferenceAnalysis'
export const PAGE_CODE_STRATEGIES = 'strategies'
export const PAGE_CODE_OI_HIG_VOL_ANALYSIS = 'volumeChangeAnalysis'
export const PAGE_CODE_OI_CHANGE_ANALYSIS = 'oiChangeAnalysis'
export const PAGE_CODE_ALL_INDICATORS = 'allIndicatorsView'
export const PAGE_CODE_OPTION_DATA_ANALYSIS = 'optionDataAnalysis'
export const PAGE_CODE_OI_ANALYSIS_TABLE = 'oiAnalysisTable'
export const PAGE_CODE_OI_ANALYSIS_CHART = 'oiAnalysisChart'
export const PAGE_CODE_OIV_ANALYSIS_CHART = 'oiVolumeRatioAnalysisChart'
export const PAGE_CODE_OIV_ANALYSIS_TABLE = 'OI&VolumeAnalysisTable'
export const PAGE_CODE_VOL_ANALYSIS_CHART = 'volumeAnalysisChart'
export const PAGE_CODE_VOL_ANALYSIS_TABLE = 'volumeAnalysisTable'
export const PAGE_CODE_OI_ANALYSIS_CHART_TABLE = 'oiAnalysise'
export const PAGE_CODE_OIV_ANALYSIS_CHART_TABLE = 'oivAnalysis'
export const PAGE_CODE_VOL_ANALYSIS_CHART_TABLE = 'volumeAnalysis'
export const PAGE_CODE_CONSOLIDATED_ANALYSIS = 'consolidatedAnalysis'
export const PAGE_CODE_CONSOLIDATED_VOLUME_ANALYSIS = 'consolidatedVolumeAnalysis'
export const PAGE_CODE_CONSOLIDATED_OI_ANALYSIS = 'consolidatedOIAnalysis'
export const PAGE_CODE_ALL_CHARTS = 'AllChartsOthers'
export const LOCALSTORAGE_NOTIFICATION_EXT_ID_OS= 'NOTIFICATION_ID_SET'
// SCHEMA
// title - Title of the page or section
// code  - used for path name - should be unique
// isChild - if the page is child of another page mentioned here
// hasChild - bool to check if the page has children
// childrem - list of sub pages
// individualPage - if this page is rendered separately apart from options page
// 

export const LOCAL_STORAGE_PAGE_SCHEMA = 'pageSchemas'
export const LOCAL_STORAGE_ASK_NOTIFICATION = 'askNotification'

export const ALL_PAGES = {

    [PAGE_CODE_PCR_OVERVIEW]: {
        title: "PCR Overview",
        code:PAGE_CODE_PCR_OVERVIEW,
        isChild: false,
        hasChild: false,
        children: null,
         
    },
    [PAGE_CODE_RANGE_ANALYSIS]: {
        title: "Range Analysis",
        code:PAGE_CODE_RANGE_ANALYSIS,
        isChild: false,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_TIME_REVERSAL]: {
        title: "Time Reversal",
        code:PAGE_CODE_TIME_REVERSAL,
        isChild: false,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_WD_GANN]: {
        title: "WD Gann Grid Levels",
        code:PAGE_CODE_WD_GANN,
        isChild: false,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_OI_VOL_DIFF_ANALYSIS]: {
        title: "OI and Volume Difference Analysis",
        code:PAGE_CODE_OI_VOL_DIFF_ANALYSIS,
        isChild: false,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_STRATEGIES]: {
        title: "Strategies",
        code:PAGE_CODE_STRATEGIES,
        isChild: false,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_OI_HIG_VOL_ANALYSIS]: {
        title: "Highest Volume Change Analysis",
        code:PAGE_CODE_OI_HIG_VOL_ANALYSIS,
        isChild: false,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_OI_CHANGE_ANALYSIS]: {
        title: "Highest OI Change Analysis",
        code:PAGE_CODE_OI_CHANGE_ANALYSIS,
        isChild: false,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_ALL_INDICATORS]: {
        title: "All Indicators View",
        code:PAGE_CODE_ALL_INDICATORS,
        isChild: false,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_OPTION_DATA_ANALYSIS]: {
        title: "Option Data Analysis",
        code:PAGE_CODE_OPTION_DATA_ANALYSIS,
        isChild: false,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_OI_ANALYSIS_TABLE]: {
        title: "OI Analysis Table",
        code:PAGE_CODE_OI_ANALYSIS_TABLE,
        isChild: true,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_OI_ANALYSIS_CHART]: {
        title: "OI Analysis Chart",
        code:PAGE_CODE_OI_ANALYSIS_CHART,
        isChild: true,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_OIV_ANALYSIS_CHART]: {
        title: "OI & Volume Ratio Analysis Chart",
        code:PAGE_CODE_OIV_ANALYSIS_CHART,
        isChild: true,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_OIV_ANALYSIS_TABLE]: {
        title: "OI & Volume Analysis Table",
        code:PAGE_CODE_OIV_ANALYSIS_TABLE,
        isChild: true,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_VOL_ANALYSIS_CHART]: {
        title: "Volume Analysis Chart",
        code:PAGE_CODE_VOL_ANALYSIS_CHART,
        isChild: true,
        hasChild: false,
        children: null
    },
    [PAGE_CODE_VOL_ANALYSIS_TABLE]: {
        title: "Volume Analysis Table",
        code:PAGE_CODE_VOL_ANALYSIS_TABLE,
        isChild: true,
        hasChild: false,
        children: null
    },

    [PAGE_CODE_OI_ANALYSIS_CHART_TABLE]: {
        title: "",
        code:PAGE_CODE_OI_ANALYSIS_CHART_TABLE,
        isChild: false,
        individualPage:true,
        hasChild: true,
        children: [{
            component: PAGE_CODE_OI_ANALYSIS_TABLE,
            title: "Table",
        }, {
            component: PAGE_CODE_OI_ANALYSIS_CHART,
            title: "Chart"
        }],
    },
    [PAGE_CODE_OIV_ANALYSIS_CHART_TABLE]: {
        title: "",
        code:PAGE_CODE_OIV_ANALYSIS_CHART_TABLE,
        isChild: false,
        hasChild: true,
        individualPage:true,
        children: [{
            component: PAGE_CODE_OIV_ANALYSIS_TABLE,
            title: "Table",
        }, {
            component: PAGE_CODE_OIV_ANALYSIS_CHART,
            title: "Chart"
        }],
    },
    [PAGE_CODE_VOL_ANALYSIS_CHART_TABLE]: {
        title: "",
        code:PAGE_CODE_VOL_ANALYSIS_CHART_TABLE,
        isChild: false,
        individualPage:true,
        hasChild: true,
        children: [{
            component: PAGE_CODE_VOL_ANALYSIS_TABLE,
            title: "Table",
        }, {
            component: PAGE_CODE_VOL_ANALYSIS_CHART,
            title: "Chart"
        }],
    },
    [PAGE_CODE_CONSOLIDATED_ANALYSIS]:{
        title:"Consolidated Analysis",
        code:PAGE_CODE_CONSOLIDATED_ANALYSIS,
        isChild:false,
        hasChild:false,
        individualPage:true,
    },
    [PAGE_CODE_CONSOLIDATED_VOLUME_ANALYSIS]:{
        title:"Volume Analysis",
        code:PAGE_CODE_CONSOLIDATED_VOLUME_ANALYSIS,
        isChild:false,
        hasChild:false,
        individualPage:true,
    },
    [PAGE_CODE_CONSOLIDATED_OI_ANALYSIS]:{
        title:"OI Analysis",
        code:PAGE_CODE_CONSOLIDATED_OI_ANALYSIS,
        isChild:false,
        hasChild:false,
        individualPage:true,
    },
    [PAGE_CODE_ALL_CHARTS]:{
        title:"Option Data Charts",
        code:PAGE_CODE_ALL_CHARTS,
        isChild:false,
        hasChild:false,
        individualPage:false,
    }

}


export const page_routes = []
for (const [key, value] of Object.entries(ALL_PAGES)) {
    if (!value.isChild){
        page_routes.push(value)
    }
    

  }
//   Default page schema should have all the tables and charts
export const DEFAULT_PAGE_SCHEMA = [
    ALL_PAGES[PAGE_CODE_PCR_OVERVIEW],
    ALL_PAGES[PAGE_CODE_RANGE_ANALYSIS],
    ALL_PAGES[PAGE_CODE_TIME_REVERSAL],
    ALL_PAGES[PAGE_CODE_WD_GANN],
    ALL_PAGES[PAGE_CODE_OI_VOL_DIFF_ANALYSIS],
    ALL_PAGES[PAGE_CODE_STRATEGIES],
    ALL_PAGES[PAGE_CODE_OI_HIG_VOL_ANALYSIS],
    ALL_PAGES[PAGE_CODE_OI_CHANGE_ANALYSIS],
    ALL_PAGES[PAGE_CODE_ALL_INDICATORS],
    ALL_PAGES[PAGE_CODE_OPTION_DATA_ANALYSIS],
    ALL_PAGES[PAGE_CODE_OI_ANALYSIS_CHART],
    ALL_PAGES[PAGE_CODE_OIV_ANALYSIS_CHART],
    ALL_PAGES[PAGE_CODE_VOL_ANALYSIS_CHART],
    ALL_PAGES[PAGE_CODE_OI_ANALYSIS_TABLE],
    ALL_PAGES[PAGE_CODE_OIV_ANALYSIS_TABLE],
    ALL_PAGES[PAGE_CODE_VOL_ANALYSIS_TABLE],
]