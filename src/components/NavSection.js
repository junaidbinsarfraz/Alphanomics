import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, ListItemText, ListItemIcon, ListItemButton, Divider } from '@mui/material';
//

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func,
  isOpen: PropTypes.bool,
};

function NavItem({ item, active, isOpen }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);

  const { title, path, icon, info, moreLinks } = item;

  const activeRootStyle = {
    color: theme.palette.secondary.normal,
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.background.paper, theme.palette.action.selectedOpacity),
  };

  if (moreLinks && isOpen) {
    return (
      <>
        <ListItemStyle
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
        </ListItemStyle>
        <List disablePadding sx={{ px: 7 }}>
          {moreLinks.map((item, i) => (
            <ListItemText key={i} disableTypography secondary={item} sx={{ fontSize: 13 }} />
          ))}
        </List>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        mx: 1,
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      {info && info}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array,
  open: PropTypes.bool,
};

export default function NavSection({ navConfig, open, ...other }) {
  const { pathname } = useLocation();

  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
      <List disablePadding>
        {navConfig.map((item, i) => (
          <>
            <NavItem key={i} item={item} active={match} isOpen={open} />
            {i > 2 && <Divider sx={{ my: 2, borderBottomWidth: 3 }} />}
          </>
        ))}
      </List>
    </Box>
  );
}
