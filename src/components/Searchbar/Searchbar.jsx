import { Box } from 'components/Box';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Box>
      <form>
        <input type="text" name="name" />
        <button type="submit"></button>
      </form>
    </Box>
  );
};
