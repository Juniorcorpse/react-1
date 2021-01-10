import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function Categoria(){
    let query = useQuery();
    let cat = query.get('tipo');
    let subtipo = query.get('subtipo');
    return(
        <div>
    <h4>CATEGORIAS: {cat} -- {subtipo}</h4>
        </div>
    );
}
export default Categoria;