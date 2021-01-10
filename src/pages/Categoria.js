import React from 'react';
import { useParams } from 'react-router-dom';

function Categoria(){
    let {cat} = useParams();
    return(
        <div>
    <h4>CATEGORIAS: {cat}</h4>
        </div>
    );
}
export default Categoria;