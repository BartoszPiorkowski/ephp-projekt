import React from 'react';
import PropTypes from 'prop-types';

const TableTitle = (props) => <h3>{props.title}</h3>;

TableTitle.propTypes = {
  title: PropTypes.string,
};

export default TableTitle;
