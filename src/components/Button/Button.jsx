import { Box } from 'components/Box';
import { LoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onButtonClick }) => {
  return (
    <Box>
      <LoadMore type="button" onClick={onButtonClick}>
        Load more
      </LoadMore>
    </Box>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
