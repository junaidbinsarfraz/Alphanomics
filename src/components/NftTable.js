import { useState, useEffect } from 'react';
import { Stack, Skeleton, Avatar, Snackbar, Alert, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import MyAvatar from './MyAvatar/MyAvatar';
import { fetchNft } from '../api/GetNft';
import useSettings from '../hooks/useSettings';

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.background.dataTableRow,
  },
}));

let theme = localStorage.getItem('settings');
theme = JSON.parse(theme);

const columns = [
  { field: 'id', headerName: 'ID', hide: true },
  {
    field: 'dex',
    headerName: 'AMM',
    editable: false,
    sortable: false,
    width: 70,
    renderCell: (params) => (
      <>
        {params?.row?.dex === 'Sushiswap' ? (
          <Avatar
            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png"
            sx={{ width: 24, height: 24, mr: 1 }}
          />
        ) : params?.row?.dex === 'Uniswap V3' ? (
          <Avatar src="/static/uniswapV3.svg" sx={{ width: 24, height: 24, mr: 1 }} />
        ) : (
          params?.row?.dex === 'Uniswap V2' && (
            <Avatar
              src={theme?.themeMode === 'light' ? '/static/uniswapV2.svg' : '/static/uniswapV2Dark.svg'}
              sx={{ width: 24, height: 24, mr: 1 }}
            />
          )
        )}
      </>
    ),
  },
  {
    field: 'timestamp_ago',
    headerName: 'Timestamp UTC',
    width: 130,
    editable: false,
    sortable: false,
    renderCell: (params) => (
      <Typography variant="caption" color={(theme) => theme.palette.secondary.normal}>
        {params?.row?.timestamp_ago}
      </Typography>
    ),
  },
  {
    field: 'initial_asset_symbol',
    headerName: '',
    width: 130,
    editable: false,
    sortable: false,
    renderCell: (params) => (
      <>
        <MyAvatar image={params?.row?.initial_asset_logo} />
        <Typography variant="caption" color={(theme) => theme.palette.secondary.normal}>
          {params?.row?.initial_asset_symbol}
        </Typography>
      </>
    ),
  },
  {
    field: 'initial_amount',
    headerName: 'Initial Asset & QTY',
    width: 180,
    editable: false,
    sortable: false,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  {
    field: 'final_asset_logo',
    headerName: ``,
    width: 130,
    editable: false,
    sortable: false,
    renderCell: (params) => (
      <>
        <MyAvatar image={params?.row?.final_asset_logo} />
        <Typography variant="caption" color={(theme) => theme.palette.secondary.normal}>
          {params?.row?.final_asset_symbol}
        </Typography>
      </>
    ),
  },
  {
    field: 'final_amount',
    headerName: `Final Asset & QTY`,
    width: 180,
    editable: false,
    sortable: false,
    valueFormatter: ({ value }) => value.toFixed(2),
  },
  { field: 'from_address', headerName: `Maker Wallet`, width: 180, editable: false, sortable: false },
  { field: 'tx_hash', headerName: `Txn Hash`, width: 180, editable: false, sortable: false },
  {
    field: 'gas_price',
    headerName: `Gwei Price`,
    width: 180,
    editable: false,
    sortable: false,
    renderCell: (params) => <>{`$${params?.row?.gas_price.toFixed(2)}`}</>,
  },
  {
    field: 'tx_fee',
    headerName: `Txn Fee`,
    width: 180,
    editable: false,
    sortable: false,
    renderCell: (params) => <>{`$${params?.row?.tx_fee.toFixed(2)}`}</>,
  },
];

export default function PageSizeCustomOptions() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(100);
  const [nftData, setNftData] = useState();
  const [open, setOpen] = useState(false);
  const { themeMode } = useSettings();
  theme.themeMode = themeMode;

  useEffect(() => {
    fetchNft(page, pageSize)
      .then((response) => {
        setNftData(response?.data?.transactions);
      })
      .catch(() => {
        setOpen(true);
      });
    // eslint-disable-next-line
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
      <Stack sx={{ height: 800, width: '100%' }}>
        {nftData?.length <= 0 ? (
          <Skeleton variant="rounded" sx={{ height: 800, width: '100%' }} />
        ) : (
          <StripedDataGrid
            rows={nftData ?? []}
            columns={columns}
            pageSize={pageSize}
            onPageChange={(newPage) => setPage(newPage)}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 50]}
            pagination
            getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
            rowHeight={45}
            disableColumnMenu
            loading={!nftData}
            sx={{
              backgroundColor: (theme) => theme.palette.background.paper,
              borderRadius: 3,
            }}
          />
        )}
      </Stack>
    </>
  );
}
