import { Box } from 'components/Box';
import { LoadMore } from './Button.styled';
export const Button = ({ onButtonClick }) => {
  return (
    <Box>
      <LoadMore type="button" onClick={onButtonClick}>Load more</LoadMore>
    </Box>
  );
};
