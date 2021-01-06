import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => <main>{children}</main>;

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
