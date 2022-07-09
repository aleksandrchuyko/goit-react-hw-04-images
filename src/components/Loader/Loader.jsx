import { Audio } from 'react-loader-spinner';

export const Loader = ({ isLoading }) => {
  return (
      <div>
          {isLoading && (<Audio height="100" width="100" color="grey" ariaLabel="loading" />)}
    </div>
  );
};
