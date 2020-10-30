import React from "react";
import PropTypes from 'prop-types'

function Titulo() {
   
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Universo Camping Dashboard</h1>
    </div>
  );
}

Titulo.propTypes = {
    name : PropTypes.string
}


export default Titulo;
