import { Box } from 'components/Box';
import {
  FeedbackButton,
  ButtonsBar,
  ButtonsBarItem,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box display="flex" justifyContent="center">
      <ButtonsBar>
        {options.map(option => (
          <ButtonsBarItem key={option}>
            <FeedbackButton
              type="button"
              data-option={option}
              onClick={e => {
                onLeaveFeedback(e.target.dataset.option);
              }}
            >
              {option}
            </FeedbackButton>
          </ButtonsBarItem>
        ))}
      </ButtonsBar>

      {/* {options.map(( option ) => (
              
        
          <button type="button" key={option}>
            {option}
          </button>
        
      ))} */}
    </Box>
  );
};
