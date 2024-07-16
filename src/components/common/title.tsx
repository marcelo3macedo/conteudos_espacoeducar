import React from 'react';
import PropTypes from 'prop-types';
import { PageTitleProps } from './props/title';

const Title = ({ children }: PageTitleProps) => {
  return <h2 className="text-lg md:text-2xl font-bold py-2">{children}</h2>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
