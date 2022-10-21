import axios from 'axios';

export const fetchNft = async (page, pageSize) => {
  const config = {
    method: 'GET',
    url: `https://platform-api.alphanomics.io/dex/transactions/?page=${page}&page_size=${pageSize}`,
  };
  try {
    return await axios(config);
  } catch (error) {
    return error;
  }
};
