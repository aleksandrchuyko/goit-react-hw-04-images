import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box as="section" display="flex" flexDirection="column">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
