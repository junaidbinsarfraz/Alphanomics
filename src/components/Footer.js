import { Container, Grid, Typography, Stack } from '@mui/material';
import Logo from './Logo';
import Iconify from './Iconify';

export default function Footer() {
  return (
    <>
      <Container
        maxWidth="fluid"
        sx={{
          mt: 5,
          py: 5,
          px: 5,
          backgroundColor: (theme) => theme.palette.background.lighter,
          minHeight: 300,
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between">
            <Grid item xs={12} sm={12} md={5}>
              <Logo />
              <Typography variant="body1" my={3}>
                Join our community
              </Typography>
              <Stack direction="row" mb={3}>
                <Iconify icon="akar-icons:twitter-fill" sx={{ fontSize: '1.2em', color: '#10B3E8' }} />
                <Iconify icon="akar-icons:discord-fill" sx={{ mx: 5, fontSize: '1.2em', color: '#10B3E8' }} />
                <Iconify icon="akar-icons:youtube-fill" sx={{ fontSize: '1.2em', color: '#10B3E8' }} />
              </Stack>
              <Typography variant="caption">Copyright 2022 Alphanomics.io - Privacy Policy</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <Grid container>
                <Grid item xs={6} sm={6} md={3}>
                  <Typography variant="h6" mt={0.5} color="#10B3E8">
                    Features
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Features
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Features
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Features
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Features
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Features
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Features
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <Typography variant="h6" mt={0.5} color="#10B3E8">
                    Whales
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Whales
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Whales
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <Typography variant="h6" mt={0.5} color="#10B3E8">
                    Wallet
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Wallet
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Wallet
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                  <Typography variant="h6" mt={0.5} color="#10B3E8">
                    Resources
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Resources
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Resources
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Resources
                  </Typography>
                  <Typography variant="body2" mt={0.5}>
                    Resources
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}
