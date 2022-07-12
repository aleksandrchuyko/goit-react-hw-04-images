import { Box } from 'components/Box';
import { LoadMore } from './Button.styled';
export const Button = ({ onButtonClick }) => {
  return (
    <Box>
      <LoadMore>Load more</LoadMore>
    </Box>
  );
};
