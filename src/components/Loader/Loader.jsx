import { Audio } from 'react-loader-spinner';
import { Box } from 'components/Box';

export const Loader = () => {
  return (
    <Box
      height="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Audio height="300" width="300" color="grey" ariaLabel="loading" />
    </Box>
  );
};
