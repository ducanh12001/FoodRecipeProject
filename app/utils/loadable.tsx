import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';

const loadable = (importFunc: any, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default loadable;
