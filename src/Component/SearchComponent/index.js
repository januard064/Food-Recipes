import React,{useState} from "react";
import {Icon} from '@iconify/react';
import './SearchComponent.css';
// import SearchComponentIngredients from "../SearchComponentIngredients";
// import { Link } from "react-router-dom";
import FoodComponent from "./foodComponent";

function SearchComponent(props){

    const [tampil, setTampil] = useState(false)

    if(props.search.length == 0){
        return(
            <div className="col-12 datakosong">Tidak ada data menu untuk ditampilkan</div>
        )
    } else {
        return(
            <>
            { props.search !==[] && props.search.map((exploring) => <FoodComponent exploring={exploring} />) }
            </>
        )
     
    }
}

export default SearchComponent;
