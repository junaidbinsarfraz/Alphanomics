import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import fallbackImage from './ethereum.png';

export default function MyAvatar({ image }) {
  const [url, setUrl] = useState(image);

  const errorHandler = () => {
    setUrl(fallbackImage);
  };

  return (
    <Avatar
      src={url}
      imgProps={{
        onError: errorHandler,
      }}
      sx={{ width: 24, height: 24, mr: 1 }}
    />
  );
}

MyAvatar.propTypes = {
  image: PropTypes.string,
};
