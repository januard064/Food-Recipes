import React,{ useState, useEffect } from "react";
import ResultComponent from "./ResultComponent";

const ResultCategory = ({ match }) => {

    let areaId = match.params.strArea;
    const [recipe, setRecipe] = useState([])

    const getRecipes = async () => {
        const url= `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaId}`;
        const result = await fetch(url);
        const resultJSON = await result.json();
        console.log('kategori Area',resultJSON)
        if(resultJSON.meals){
            setRecipe(resultJSON.meals)
        }
    }

    useEffect(() => {
        getRecipes()
    },[])

    return(
        <>
        <div className="headCategory"><h4>Recipe of {areaId} Area with {recipe.length} search result</h4></div>
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

export default ResultCategory;