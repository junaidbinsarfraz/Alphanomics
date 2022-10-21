import { Paper, InputBase, Box } from '@mui/material';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '55%',
        ml: 2,
        backgroundColor: (theme) => theme.palette.background.searchbarBackgroundColor,
      }}
    >
      <Box component="img" src="/static/illustrations/search.svg" p={1} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Tokens / Wallets using names / addresses"
        inputProps={{ 'aria-label': 'search bar' }}
      />
    </Paper>
  );
}
