import Axios from 'axios'
import React, {useState, useEffect} from 'react';
import Categories from './Categorias/CategoriesMenu'
import Titulo from './Titulo/titulo'
import Banner from './BannerInfo/Banner'
import UltimoProducto from './UltimoProducto/UltimoProducto';


function Main(){//stateFull

	const [producto, setProducto] = useState({});//siempre poner el tipo de dato que recibimos [] {} ()
	const [usuario, setUsuario] = useState({});
	const [categories, setCategories] = useState([]);

	function fetchProductos(){
		Axios('http://localhost:8080/api/products')
		.then(respuesta=>{
			console.log(respuesta);
			setProducto(respuesta.data)
		})
	}
	function fetchUsers(){
		Axios('http://localhost:8080/api/users')
		.then(respuesta=>{
			console.log(respuesta);
			setUsuario(respuesta.data)
		})
	}
	function fetchCategories(){
		Axios('http://localhost:8080/api/categories')
		.then(respuesta=>{
			console.log(respuesta);
			setCategories(respuesta.data.categorias)	
		})
	}

	useEffect(()=>{
		fetchProductos()
		fetchUsers()
		fetchCategories()
	},[])//no olvidar poner ,[] sino genera un loop interminable

    return (
        <div className="container-fluid">
					
					<Titulo/>
					<Banner usuario={usuario} producto={producto}/>
				
					<div className="row">
						
						<UltimoProducto />
						<Categories name={categories}/>
					</div>
		
		</div>
    )
}

export default Main;