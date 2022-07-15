import { Audio } from 'react-loader-spinner';
import { Box } from 'components/Box';

export const Loader = () => {
  return (
    <Box
      height="30vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Audio height="150" width="150" color="grey" ariaLabel="loading" />
    </Box>
  );
};
