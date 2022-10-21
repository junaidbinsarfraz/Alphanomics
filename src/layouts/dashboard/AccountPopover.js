import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Divider, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import MenuPopover from '../../components/MenuPopover';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'My Account',
    icon: 'eva:person-fill',
    linkTo: '/',
  },
  {
    label: 'Resources',
    icon: 'eva:book-open-fill',
    linkTo: '#',
  },
  {
    label: 'Help',
    icon: 'eva:question-mark-circle-outline',
    linkTo: '#',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src="/static/illustrations/profile.svg" alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              <Iconify icon={option.icon} sx={{ mr: 1, fontSize: '1.5em' }} />
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          <Iconify icon="majesticons:logout-half-circle" sx={{ mr: 1, fontSize: '1.5em' }} />
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
