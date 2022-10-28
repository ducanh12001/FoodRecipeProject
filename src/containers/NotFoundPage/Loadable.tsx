/**
 * Asynchronously loads the component for NotFoundPage
 */

import React from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';
import loadable from '../../utils/loadable';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
