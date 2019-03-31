import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TodoLink = ({ link = '', text = '' }) => (
  <Link to={link}>
    {text}
  </Link>
);
TodoLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
};

export default memo(TodoLink);
