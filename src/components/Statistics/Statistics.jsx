import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatisticField } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positivePercent,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="start">
      <StatisticField>Good: {good}</StatisticField>
      <StatisticField>Neutral: {neutral}</StatisticField>
      <StatisticField>Bad: {bad}</StatisticField>
      <StatisticField>Total: {totalFeedbacks}</StatisticField>
      <StatisticField>Positive feedback: {positivePercent}%</StatisticField>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};
