import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { NotificationText } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <Box>
      <NotificationText>{message}</NotificationText>
    </Box>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
