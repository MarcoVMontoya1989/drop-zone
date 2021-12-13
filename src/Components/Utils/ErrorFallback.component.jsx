import React from 'react';

const ErrorFallbackComponent = ({error}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

export default ErrorFallbackComponent;
