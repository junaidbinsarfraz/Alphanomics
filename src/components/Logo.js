import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';
import useSettings from '../hooks/useSettings';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const { themeMode } = useSettings();

  const logo =
    themeMode === 'light' ? (
      <Box component="img" src="/static/lightLogo.svg" sx={{ width: 207, height: 32, mr: 2, ...sx }} />
    ) : (
      <Box component="img" src="/static/logo.svg" sx={{ width: 207, height: 32, mr: 2, ...sx }} />
    );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
