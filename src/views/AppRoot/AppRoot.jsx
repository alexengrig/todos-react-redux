import React, { memo } from 'react';
import { AppLogos } from '../../components';
import { logos as initialLogos } from '../../variables';

const AppRoot = () => (
  <div className="App-root">
    <AppLogos logos={initialLogos} />
  </div>
);

export default memo(AppRoot);
