import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { AppLogo } from '..';

const AppLogos = ({ logos = [] }) => (
  <div className="App-logos">
    {logos.map(({ linkClassName, logo, logoAlt, href, external, text }, key) => (
      <AppLogo key={key}
               linkClassName={linkClassName}
               logo={logo}
               logoAlt={logoAlt}
               href={href}
               external={external}
               text={text}
      />
    ))}
  </div>
);

AppLogos.propTypes = {
  logos: PropTypes.array
};

export default memo(AppLogos);
