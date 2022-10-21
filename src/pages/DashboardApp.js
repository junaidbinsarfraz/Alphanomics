import { useEffect, useState } from 'react';
import { Grid, Container, Typography, Stack, IconButton, Box, Snackbar, Alert, Skeleton } from '@mui/material';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import NftTable from '../components/NftTable';
import { fetchNetwork } from '../api/GetNetwork';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchNetwork()
      .then((response) => {
        setData(response?.data);
      })
      .catch(() => {
        setOpen(true);
      });
  }, []);
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={6000}
        key={`top center`}
      >
        <Alert severity="error" onClose={() => setOpen(false)}>
          Something went wrong!
        </Alert>
      </Snackbar>
      <Page title="Dashboard">
        <Container maxWidth="fluid">
          <Grid container>
            <Grid item xs={12} sm={12} md={3}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Live Dex Master
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <Stack
                direction="row"
                flexGrow={1}
                justifyContent={{ xs: 'center', sm: 'center', md: 'flex-end' }}
                flexWrap="wrap"
                mb={2}
                spacing={1}
              >
                <Box mb={{ xs: 2, md: 0 }}>
                  <IconButton
                    aria-label="open drawer"
                    edge="start"
                    sx={{
                      ml: 1,
                      background: (theme) => theme.palette.background.buttonGradient,
                      borderRadius: 1,
                      py: 1.2,
                      mr: 1,
                    }}
                  >
                    <Iconify icon="material-symbols:cached-rounded" sx={{ color: '#18AAE8' }} />
                  </IconButton>
                </Box>
                <Box mb={{ xs: 2, md: 0 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    py={1.2}
                    px={2}
                    mr={1}
                    sx={{ backgroundColor: (theme) => theme.palette.background.dataHolder, borderRadius: '.5em' }}
                  >
                    {data ? (
                      <>
                        <Box component="img" src="/static/illustrations/3d-square.svg" mr={0.5} />
                        <Typography variant="body2" sx={{ color: (theme) => theme.palette.secondary.normal }}>
                          {`$${data?.latest_block}`}
                        </Typography>
                      </>
                    ) : (
                      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
                    )}
                  </Stack>
                </Box>
                <Box mb={{ xs: 2, md: 0 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    py={1.2}
                    px={2}
                    mr={1}
                    sx={{ backgroundColor: (theme) => theme.palette.background.dataHolder, borderRadius: '.5em' }}
                  >
                    {data ? (
                      <>
                        <Box component="img" src="/static/illustrations/sidebar/ethereum.svg" mr={0.5} />
                        <Typography variant="body2" sx={{ color: (theme) => theme.palette.secondary.normal }}>
                          {`$${data?.eth_price}`}
                        </Typography>
                      </>
                    ) : (
                      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
                    )}
                  </Stack>
                </Box>
                <Box mb={{ xs: 2, md: 0 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    py={1.2}
                    px={2}
                    mr={1}
                    sx={{ backgroundColor: (theme) => theme.palette.background.dataHolder, borderRadius: '.5em' }}
                  >
                    {data ? (
                      <>
                        <Box component="img" src="/static/illustrations/flash.svg" mr={0.5} />
                        <Typography variant="body2" sx={{ color: (theme) => theme.palette.secondary.normal }}>
                          {`$${data?.gas_price}`}
                        </Typography>
                      </>
                    ) : (
                      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
                    )}
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <NftTable />
            </Grid>
          </Grid>
        </Container>
      </Page>
    </>
  );
}
