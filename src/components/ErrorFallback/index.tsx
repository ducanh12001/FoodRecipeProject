import React from 'react';
import PropTypes from 'prop-types';


interface Props {
  error: Error;
  resetErrorBoundary: (...arg: any[]) => any;
}
const ErrorFallback = (props: Props) => {
  const { error, resetErrorBoundary, } = props;
  return (
    <div role="alert">
      <p>somethingWrong</p>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        tryAgain
      </button>
    </div>
  );
};

// ErrorFallback.propTypes = {
//   error: PropTypes.object,
//   resetErrorBoundary: PropTypes.func,
//   intl: PropTypes.object.isRequired,
// };

export default ErrorFallback;
