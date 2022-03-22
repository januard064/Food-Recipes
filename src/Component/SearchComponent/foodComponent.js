import React,{useState} from "react";
import './SearchComponent.css';
import {Icon} from '@iconify/react';
import SearchComponentIngredients from "../SearchComponentIngredients";
import { Link } from "react-router-dom";


const FoodComponent = ({exploring}) => {


    const[tampil, setTampil] =useState(false)

    return(
        <div key={exploring.idMeal} className="col-12 col-sm-6 col-md-4">
        <div class="cards">
            <div><img className="images" src={exploring.strMealThumb} /></div>
            <div class="box2 ">
                <div className="col-12 ket">
                    <div className="col-12 title">
                        {exploring.strMeal}
                    </div>
                    <div className="col-12 kategori">
                        <button> <Link className="links" to={`/categorys/${exploring.strCategory}`}>{exploring.strCategory}</Link> </button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 action">
                        <button className="buttonIngredient" onClick={() => setTampil(!tampil)}>Ingredients<span> <Icon icon="bi:arrow-down-square" /></span></button>
                        <button className="buttonDetail"><Link className="links" to={`/recipe/${exploring.idMeal}`}>Details<span> <Icon icon="bi:arrow-up-right-square" /></span></Link></button>
                    </div>
                </div>
            </div>
            
        </div>
        {tampil &&
        <SearchComponentIngredients key={exploring.idMeal}
                                    ingredients1={exploring.strIngredient1} 
                                    ingredients2={exploring.strIngredient2}
                                    ingredients3={exploring.strIngredient3}
                                    ingredients4={exploring.strIngredient4}
                                    ingredients5={exploring.strIngredient5}
                                    ingredients6={exploring.strIngredient6}
                                    ingredients7={exploring.strIngredient7}
                                    ingredients8={exploring.strIngredient8}
                                    ingredients9={exploring.strIngredient9}
                                    ingredients10={exploring.strIngredient10}
                                    ingredients11={exploring.strIngredient11}
                                    ingredients12={exploring.strIngredient12}
                                    ingredients13={exploring.strIngredient13}
                                    ingredients14={exploring.strIngredient14}
                                    ingredients15={exploring.strIngredient15}
                                    ingredients16={exploring.strIngredient16}
                                    ingredients17={exploring.strIngredient17}
                                    ingredients18={exploring.strIngredient18}
                                    ingredients19={exploring.strIngredient19}
                                    ingredients20={exploring.strIngredient20}
                                    
        /> }
    </div>
    )
}

export default FoodComponent;