import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  CssBaseline,
  Divider,
  IconButton,
  Link,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import Iconify from '../../components/Iconify';
import navConfig from './NavConfig';
import NavSection from '../../components/NavSection';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import NavbarLinks from '../../components/NavbarLinks';
import HideOnScroll from '../../components/HideOnScroll';

const drawerWidth = 240;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 64;

MiniDrawer.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 2),
  },
}));

export default function MiniDrawer(props) {
  const { open, setOpen } = props;
  const pathName = useLocation();

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
    // eslint-disable-next-line
  }, [pathName]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar open={open} sx={{ backgroundColor: (theme) => theme.palette.background.lighter }}>
          <ToolbarStyle disableGutters>
            {!open && (
              <>
                <Box>
                  <Logo />
                </Box>
              </>
            )}
            <Box />
            <SearchBar />
            <NavbarLinks />
          </ToolbarStyle>
        </AppBar>
      </HideOnScroll>
      <HideOnScroll {...props}>
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            sx: { backgroundColor: (theme) => theme.palette.background.sideBar, minWidth: '80px !important' },
          }}
        >
          <DrawerHeader
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: (theme) => theme.palette.background.lighter,
            }}
          >
            <Box py={2.3} sx={{ ...(!open && { display: 'none' }) }}>
              <Logo />
            </Box>
          </DrawerHeader>
          <Box mt={3}>
            <IconButton
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
              sx={{
                mx: 2.2,
                backgroundColor: (theme) => theme.palette.background.paper,
                borderRadius: 1,
                ...(open && { display: 'none' }),
              }}
            >
              <Box component="img" src="/static/illustrations/sidebar/ethereum.svg" />
            </IconButton>
          </Box>

          {open && (
            <Box sx={{ my: 3, mx: 1 }}>
              <Link underline="none" component={RouterLink} to="#">
                <AccountStyle>
                  <Box component="img" src="/static/illustrations/sidebar/ethereum.svg" />
                  <Box sx={{ mx: 2 }}>
                    <Typography variant="subtitle2" sx={{ color: (theme) => theme.palette.secondary.normal }}>
                      Ethereum
                    </Typography>
                  </Box>
                  <Iconify
                    icon="akar-icons:chevron-down"
                    sx={{ color: (theme) => theme.palette.secondary.normal }}
                    onClick={() => setOpen(false)}
                  />
                </AccountStyle>
              </Link>
            </Box>
          )}
          <Divider sx={{ my: 3, borderBottomWidth: 3 }} />
          <NavSection navConfig={navConfig} open={open} />
        </Drawer>
      </HideOnScroll>
    </Box>
  );
}
