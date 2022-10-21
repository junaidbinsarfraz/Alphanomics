// component
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const getIcon = (name) => <Box component="img" src={name} sx={{ width: 22, height: 22 }} />;

const navConfig = [
  {
    title: 'Live DEX Master',
    path: '/dashboard/app',
    icon: getIcon('/static/illustrations/sidebar/dollar-circle.svg'),
    moreLinks: [],
  },
  {
    title: 'Live NFT Master',
    path: '#',
    icon: getIcon('/static/illustrations/sidebar/direct-normal.svg'),
    moreLinks: [],
  },
  {
    title: 'Token Genius',
    path: '#',
    icon: getIcon('/static/illustrations/sidebar/wallet-add.svg'),
    moreLinks: [],
  },
  {
    title: 'NFT Genius',
    path: '#',
    icon: getIcon('/static/illustrations/sidebar/wallet-add.svg'),
    moreLinks: [],
  },
  {
    title: 'DEX Toolkit',
    path: '#',
    icon: getIcon('/static/illustrations/sidebar/hashtag.svg'),
    moreLinks: ['Live DEX Master', 'Token Genius', 'Wallet Deep Explorer'],
  },
  {
    title: 'NFT Toolkit',
    path: '#',
    icon: getIcon('/static/illustrations/sidebar/chart-square.svg'),
    moreLinks: ['Live NFT Master', 'NFT Genius', 'NFT Deep Explorer'],
  },
  {
    title: 'Discovery Alpha',
    path: '#',
    icon: getIcon('/static/illustrations/sidebar/health.svg'),
    moreLinks: ['Stablecoin Stream', 'Smart Whales'],
  },
];

export default navConfig;
