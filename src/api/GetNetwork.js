import axios from 'axios';

export const fetchNetwork = async () => {
  const config = {
    method: 'GET',
    url: `https://platform-api.alphanomics.io/network/info/`,
  };
  try {
    return await axios(config);
  } catch (error) {
    return error;
  }
};
