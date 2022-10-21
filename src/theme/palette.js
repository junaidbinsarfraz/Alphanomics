import { grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#00AB55',
  dark: '#007B55',
  darker: '#005249',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  normal: '#10B3E8',
  dark: '#1939B7',
  darker: '#091A7A',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  250: '#F3F6FB',
  280: '#E4EAF6',
  300: '#DFE3E8',
  350: '#E4EAF6',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  650: '#0C1726',
  700: '#454F5B',
  800: '#212B36',
  850: '#17253B',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const lightModeColor = {
  mainBackgroundColor: '#EBF0F9',
  navbarBackgroundColor: '#F3F6FB',
  searchbarBackgroundColor: '#E4EAF6',
  sidebarBackgroundColor: '#E4EAF6',
  dataTableColor: grey[0],
  dataTableRowColor: '#EBF0F9',
  buttonGradientColor: 'linear-gradient(0deg, rgba(182,207,244,1) 0%, rgba(170,220,244,1) 100%);',
  swapIcon: '/static/uniswapV2.svg',
};

const darkModeColor = {
  mainBackgroundColor: '#0C1726',
  navbarBackgroundColor: '#101B2D',
  searchbarBackgroundColor: '#192D45',
  sidebarBackgroundColor: '#132035',
  dataTableColor: '#033C81',
  dataTableRowColor: '#1A2B47',
  buttonGradientColor: 'linear-gradient(0deg, rgba(25,56,96,1) 0%, rgba(14,68,96,1) 100%);',
  swapIcon: '/static/uniswapDarkV2.svg',
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: {
      paper: GREY[0],
      default: lightModeColor.mainBackgroundColor,
      neutral: lightModeColor.navbarBackgroundColor,
      lighter: lightModeColor.navbarBackgroundColor,
      light: lightModeColor.searchbarBackgroundColor,
      dataTable: lightModeColor.dataTableColor,
      dataTableRow: lightModeColor.dataTableRowColor,
      buttonGradient: lightModeColor.buttonGradientColor,
      dataHolder: GREY[0],
      sidebar: lightModeColor.sidebarBackgroundColor,
    },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: {
      paper: GREY[850],
      default: darkModeColor.mainBackgroundColor,
      neutral: darkModeColor.navbarBackgroundColor,
      lighter: darkModeColor.navbarBackgroundColor,
      light: darkModeColor.searchbarBackgroundColor,
      dataTable: darkModeColor.dataTableColor,
      dataTableRow: darkModeColor.dataTableRowColor,
      buttonGradient: darkModeColor.buttonGradientColor,
      dataHolder: darkModeColor.searchbarBackgroundColor,
      sideBar: darkModeColor.sidebarBackgroundColor,
    },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;
