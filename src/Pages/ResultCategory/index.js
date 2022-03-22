import React,{ useState, useEffect } from "react";
import ResultComponent from "./ResultComponent";
import './Result.css';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

import { Link } from 'react-router-dom'

const ResultAreas = ({ match }) => {

    let categoryId = match.params.strCategory;
    const [recipe, setRecipe] = useState([])

    const getRecipes = async () => {
        const url= `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`;
        const result = await fetch(url);
        const resultJSON = await result.json();
        if(resultJSON.meals){
            setRecipe(resultJSON.meals)
        }
    }

    useEffect(() => {
        getRecipes()
    },[])

    return(
        <>
        <div className="container">
            {/* <div className="col-12" style={{ marginTop:30 }}>
                <Breadcrumb>
                    <BreadcrumbItem> <Link style={{ textDecoration:'none', color:'#4B5368'  }} to={`/category`}>Categories</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>{categoryId}</BreadcrumbItem>
                </Breadcrumb>
            </div> */}
        </div>
         <div className="headCategory"><h4>Categories {categoryId} with {recipe.length} search result</h4></div>
         <div className="container">
            <div className="row align-items-start">
                {
                    recipe.map((recipes) => <ResultComponent recipes={recipes} />)
                }
            </div>
         </div>
        
        </>
    )
}

export default ResultAreas;