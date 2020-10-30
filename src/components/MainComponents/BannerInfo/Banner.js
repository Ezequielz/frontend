import React from "react";
import PrecioTotal from "./Info/PrecioTotal";
import ProductosTotal from './Info/ProductosTotal'
import UsuariosTotal from "./Info/UsuariosTotal";


function Banner(props) {
  return (
    <div className="row">
						
        <ProductosTotal producto={props.producto}/>

        <PrecioTotal producto={props.producto}/>

        <UsuariosTotal usuario={props.usuario}/>

    </div>

  );
}


export default Banner;