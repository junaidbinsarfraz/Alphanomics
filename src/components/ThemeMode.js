import { IconButton, Box } from '@mui/material';
import useSettings from '../hooks/useSettings';

export default function ThemeMode() {
  const { themeMode, onChangeMode } = useSettings();

  return (
    <Box display="flex" alignItems="center">
      <IconButton aria-label="theme view mode" sx={{ mx: 2 }} onClick={onChangeMode}>
        {themeMode === 'light' ? (
          <Box component="img" src="/static/illustrations/sun.svg" />
        ) : (
          <Box component="img" src="/static/illustrations/moon.svg" />
        )}
      </IconButton>
    </Box>
  );
}
