import { Stack, Button, Box } from '@mui/material';
import ThemeMode from './ThemeMode';
import AccountPopover from '../layouts/dashboard/AccountPopover';

const pages = ['Smart Alerts', 'Watchlist'];

export default function NavbarLinks() {
  return (
    <Stack direction="row" alignItems="center" ml="auto" pr={5} spacing={{ xs: 0.5, sm: 1.5 }}>
      <Box display={{ xs: 'none', md: 'flex' }} justifyContent="space-evenly">
        {pages.map((page) => (
          <Button
            key={page}
            sx={{
              my: 2,
              mx: 2,
              display: 'block',
              fontWeight: 400,
              fontSize: 16,
              color: (theme) => theme.palette.text.primary,
              '&:hover': {
                background: 'none',
              },
            }}
          >
            {page}
          </Button>
        ))}
        <ThemeMode />
      </Box>
      <AccountPopover />
    </Stack>
  );
}
