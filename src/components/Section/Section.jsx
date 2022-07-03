import { Box } from 'components/Box';
import { SectionTitle } from './Section.styled';

export const Section = props => {
  return (
    <Box as="section" display="flex" flexDirection="column">
      <SectionTitle>{props.title}</SectionTitle>
      {props.children}
    </Box>
  );
};
