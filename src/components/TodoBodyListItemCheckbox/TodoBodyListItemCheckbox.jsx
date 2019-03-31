import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { Checkbox } from '@material-ui/core';
import {
  CheckBoxOutlineBlankOutlined as CheckBoxOutlineBlankOutlinedIcon,
  CheckBoxOutlined as CheckBoxOutlinedIcon
} from '@material-ui/icons';

const TodoBodyListItemCheckbox = ({ classes = {}, checked = false, onChangeCheck = f => f }) => (
  <Checkbox className={classes.bodyListItemCheckbox}
            checked={checked}
            onChange={(event, checked) => onChangeCheck(checked)}
            icon={<CheckBoxOutlineBlankOutlinedIcon fontSize="small" />}
            checkedIcon={<CheckBoxOutlinedIcon fontSize="small" />}
  />
);

TodoBodyListItemCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  onChangeCheck: PropTypes.func.isRequired
};

export default memo(TodoBodyListItemCheckbox);
