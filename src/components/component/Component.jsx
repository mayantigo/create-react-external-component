import React from 'react';
import PropTypes from 'prop-types';
import './Component.css';

export default function Component({ title }) {
  return <div className="Component">{title}</div>;
}

Component.propTypes = {
  title: PropTypes.string.isRequired,
};
