import React, { Fragment, memo } from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Content = ({ logo, logoAlt, text }) => (
  <Fragment>
    <img className="App-logo-img"
         src={logo}
         alt={logoAlt}
    />
    {text}
  </Fragment>
);
const AppLogo = ({ linkClassName = '', logo = '', logoAlt = '', href = '', external = false, text = '' }) => (
  <div className="App-logo">
    {external ?
      <a className={linkClassName}
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         children={<Content text={text}
                            logo={logo}
                            logoAlt={logoAlt}
         />}
      /> :
      <Link to={href}
            className={linkClassName}
            children={<Content text={text}
                               logo={logo}
                               logoAlt={logoAlt}
            />}
      />}
  </div>
);

AppLogo.propTypes = {
  linkClassName: PropTypes.string,
  logo: PropTypes.string,
  logoAlt: PropTypes.string,
  href: PropTypes.string,
  external: PropTypes.bool,
  text: PropTypes.string
};

export default memo(AppLogo);
